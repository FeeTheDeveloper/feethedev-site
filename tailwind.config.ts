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
        background: '#0A0A0A',
        panel: '#111317',
        muted: '#94A3B8',
        line: 'rgba(255,255,255,0.1)',
        silver: '#E5E7EB',
        redglow: '#FF2B2B',
        greenglow: '#00FF88',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
