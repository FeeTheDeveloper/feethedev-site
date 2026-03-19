import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function Body({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'text-base leading-7 text-slate-300 sm:text-lg sm:leading-8',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
