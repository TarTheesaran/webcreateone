module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      colors: {
      purblepage1: "#3b065e",
      buttonblue:"#29b7dd",
      buttonbluewhover:"#1c82b1",
      endpagefont:"#8ddbf1",
      endpagebg:"#333333",
      },
    },
    fontSize: {
      '2xs': ['0.80rem', { lineHeight: '0.90rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    backgroundImage: theme => ({
      'scanfinger': "url('/img/scanfinger.jpg')",
      'phoneholo': "url('/img/phoneholo.jpg')",
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
