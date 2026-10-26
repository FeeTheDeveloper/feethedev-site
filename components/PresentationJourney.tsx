'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './Presentation.module.css';

const layers = [
  {
    title: 'Build',
    description: 'Launch a clear, credible website for the business.',
    image: '/web_software.PNG',
  },
  {
    title: 'Connect',
    description: 'Connect booking, payments, analytics, and everyday tools.',
    image: '/google_product_suite.PNG',
  },
  {
    title: 'Strengthen',
    description:
      'Keep your business information consistent wherever customers look.',
    image: '/google_apple_yelp.PNG',
  },
];

export function PresentationJourney() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const host = root.current;
    if (!host || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current)
          setActive(Number((current.target as HTMLElement).dataset.chapter));
      },
      { rootMargin: '-20% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    );
    host
      .querySelectorAll('[data-chapter]')
      .forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className={styles.journey}>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span>Services working together</span>
          <span aria-hidden="true">0{active + 1} / 03</span>
        </div>
        <div className={styles.stageMedia}>
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className={`${styles.frame} ${active === index ? styles.frameActive : ''}`}
              aria-hidden="true"
            >
              <Image
                src={layer.image}
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 60vw"
                className={styles.stageImage}
              />
            </div>
          ))}
          <div className={styles.stageShade} />
          <p className={styles.stageWord} aria-hidden="true">
            {layers[active].title}
            <span>.</span>
          </p>
        </div>
        <div
          className={styles.controls}
          role="group"
          aria-label="Connected service layers"
        >
          {layers.map((layer, index) => (
            <button
              type="button"
              key={layer.title}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              aria-controls="service-layer-description"
            >
              <span aria-hidden="true">0{index + 1}</span>
              {layer.title}
            </button>
          ))}
        </div>
        <p
          id="service-layer-description"
          className={styles.selection}
          aria-live="polite"
        >
          {layers[active].description}
        </p>
      </div>
      <div className={styles.chapters}>
        {layers.map((layer, index) => (
          <article
            key={layer.title}
            data-chapter={index}
            className={styles.chapter}
          >
            <span className={styles.chapterNumber}>0{index + 1}</span>
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>
            <a href="/services" className={styles.textLink}>
              Explore services <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
