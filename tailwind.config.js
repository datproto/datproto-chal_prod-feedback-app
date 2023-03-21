/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jost)']
      },
      colors: {
        prod: {
          purple: '#AD1FEA',
          blue: {
            alice: '#F2F4FF',
            american: {
              dark: '#373F68',
              main: '#3A4374'
            },
            gray: {
              dark: '#647196'
            },
            maya: '#62BCFA',
            royal: '#4661E6'
          },
          tangerine: '#F49F85',
          white: {
            ghost: '#F7F8FD'
          }
        }
      }
    },
  },
  plugins: [],
}
