/** @type {import('tailwindcss').Config} */
// NOTE: colours and font are ESTIMATES. The reference site's CSS could not be read
// (text-only access). Replace the values below with the real ones from DevTools.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b3b6f',   // primary (estimate)
          dark: '#082a50',      // footer / dark sections (estimate)
          accent: '#f5a623',    // highlight / hover (estimate)
          soft: '#eef3f9',      // light section background (estimate)
        },
        ink: { DEFAULT: '#1c2a3a', muted: '#5b6b7c' },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
}
