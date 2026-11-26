import { TIMEOUT_MESSAGE, retryOnTimeout } from './withTimeout';

// `start()` begins a fresh read each time. No answer within `ms`: ask again.
// Do NOT toggle disableNetwork/enableNetwork to "reconnect": it fails every other read with "client is offline"
// and, on a slow connection, cancels the very queries still on their way.
export const readWithRetry = (start, { ms = 10_000, tries = 3 } = {}) => retryOnTimeout(start, { ms, tries });
export { TIMEOUT_MESSAGE };
