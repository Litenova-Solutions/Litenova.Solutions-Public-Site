import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

// The landing page repeats one section rhythm: a full-width band, a centred
// container, and a centred heading block. These wrappers hold that rhythm so a
// section never restates the spacing scale.

export function Section({ className, ...props }: ComponentProps<'section'>) {
  return <section className={cn('py-20', className)} {...props} />;
}

export function SectionContainer({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-xs leading-normal font-bold tracking-eyebrow text-primary uppercase',
        className,
      )}
      {...props}
    />
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleId: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={titleId}
        className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          {children}
        </p>
      ) : null}
    </div>
  );
}

// A gold-tinted tile that carries a product or service icon.
export function BrandTile({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary',
        className,
      )}
      {...props}
    />
  );
}
