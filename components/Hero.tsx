'use client';

import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { Tilt3D } from '@/components/Tilt3D';
import styles from './Presentation.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{siteConfig.name}</p>
        <h1 id="home-heading" className={styles.headline}>
          <span>BUILD.</span>
          <span>AUTOMATE.</span>
          <span className={styles.outline}>CREATE. SCALE.</span>
        </h1>
        <p className={styles.intro}>
          We design the website, strengthen your digital presence, and connect
          the tools your business uses every day.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="/start">
            Build my business <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.textLink} href="/services">
            Explore services <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <Tilt3D max={3.5} className={styles.heroTilt}>
          <div className={styles.portrait}>
            <Image
              src="/brand/ftd-founder-hero.webp"
              alt="Illustrated portrait of Fee The Developer in a white hoodie against a blue developer workspace"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
            <div className={styles.portraitShade} />
            <div className={styles.visualCaption}>
              <p className={styles.eyebrow}>Web · AI · automation · presence</p>
              <h2>
                From first impression
                <br />
                to a stronger business.
              </h2>
              <p>
                Technology execution with a complete digital business presence.
              </p>
            </div>
          </div>
        </Tilt3D>
      </div>
    </section>
  );
}
