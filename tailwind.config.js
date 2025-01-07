/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
        slideInFromLeft: 'slideInFromLeft 2s ease-out forwards',
        slideInFromRight: 'slideInFromRight 2s ease-out forwards',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' }, 
          '100%': { transform: 'translateX(0)' },     
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },  
        },
    },    
      screens:{
        "mobile":"340px",
        "desktop":"1000px",
      }
    },
  },
  variants: {
    extend: {
     display: ['group-focus'],
     opacity: ['group-focus'],
     inset: ['group-focus'],
    },
  },
  plugins: [],
}

