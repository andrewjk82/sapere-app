# Pokémon Card Stock Monitor Design

## Goal

Create a standalone monitor in `pokemon-stock-monitor/` that checks Pokémon Trading Card Game products sold by Kmart, Target Australia, BIG W, and Myer. Every 30 minutes, send a Telegram digest covering online orderability and nearby store availability for postcode 2067 (Chatswood, NSW).

This is a separate utility, not a feature of the Sapere education app.

## User-visible behaviour

- Discover card products from each retailer's public storefront using Australian Pokémon TCG search terms and product categories.
- Include sealed TCG products such as booster packs and boxes, Elite Trainer Boxes, tins, bundles, collections, and starter/battle decks. Exclude unrelated Pokémon toys, clothing, and accessories.
- Check whether each discovered item can be ordered online and whether it is available at stores the retailer returns for postcode 2067.
- Send one digest every 30 minutes, including a concise result when no stock is available. A digest lists available products with retailer, product name, price when shown, product link, online status, and nearby store statuses. It also summarizes check coverage and any retailer whose data could not be retrieved.
- Split long digests into Telegram-safe chunks. The Telegram Bot API limits text messages to 4096 characters.

The target is all matching products indexed by the four retailers at check time. It cannot include products that a retailer has not published or does not expose through its public storefront.

## Architecture

Build a small Node.js 20 service contained in `pokemon-stock-monitor/` with its own `package.json`, configuration example, documentation, and state directory. It has four retailer adapters that normalize retailer-specific pages or public endpoints into a common product and availability record. The shared pipeline performs discovery, product de-duplication, online/store stock checks, digest formatting, and Telegram delivery.

Use only unauthenticated, publicly accessible storefront information. Apply conservative request pacing, bounded concurrency, caching, and per-retailer timeouts. Do not bypass login, access controls, CAPTCHAs, or anti-bot challenges. If a site changes or declines automated requests, mark that retailer as unavailable in the digest and logs rather than inferring stock.

Persist the discovered catalog and last check metadata in a local state file so products are de-duplicated and each run can recover after restart. Each check has a lock to prevent overlapping runs. A retailer failure must not prevent results from other retailers from being delivered.

## Scheduling and delivery

Run the monitor as a standalone process on the user's Mac, scheduled every 30 minutes with a macOS LaunchAgent. The computer must be awake and connected for checks to run. The schedule uses Australia/Sydney local operation and sends each completed run's digest through Telegram's HTTPS Bot API `sendMessage` method.

Configuration is read from environment variables (documented in `.env.example`): Telegram bot token, Telegram chat ID, and the postcode (default `2067`). Never commit real credentials or include them in logs. Setup documentation explains creating a bot, obtaining the chat ID, installing dependencies, validating credentials with a test send, and loading/unloading the LaunchAgent.

## Data model

Each normalized product has retailer, product ID or canonical URL, name, product URL, price/currency when available, seller when available, and product type. Each check records timestamp, online availability (`in_stock`, `out_of_stock`, `preorder`, or `unknown`), and store availability keyed by retailer store ID/name using the same status values. `unknown` is distinct from `out_of_stock`.

## Reliability and limitations

- Retailers can change page structure or inventory endpoints without notice. Adapters must fail visibly and independently.
- Search coverage depends on each retailer's public catalog and matching terms; completeness cannot be guaranteed.
- Store inventory can change between checks and may differ from shelf stock. The report is informational, not a reservation.
- Public storefront access may not expose every store-level status or exact quantities.
- A Mac that is asleep or offline will miss scheduled checks until it is available again.
- Repeated 30-minute digests are intentional, even when availability has not changed, because the requested behaviour is a periodic report.

## Validation

Before regular operation, validate each adapter against a small set of known product pages and confirm that reported states distinguish in-stock, out-of-stock, preorder, and unknown. Verify postcode store selection, Telegram delivery and message splitting, restart recovery, overlap protection, and graceful partial retailer failures. Do not send real Telegram messages during automated tests; use a mocked sender, then provide a manual setup command for the user's own test message.

## Out of scope

- Forecasting future restock dates.
- Automated checkout, purchase, cart creation, or retailer account login.
- A web dashboard or Sapere app integration.
- Alerts only on state changes; the requested behaviour is a digest every 30 minutes.
