module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
      green: {
        primary: '#177165',
        secondary: '#2FAF92',
        tertiary: '#234D30',
      },
    },
  },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/home1.png')",
        'contact': "url('/contactus1.png')"
       }),
      margin: {
        '-98': '-26rem',
        '-99': '-36rem',
        
       },
       height: {
        '95': '24rem',
        '96': '29rem',
        '97': '34rem',
        '98': '36rem',
        '99': '40rem',
        '100': '42rem'
       },
       width: {
         '97': '32rem',
         '98': '35rem',
         '99': '44rem'
       },
        screens: {
          'xs': '414px',
          'sm': '640px',    
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '1xl': '1440px',
          '2xl': '1536px',
           '3xl': '2560px',
      },
    },
    fontFamily: {
      body: ['Overpass'],
      backlinko: ['Inter'],
      deeplawn: ['Montserrat'],
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
