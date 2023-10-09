/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Libre Baskerville', 'serif'],
      },
      colors: {
        customGreen: '#E2F6CD',
        customGreen2: '#DAF7A6',
        customGray: '#F2F2F1',
        customTeal: '#CFF4EC',
        Instagram: '#bc2a8d',
        Youtube: `#c4302b`,
        Facebook: `#3b5998`,
        TikTok: `#69c9d0`,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
