import React, { useEffect, useState } from 'react';
import LinkButton from './components/LinkButton';
import links from '../links.json';
import logoUrl from './assets/logo2.svg';
import {
  SiYoutube,
  SiSpotify,
  SiApplepodcasts,
  SiInstagram,
  SiPatreon,
} from 'react-icons/si';

export default function App() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const apply = () => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(mq.matches ? 'light' : 'dark');
    };
    apply();
    // listen for changes
    const listener = () => apply();
    try {
      mq.addEventListener?.('change', listener);
    } catch (e) {
      // fallback for older browsers
      // @ts-ignore
      mq.addListener?.(listener);
    }
    return () => {
      try {
        mq.removeEventListener?.('change', listener);
      } catch (e) {
        // @ts-ignore
        mq.removeListener?.(listener);
      }
    };
  }, []);

  return (
    <div className="container">
      <header>
        <div className="title">
          <span className={`logo-frame ${logoLoaded ? 'loaded' : 'loading'}`}>
            <img
              src={logoUrl}
              alt="The Socialarium logo"
              className="site-logo"
              loading="lazy"
              width={120}
              height={120}
              onLoad={() => setLogoLoaded(true)}
            />
          </span>
          <h1>The Socialarium</h1>
          <p className="tag">
            A relaxed podcast about social media, culture, and friends.
          </p>
        </div>
      </header>
      <main>
        <div className="links">
          <LinkButton href={links.youtube} label="YouTube">
            <SiYoutube />
          </LinkButton>
          <LinkButton href={links.spotify} label="Spotify">
            <SiSpotify />
          </LinkButton>
          <LinkButton href={links.apple} label="Apple Podcasts">
            <SiApplepodcasts />
          </LinkButton>
          <LinkButton href={links.instagram} label="Instagram">
            <SiInstagram />
          </LinkButton>
          <LinkButton href={links.patreon} label="Patreon">
            <SiPatreon />
          </LinkButton>
        </div>
      </main>

      <footer>
        <small>© The Socialarium — New episodes every other Tuesday</small>
      </footer>
    </div>
  );
}
