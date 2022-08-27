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
        grey: {
          10: '#7e7f83',
          20: '#cdcdd4'
        },
        background: '#fff',
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
          900: '#0c4a6e',
          1000: '#7e81c4',
          1100: '#44548c',
          1200: '#8c7c9c'
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgb(140,124,156)'
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
