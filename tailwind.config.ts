import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070B',
        panel: '#0B1018',
        muted: '#91A0B7',
        line: 'rgba(255,255,255,0.10)',
        silver: '#F3F6FA',
        redglow: '#FF3131',
        greenglow: '#20FF74',
        electric: '#2578FF',
        cyan: '#22D3EE',
        cobalt: '#0D2BFF',
      },
      boxShadow: {
        electric: '0 0 48px rgba(37,120,255,0.35)',
        green: '0 0 42px rgba(32,255,116,0.25)',
        red: '0 0 42px rgba(255,49,49,0.24)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      backgroundImage: {
        'ftd-grid': 'linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
