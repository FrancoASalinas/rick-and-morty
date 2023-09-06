/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'r&m' : ['var(--font-get-shwifty)']
      } ,
      colors:{
        'lb' : '#69c8ec'
      },
      backgroundImage:{
        'boxes-gray' : 'linear-gradient(#555555 1.3px, transparent 1.3px), linear-gradient(to right, #555555 1.3px, #000 1.3px)',
        'boxes-green' : 'linear-gradient(#00ff0099 1.3px, transparent 1.3px), linear-gradient(to right, #00ff0099 1.3px, #000 1.3px)',
        'boxes-red' : 'linear-gradient(#ff000099 1.3px, transparent 1.3px), linear-gradient(to right, #ff000099 1.3px, #000 1.3px)',
        'polka' : 'radial-gradient(#fafafa 1.3px, #000000 1.3px)',
      },
    },
  },
  plugins: [],
}

