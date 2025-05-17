import type { Config } from "tailwindcss";
import { TYPOGRAPHY, SPACING, COLORS, BREAKPOINTS } from './src/styles/constants';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: COLORS,
      spacing: SPACING,
      fontFamily: TYPOGRAPHY.fonts,
      fontSize: TYPOGRAPHY.sizes,
      lineHeight: TYPOGRAPHY.lineHeights,
      letterSpacing: TYPOGRAPHY.letterSpacing,
      screens: BREAKPOINTS,
      container: {
        center: true,
        padding: {
          DEFAULT: SPACING.md,
          sm: SPACING.lg,
          lg: SPACING.xl,
        },
        screens: {
          sm: BREAKPOINTS.sm,
          md: BREAKPOINTS.md,
          lg: BREAKPOINTS.lg,
          xl: BREAKPOINTS.xl,
          '2xl': BREAKPOINTS['2xl'],
        },
      },
      gridTemplateColumns: {
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config; 