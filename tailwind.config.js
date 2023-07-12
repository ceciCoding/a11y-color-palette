/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Space Grotesk, sans-serif',
      },
      colors: {
        brand: {
          100: '#E0F5E8',
          300: '#18E761',
          600: '#1A9D48',
          700: '#157E3A',
          800: '#124A26',
          900: '#01280F',
        },
      },
    },
  },
  plugins: [
    // Don't add plugins here as it breaks markup html files
  ],
}

// If we are loading a markup html file directly
if (typeof window !== 'undefined') {
  tailwind.config = tailwindConfig
} else {
  tailwindConfig.plugins = [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@formkit/themes/tailwindcss'),
  ]
}

module.exports = tailwindConfig
