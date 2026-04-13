/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        accent: {
          500: '#0d9488',
          600: '#0f766e'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-slate': `linear-gradient(to right, rgb(15 23 42 / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(15 23 42 / 0.06) 1px, transparent 1px)`,
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -30%, rgb(99 102 241 / 0.35), transparent)'
      }
    }
  },
  plugins: []
};
