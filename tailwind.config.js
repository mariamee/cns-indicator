module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
}
