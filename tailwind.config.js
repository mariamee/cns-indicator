module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        white: '#fafafa',
        grey: '#7e7f83',
        background: '#fefefe',
        sky: {
          50: '#f0f9ff',
          100: '#0e1077',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        }
      }
    }
  }
}
//   },
//   variants: {
//     extend: {
//       backgroundColor: ['active']
//     }
//   },
//   plugins: [
//     require('@tailwindcss/forms')({
//       strategy: 'class'
//     })
//   ]
// }
