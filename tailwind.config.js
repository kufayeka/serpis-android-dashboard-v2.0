module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        borderRadius:{
          '5xl':'50px'
        },
        height:{
          'divider' : '1px'
        },
        boxShadow: {
          'card' : '0px 2px 2px rgba(0,0,0,0.4)',
          'card1' : '0px 0.5px 2px rgba(0,0,0,0.4)',
          'bottomNav' : '0px -2px 8px rgba(0,0,0,0.3)'
        },
        borderWidth: {
          'tipis' : '0.7px'
        },
        fontFamily: {
          'kustom-bold' : ['kustom-bold'],
          'kustom-regular' : ['kustom-regular'],
          'kustom-thin' : ['kustom-thin'],
        },
        keyframes: {
          'scroll-keatas': {
              '0%': {
                  opacity: '1',
                  transform: 'translateY(500px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          },
          'scroll-kebawah': {
            '0%': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(500px)'
            },
          },
          'pop-out': {
            '0%': {
                opacity: '0',
                transform: 'scale(0)'
            },
            '100%': {
                opacity: '1',
                transform: 'scale(1)'
            },
          },
        },
        animation: {
          'scroll-keatas': 'scroll-keatas 0.3s ease-out',
          'scroll-kebawah': 'scroll-kebawah 0.7s ease-out',
          'pop-out':'pop-out 0.5s ease-in-out',
        }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
