import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type CardAccent = 'neutral' | 'red' | 'green';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  accent?: CardAccent;
  hover?: boolean;
};

const accentClasses: Record<CardAccent, string> = {
  neutral: 'from-white/10 via-transparent to-white/5',
  red: 'from-redglow/18 via-transparent to-white/5',
  green: 'from-greenglow/18 via-transparent to-white/5',
};

const glowClasses: Record<CardAccent, string> = {
  neutral: 'bg-white/10',
  red: 'bg-redglow/20',
  green: 'bg-greenglow/20',
};

export function Card({
  accent = 'neutral',
  children,
  className,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 ease-out',
        hover && 'hover:-translate-y-1 hover:scale-[1.02]',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition duration-300 group-hover:opacity-100',
          accentClasses[accent],
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -right-10 top-8 h-28 w-28 rounded-full blur-3xl transition duration-300 group-hover:scale-125',
          glowClasses[accent],
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
