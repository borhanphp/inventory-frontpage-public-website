/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Matches the main Zeeventory app's primary (teal-700 / oklch 0.511 0.096 186)
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
          900: '#134e4a',
          950: '#042f2e'
        },
        accent: {
          400: '#34d399',
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
        'grid-white': `linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)`,
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -30%, rgb(20 184 166 / 0.30), transparent)'
      },
      backgroundSize: {
        grid: '48px 48px'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both'
      }
    }
  },
  plugins: []
};
