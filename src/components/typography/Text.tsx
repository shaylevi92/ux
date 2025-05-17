'use client';

import { HTMLAttributes } from 'react';
import { TYPOGRAPHY } from '@/styles/constants';
import { AnimatedSection } from '../AnimatedSection';

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  size?: keyof typeof TYPOGRAPHY.sizes;
  animate?: boolean;
  children: React.ReactNode;
}

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  caption: 'span',
  overline: 'span',
};

const variantStyles = {
  h1: 'text-5xl font-bold tracking-tight',
  h2: 'text-4xl font-bold tracking-tight',
  h3: 'text-3xl font-bold tracking-tight',
  h4: 'text-2xl font-semibold',
  h5: 'text-xl font-semibold',
  h6: 'text-lg font-semibold',
  body: 'text-base',
  caption: 'text-sm',
  overline: 'text-xs uppercase tracking-wide',
};

const weightStyles = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Text({
  variant = 'body',
  weight,
  size,
  animate = false,
  className = '',
  children,
  ...props
}: TextProps) {
  const Component = variantMapping[variant];
  const baseStyles = [
    variantStyles[variant],
    weight && weightStyles[weight],
    size && `text-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (animate) {
    return (
      <AnimatedSection
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={baseStyles}
        {...props}
      >
        <Component>{children}</Component>
      </AnimatedSection>
    );
  }

  return (
    <Component className={baseStyles} {...props}>
      {children}
    </Component>
  );
}

// Preset components for common use cases
export function Heading({ level = 1, ...props }: Omit<TextProps, 'variant'> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  return <Text variant={`h${level}` as keyof typeof variantStyles} {...props} />;
}

export function Body(props: Omit<TextProps, 'variant'>) {
  return <Text variant="body" {...props} />;
}

export function Caption(props: Omit<TextProps, 'variant'>) {
  return <Text variant="caption" {...props} />;
}

export function Overline(props: Omit<TextProps, 'variant'>) {
  return <Text variant="overline" {...props} />;
} 