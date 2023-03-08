// tailwind.config.js
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'cloud-blue': '#0095FF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}