/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'fraction-green':       '#82C882',
        'fraction-green-hover': '#6BB36B',
        'fraction-green-light': '#EAF7EA',
        'fraction-dark':        '#1B3227',
        'text-dark':            '#1A1A1A',
        'text-medium':          '#4A4A4A',
        'text-light':           '#6B6B6B',
        'bg-light':             '#F7F7F7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Lato', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 28px rgba(0,0,0,0.13)',
      },
    },
  },
  plugins: [],
}
