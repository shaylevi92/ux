'use client';

import { HTMLAttributes } from 'react';
import { GRID } from '@/styles/constants';
import { AnimatedSection } from '../AnimatedSection';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number;
  gap?: string;
  children: React.ReactNode;
  animate?: boolean;
}

interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  children: React.ReactNode;
}

export function Grid({ 
  cols = GRID.cols, 
  gap = GRID.gap, 
  children, 
  animate = false,
  className = '',
  ...props 
}: GridProps) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gap,
  };

  if (animate) {
    return (
      <AnimatedSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        style={gridStyle}
        className={className}
        {...props}
      >
        {children}
      </AnimatedSection>
    );
  }

  return (
    <div style={gridStyle} className={className} {...props}>
      {children}
    </div>
  );
}

export function GridItem({ 
  span = 1, 
  children, 
  className = '',
  ...props 
}: GridItemProps) {
  return (
    <div 
      style={{ gridColumn: `span ${span} / span ${span}` }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

// Responsive Grid Container
export function ResponsiveGrid({ 
  children, 
  className = '',
  ...props 
}: Omit<GridProps, 'cols'>) {
  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Auto-fit Grid for dynamic content
export function AutoGrid({ 
  children, 
  className = '',
  ...props 
}: Omit<GridProps, 'cols'>) {
  return (
    <div 
      className={`grid grid-cols-auto-fit-200 gap-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 