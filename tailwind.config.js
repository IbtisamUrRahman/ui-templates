module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-98': '-26rem',
        '-99': '-36rem',
        
       },
       height: {
        '97': '34rem',
        '98': '36rem',
        '99': '40rem'
       },
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
          
           '3xl': '2560px',
          // '4xl': '1440px',
      },
    },
    fontFamily: {
      body: ['Overpass'],
      backlinko: ['Inter']
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
