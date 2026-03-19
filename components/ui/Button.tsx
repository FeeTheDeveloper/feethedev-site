import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline';
type ButtonGlow = 'gradient' | 'red' | 'green';

type CommonProps = {
  children: ReactNode;
  className?: string;
  glow?: ButtonGlow;
  variant?: ButtonVariant;
};

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-white/15 bg-white/[0.08] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)]',
  outline: 'border-white/15 bg-black/25 text-slate-100',
};

const glowClasses: Record<ButtonGlow, string> = {
  gradient: 'from-redglow/50 via-white/10 to-greenglow/50',
  red: 'from-redglow/55 to-redglow/10',
  green: 'from-greenglow/55 to-greenglow/10',
};

const baseClasses =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/40 disabled:pointer-events-none disabled:opacity-60';

function ButtonFace({
  children,
  glow,
  variant,
}: Pick<ButtonProps, 'children' | 'glow' | 'variant'>) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r opacity-60 blur-xl transition duration-300 group-hover:opacity-95',
          glowClasses[glow ?? 'gradient'],
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-[1px] rounded-full transition duration-300',
          variant === 'outline'
            ? 'bg-black/70 group-hover:bg-black/60'
            : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] group-hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.07))]',
        )}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    glow = 'gradient',
    variant = 'primary',
    ...rest
  } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest;

    return (
      <a href={href} className={classes} {...anchorProps}>
        <ButtonFace glow={glow} variant={variant}>
          {children}
        </ButtonFace>
      </a>
    );
  }

  const { type = 'button', ...buttonProps } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} type={type} {...buttonProps}>
      <ButtonFace glow={glow} variant={variant}>
        {children}
      </ButtonFace>
    </button>
  );
}
