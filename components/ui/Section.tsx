import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-16 sm:py-24', className)} {...props}>
      <div
        className={cn(
          'mx-auto w-full max-w-7xl px-6 sm:px-8',
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
