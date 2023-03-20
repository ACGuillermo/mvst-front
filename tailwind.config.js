/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: 'black',
        white: '#ffffff',
      },
      borderRadius: {
        input: '0.625rem',
      },
      textColor: {
        black: 'black',
        primary: 'black',
        secondary: 'black',
        grey: '#44403C',
      },
      backgroundColor: {
        primary: '#FBFAF8',
        arabic: '#CD4C14',
        robusta: '#758266',
        navbar: '#8E9882',
      },
      borderColor: {
        primary: '#E8E3D9',
        separator: '#E5DAC2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
