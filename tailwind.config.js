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
      },
      backgroundImage: {
        minusButton: "url('https://i.imgur.com/vOcUR22.png')",
        plusButton: "url('https://i.imgur.com/kvipIWk.png')",
      },
    },
  },
  plugins: [],
}
