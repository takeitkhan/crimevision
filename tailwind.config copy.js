/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {

      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },

      screens: {
        colors: {
          'custom-gray': '#e2e2e2', // Example custom color
        },
        borderColor: theme => ({
          default: theme('colors.gray.300', 'currentColor'),
          'custom': theme('colors.custom-gray', 'currentColor'), // Apply custom color
        }),
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
};
