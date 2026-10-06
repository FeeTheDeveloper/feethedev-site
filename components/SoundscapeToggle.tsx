'use client';

import { useEffect, useRef, useState } from 'react';

export function SoundscapeToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.volume = 0.24;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
      <audio
        ref={audioRef}
        src="/audio/ftd-signal-ambience.mp3"
        preload="none"
        loop
      />
      <button
        type="button"
        aria-pressed={isPlaying}
        aria-label={
          isPlaying ? 'Turn ambient sound off' : 'Turn ambient sound on'
        }
        onClick={toggleSound}
        className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-black/35 px-4 py-2.5 text-slate-200 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan/45 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
      >
        <span className="flex h-5 items-end gap-0.5" aria-hidden="true">
          {[0, 1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={`w-0.5 origin-bottom rounded-full bg-cyan transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isPlaying
                  ? bar % 2 === 0
                    ? 'h-5 scale-y-100'
                    : 'h-3 scale-y-75'
                  : 'h-2 scale-y-50'
              }`}
            />
          ))}
        </span>
        <span>{isPlaying ? 'Sound on' : 'Sound off'}</span>
      </button>
      <span className="hidden text-[0.62rem] text-slate-500 sm:inline">
        ElevenLabs ambience
      </span>
    </div>
  );
}
