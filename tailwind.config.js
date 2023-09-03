/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        text: 'text 5s ease infinite',
      },
      fontFamily:{
        'nuito': ["Nunito"]
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
    },
    screens: {
      'xs': '475px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
  },
},
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}

