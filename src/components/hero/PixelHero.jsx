import { useEffect, useMemo, useRef, useState } from 'react';
import { draw, heroConfig, HERO_MOODS } from '../../utils/pixelHero';
import { useProfile } from '../../context/ProfileContext';
import './hero.css';

/** One drawing of a hero. `config` = the saved avatar; `mood` overrides the face. */
export default function PixelHero({ config, mood, view = 'full', blinking = false, walkPet = false, className = '', label }) {
  const ref = useRef(null);
  const petRef = useRef(null);
  const [blink, setBlink] = useState(false);
  const key = JSON.stringify(config || null);
  const look = useMemo(() => ({ ...heroConfig(JSON.parse(key)), ...(mood ? HERO_MOODS[mood] : null) }), [key, mood]);

  useEffect(() => {
    if (!blinking) return undefined;
    let timer;
    const tick = () => {
      timer = window.setTimeout(() => {
        if (document.visibilityState !== 'hidden') setBlink(true);
        timer = window.setTimeout(() => { setBlink(false); tick(); }, 180);
      }, 2600 + Math.random() * 2400);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [blinking]);

  const walking = walkPet && view === 'full' && look.pet !== 'none';
  useEffect(() => { if (ref.current) draw(ref.current, walking ? { ...look, pet: 'none' } : look, view, blink, 0); }, [look, view, blink, walking]);
  useEffect(() => { if (walking && petRef.current) draw(petRef.current, look, 'pet', false, 0); }, [look, walking]);
  const body = <canvas ref={ref} className={`hero-canvas ${className}`.trim()} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} />;
  if (!walking) return body;
  // The pet strolls back and forth in front of the hero.
  return (
    <div className="hero-walk">
      {body}
      <span className="hero-pet" aria-hidden="true"><canvas ref={petRef} className="hero-canvas" /></span>
    </div>
  );
}

/** The signed-in student's own hero. */
export function MyHero(props) {
  const { profile } = useProfile();
  return <PixelHero config={profile?.avatar} {...props} />;
}
