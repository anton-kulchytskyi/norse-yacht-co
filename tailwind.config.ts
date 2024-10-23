import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        white: '#ffffff',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
        baiJ: 'var(--font-baiJ)',
        bEs: 'var(--font-bEs)',
      },
      colors: {
        primary: '#4d6575',
        secondary: {
          100: '#e7801a',
          110: '#c36101',
          60: '#f1b376',
        },
        black: '#081433',
        grey: {
          100: '#525659',
          80: '#aaafb4',
          50: '#b0bcc8',
          20: '#d9e2eb',
        },
        white: '#ffffff',
        error: '#d41a11',
        success: '#29a44f',
        info: '#295aa4',
        warning: '#f7e64d',
      },
      screens: {
        xs: '320px',
        '3xl': '1920px',
      },
      boxShadow: {
        custom: '10px 10px 5px 0px rgba(209, 213, 219, 1)',
      },
      animation: {
        'scale-up': 'scale-up 1s ease-in-out',
        'scale-down': 'scale-down 1s ease-in-out',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
