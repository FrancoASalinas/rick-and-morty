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
        '1' : 'url("/image1.webp")',
        '2' : 'url("/image2.webp")',
        '3' : 'url("/image3.webp")',
        'polka' : 'radial-gradient(#fafafa 1.3px, #000000 1.3px)',
      },
    },
  },
  plugins: [],
}
