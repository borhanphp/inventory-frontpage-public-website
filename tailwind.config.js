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
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a'
        },
        accent: {
          500: '#10b981',
          600: '#059669'
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
          'radial-gradient(ellipse 80% 60% at 50% -30%, rgb(20 184 166 / 0.30), transparent)'
      }
    }
  },
  plugins: []
};
