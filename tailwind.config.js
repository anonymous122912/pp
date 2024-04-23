/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1E1E1F',
        'light-gray':'#333333',
        'highlighted-yellow': '#FDC965'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

