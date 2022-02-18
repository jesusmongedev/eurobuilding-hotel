module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4133FF',
        secondary: '#00003c',
        complementary: '#2EC4B6',
      },
      backgroundImage: {
        minusButton: "url('https://i.imgur.com/vOcUR22.png')",
        plusButton: "url('https://i.imgur.com/kvipIWk.png')",
        facebook: "url('https://i.imgur.com/z7McBKP.png')",
        twitter: "url('https://i.imgur.com/GZhtrRL.png')",
        instagram: "url('https://i.imgur.com/NvzYstJ.png')",
        whatssapp: "url('https://i.imgur.com/DOl5CtH.png')",
        mail: "url('https://i.imgur.com/Jea9eW5.png')",
        mobile: "url('https://i.imgur.com/soPuNNj.png')",
      },
    },
  },
  plugins: [],
}
