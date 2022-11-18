/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    colors : {
      primary : '#1d3124',
      secondary : '#e59560',
      tertiary : '#bacec1',
      light : '#f6f4e8',
      white: '#ffffff',
    },
    fontFamily : {
      'title' : 'SyneMono-Regular',
    },
    fontWeight : {
      xs :  100,
      s : 400,
      m : 600,
      l : 700,
      xl : 900,
    },
    spacing : {
      0 : "0px",
      4 : '4px',
      8 : '8px',
      12 : '12px',
      16 : '16px',
      20 : '20px',
      24 : '24px',
      32 : '32px',
      40 : '40px',
      48 : '48px',
      56 : '56px',
      62 : '62px',
    },
    fontSize : {
      xs : '8px',
      s : '12px',
      m : '16px',
      l : '20px',
      xl : '24px',
      xxl : '32px',
      '3xl': '48px',
    },
    borderRadius : {
      xs : '2px',
      s : '4px',
      m : '6px',
      l: '8px',
      xl : '12px',
    },
    extend: {},
  },
  plugins: [],
}
