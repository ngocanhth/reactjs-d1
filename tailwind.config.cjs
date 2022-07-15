/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      '2md': '769px',
      // => @media (min-width: 769px) { ... }
      // => @media (min-width: 768px) { ... }
      'mm': '960px',
      // => @media (min-width: 960px) { ... }
      'dd': '992px',
      // => @media (min-width: 992px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      '2lg': '1025px',
      // => @media (min-width: 1025px) { ... }
      'xl': '1280px',
      'xxl': '1300px',
  },
    extend: {},
  },
  variants: {
    extend: {
      display: ["groupd-hover"],
      margin: ["groupd-hover, last"],
      visibility: ["groupd-hover"],
      borderWidth: ['last', 'hover', 'focus'],
      opacity: ['disabled', 'group-hover', 'group-focus'],
      backgroundColor: ['even', 'odd'],
      pointerEvents: ['group-hover']
    }
  },
  plugins: [],
}
