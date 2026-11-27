import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { useToast } from '../../context/ToastContext';
import { ACCENT, CLOTH, DEFAULT, HAIRC, IRIS, OPT, SKIN, heroConfig } from '../../utils/pixelHero';
import { balanceOf, isOwned, priceOf } from '../../utils/heroShop';
import { buyHeroItem } from '../../services/heroShopService';
import PixelHero from './PixelHero';

// The My Hero page: Wardrobe (what the student owns, colours) and Shop (what coins can buy, tried on before buying).
const GROUPS = {
  eyes: ['Eyes', 'head'], brows: ['Eyebrows', 'head'], mouth: ['Mouth', 'head'], ears: ['Ears', 'head'], hair: ['Hairstyle', 'head'],
  head: ['Headgear', 'head'], cls: ['Outfit', 'full'], hand: ['In hand', 'full'], off: ['Other hand', 'full'], back: ['On the back', 'full'],
  face: ['Accessories', 'head'], pet: ['Pet', 'full'],
};
const TABS = [
  ['face', 'Face', ['eyes', 'brows', 'mouth', 'face'], [['iris', 'Eye colour', IRIS], ['skin', 'Skin', SKIN]]],
  ['hair', 'Hair', ['hair'], [['hairColor', 'Hair colour', HAIRC]]],
  ['hat', 'Hat', ['head', 'ears'], []],
  ['outfit', 'Outfit', ['cls'], [['cloth', 'Main colour', CLOTH], ['accent', 'Trim colour', ACCENT]]],
  ['gear', 'Gear', ['hand', 'off', 'back'], []],
  ['pet', 'Pet', ['pet'], []],
];

export default function HeroPage({ onBack }) {
  const { user } = useAuth();
  const { profile } = useProfile();
  const { showToast } = useToast();
  const [mode, setMode] = useState('wardrobe');     // 'wardrobe' | 'shop'
  const [tab, setTab] = useState('hair');
  const [draft, setDraft] = useState(null);         // null = showing what is saved
  const [trying, setTrying] = useState(null);       // { group, id } tried on in the shop
  const [busy, setBusy] = useState(false);

  const saved = heroConfig(profile?.avatar);
  const look = draft || saved;
  const shown = trying ? { ...look, [trying.group]: trying.id } : look;
  const balance = balanceOf(profile);
  const price = trying ? priceOf(trying.group, trying.id) : 0;
  const current = TABS.find((t) => t[0] === tab);
  const set = (key, value) => setDraft({ ...look, [key]: value });
  const switchMode = (m) => { setMode(m); setTrying(null); };

  const run = async (work, done) => {
    if (!user?.uid || busy) return;
    setBusy(true);
    try {
      await work();
      setDraft(null);
      setTrying(null);
      showToast(done, 'success');
    } catch (err) {
      console.error('Hero save failed:', err);
      showToast(err?.message === 'not-enough-coins' ? 'Not enough coins yet.' : 'Could not save. Check your connection.', 'error');
    } finally { setBusy(false); }
  };
  const save = () => run(() => setDoc(doc(db, 'users', user.uid), { avatar: look }, { merge: true }), 'Your hero is saved!');
  const buy = () => run(() => buyHeroItem(user.uid, trying.group, trying.id, look), 'New item unlocked!');

  return (
    <div className="hero-page">
      <header className="hero-top">
        {onBack && <button type="button" className="hero-btn" onClick={onBack}>‹ Back</button>}
        <h1>My Hero</h1>
        <span className="hero-xp" aria-live="polite">🪙 {balance.toLocaleString()} coins</span>
      </header>
      <div className="hero-modes" role="tablist">
        {[['wardrobe', '👕 Wardrobe'], ['shop', '🛍️ Shop']].map(([key, label]) => (
          <button key={key} type="button" role="tab" aria-selected={mode === key} className={`hero-mode${mode === key ? ' is-on' : ''}`} onClick={() => switchMode(key)}>{label}</button>
        ))}
      </div>

      <div className="hero-maker">
        <div className="hero-side">
          <div className="hero-stage"><PixelHero config={shown} blinking walkPet label="Your hero" /></div>
          {trying ? (
            <div className="hero-buy">
              <b>{OPT[trying.group].find((o) => o[0] === trying.id)?.[1]} · {price} coins</b>
              {balance < price && <span>You need {price - balance} more coins. Finish Bingo lines to earn them.</span>}
              <button type="button" className="hero-btn hero-btn--primary" disabled={busy || balance < price} onClick={buy}>{busy ? 'Buying…' : 'Buy and wear'}</button>
              <button type="button" className="hero-btn" onClick={() => setTrying(null)}>Not now</button>
            </div>
          ) : mode === 'wardrobe' && (
            <div className="hero-actions">
              <button type="button" className="hero-btn hero-btn--primary" disabled={!draft || busy} onClick={save}>{busy ? 'Saving…' : 'Save my hero'}</button>
              <button type="button" className="hero-btn" onClick={() => setDraft({ ...DEFAULT })}>Start over</button>
            </div>
          )}
        </div>

        <div className="hero-panel">
          <div className="hero-tabs" role="tablist">
            {TABS.map(([key, label]) => <button key={key} type="button" role="tab" aria-selected={tab === key} className={`hero-tab${tab === key ? ' is-on' : ''}`} onClick={() => { setTab(key); setTrying(null); }}>{label}</button>)}
          </div>
          {current[2].map((group) => {
            const [label, view] = GROUPS[group];
            const items = OPT[group].filter(([id]) => (mode === 'shop' ? !isOwned(profile, group, id) : isOwned(profile, group, id)));
            return (
              <div key={group}>
                <div className="hero-label">{label}</div>
                {items.length === 0 ? <p className="hero-none">{mode === 'shop' ? 'You own everything here 🎉' : 'Nothing yet. Look in the Shop.'}</p> : (
                  <div className="hero-opts">
                    {items.map(([id, name, cost]) => {
                      const on = mode === 'shop' ? trying?.group === group && trying?.id === id : look[group] === id;
                      return (
                        <button key={id} type="button" className={`hero-opt${on ? ' is-on' : ''}`} aria-pressed={on} onClick={() => (mode === 'shop' ? setTrying({ group, id }) : set(group, id))}>
                          <PixelHero config={{ ...look, [group]: id }} view={view} />
                          {name}
                          {mode === 'shop' && <span className={`hero-price${balance < cost ? ' is-short' : ''}`}>🪙 {cost}</span>}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          {mode === 'wardrobe' && current[3].map(([key, label, colours]) => (
            <div key={key}>
              <div className="hero-label">{label}</div>
              <div className="hero-swatches">
                {colours.map((c) => <button key={c} type="button" className={`hero-sw${look[key] === c ? ' is-on' : ''}`} style={{ background: c }} aria-label={`${label} ${c}`} aria-pressed={look[key] === c} onClick={() => set(key, c)} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
