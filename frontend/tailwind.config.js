/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const REM_SIZE = 16
const pxToRem = px => `${px / REM_SIZE}rem`
const colors = require('./src/config/colors.json')

module.exports = {
  important: '#root',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      spacing: {
        '6.5': pxToRem(26),
        '7.5': pxToRem(30),
        '8.5': pxToRem(34),
        '15': pxToRem(60),
        '19': pxToRem(76),
        '21': pxToRem(84),
        '27': pxToRem(108),
        '43.5': pxToRem(174),
        '46.5': pxToRem(186),
        '47.5': pxToRem(190),
        '53': pxToRem(212),
        '64.5': pxToRem(258),
        '74.5': pxToRem(298),
        '75': pxToRem(300),
        '81': pxToRem(324),
        '83.5': pxToRem(334),
        '85': pxToRem(340),
        '90': pxToRem(360),
        '102.5': pxToRem(410),
        '128': '32rem',
        '130': pxToRem(520),
        '157.5': pxToRem(630),
        '159': pxToRem(636),
        '184': pxToRem(736),
        '233': pxToRem(932),
      },
      fontSize: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(30),
        h5: pxToRem(24),
        h6: pxToRem(20),
        'body-large': pxToRem(18),
        body: pxToRem(16),
        'body-small': pxToRem(14),
        'placeholder-small': pxToRem(11),
        'line-14': pxToRem(14),
      },
      lineHeight: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(40),
        h5: pxToRem(36),
        h6: pxToRem(30),
        'body-large': pxToRem(28),
        body: pxToRem(24),
        'body-small': pxToRem(21),
        'placeholder-small': pxToRem(11),
        'line-14': pxToRem(14),
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      screens: {
        '3xl': '1920px', // full hd
        '4xl': '2560px', // quad hd
      },
      padding: {
        '10px': pxToRem(10),
        '30px': pxToRem(30),
        '75px': pxToRem(75),
        '110px': pxToRem(110),
        '144px': pxToRem(144),
        '405px': pxToRem(405),
      },
      margin: {
        '2px': pxToRem(2),
        '10px': pxToRem(10),
        '59px': pxToRem(59),
        '69px': pxToRem(69),
        '30px': pxToRem(30),
        '53px': pxToRem(53),
        '62px': pxToRem(62),
        '96px': pxToRem(96),
      },
      width: {
        '22px': pxToRem(22),
        8.5: pxToRem(34),
        '30px': pxToRem(30),
        '60px': pxToRem(60),
        '232px': pxToRem(232),
        '286px': pxToRem(286),
        '295px': pxToRem(295),
        '300px': pxToRem(300),
        '591px': pxToRem(591),
        '630px': pxToRem(628),
        '646px': pxToRem(646),
        '1080px': pxToRem(1080),
        '1290px': pxToRem(1290),
        '1440px': pxToRem(1440),
      },
      minWidth: {
        '190': pxToRem(190),
        '550': pxToRem(550)
      },
      maxWidth: {
        '210': pxToRem(210),
        '630': pxToRem(630)
      },
      height: {
        "22px": pxToRem(22),
        8.5: pxToRem(34),
        "30px": pxToRem(30),
        "60px": pxToRem(60),
        '96px': pxToRem(96),
        "232px": pxToRem(232),
        '300px': pxToRem(300),
        '568px': pxToRem(568),
        '624px': pxToRem(624),
        '736px': pxToRem(736),
      },
      inset: {
        "75px": pxToRem(75),
        "96px": pxToRem(96),
        "200px": pxToRem(200),
        "735px": pxToRem(735),
      },
      boxShadow: {
        header: '0px 4px 18px rgba(34, 68, 68, 0.15)',
        'card-dashboard': '0px 4px 18px 0 rgba(0, 0, 0, 0.15)',
        google: '0 4px 18px 0 rgba(0, 0, 0, 0.1)',
        card: '0 0 15px rgba(0,0,0,.5)',
      },
      borderRadius: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled", "checked", 'focus-within'],
      borderColor: ["disabled",'focus-within'],
      translate: ["checked"],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
  ],
};

