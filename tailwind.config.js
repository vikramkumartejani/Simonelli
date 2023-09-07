/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: 'rgba(248, 248, 248, 1)',
        textColor: '#999',
        white: 'rgba(255, 255, 255, 1)',
        black: 'rgba(17, 17, 17, 1)',
        LimeGreen: '#A6C76C',
        LightGray: '#CCC',
        PaleYellow: '#FCF8E7',
        DarkGray: 'rgba(51, 51, 51, 1)',
        primary: '#A6C76C',
        RedOrange: '#D73F0F',
        Gray: '#757575',
        Cyan: '#7ABDB5',
        Pink: '#D7B2BB',
        VeryDarkGray: 'rgba(0, 0, 0, 0.16)',
        OrangeBrown: '#D26E4B',
        MediumRed: '#E53939',
        MediumGray : '#AAA'
        
      },
    borderColor:{
      btnColor: 'rgba(0, 0, 0, 0.3)'
    }
    },
  },
  plugins: [],
}

// background: background: #A6C76C;
;


