import Image from 'next/image';
import { cn } from '@/lib/utils';

type SignalArtworkProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  variant?: 'cyan' | 'green' | 'prism';
};

export function SignalArtwork({
  src,
  alt,
  className,
  priority = false,
  variant = 'cyan',
}: SignalArtworkProps) {
  return (
    <figure
      className={cn(
        'signal-artwork group',
        `signal-artwork--${variant}`,
        className,
      )}
    >
      <div className="signal-artwork__frame">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="signal-artwork__image"
        />
        <div
          className="signal-artwork__echo signal-artwork__echo--top"
          aria-hidden
        />
        <div
          className="signal-artwork__echo signal-artwork__echo--bottom"
          aria-hidden
        />
        <div className="signal-artwork__scan" aria-hidden />
        <div className="signal-artwork__grain" aria-hidden />
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
