import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0A0E17',
        'emerald': '#0B4D3C',
        'sahara': '#C5A059',
        'alabaster': '#FDFCFB',
        'platinum': '#8E8E93',
        'surface-dark': '#1C1C1E',
        'success': '#28CD41',
        'warning': '#FFCC00',
        'error': '#FF3B30',
        'info': '#007AFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h1': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        'overline': ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.04em', fontWeight: '700' }],
      },
      spacing: {
        '1x': '8px',
        '2x': '16px',
        '3x': '24px',
        '4x': '32px',
        '6x': '48px',
        '8x': '64px',
        '12x': '96px',
        '16x': '128px',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
        'capsule': '9999px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(10, 14, 23, 0.06)',
        'card-hover': '0 8px 40px rgba(10, 14, 23, 0.12)',
        'fab': '0 4px 16px rgba(10, 14, 23, 0.15), 0 8px 32px rgba(10, 14, 23, 0.1)',
      },
      maxWidth: {
        'container': '1200px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'shimmer': 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
