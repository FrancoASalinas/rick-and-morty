/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'light' : '#F7F0F5',
        'dark' : '#39393A',
        'green' : '#77F879',
        'blue' : '#59A5D8'
      },
    },
  },
  plugins: [],
}
