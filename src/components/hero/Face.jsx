import PixelHero from './PixelHero';

// A student's picture: their own photo (dream image) when there is one, otherwise their hero.
// Generated DiceBear drawings don't count as a photo.
const isPhoto = (url) => Boolean(url) && !String(url).includes('api.dicebear.com');

export default function Face({ photo, hero, label }) {
  if (isPhoto(photo)) return <img src={photo} alt={label || ''} className="hero-photo" />;
  return <PixelHero config={hero} view="head" className="hero-face" label={label} />;
}
