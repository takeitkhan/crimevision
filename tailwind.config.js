/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, 
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
      fontFamily: {
        solaiman: ['SolaimanLipi', 'Noto Sans Bengali', 'Hind Siliguri', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#e2e2e2',
      },
      borderColor: {
        custom: '#e2e2e2',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
    fontSize: {
      xs: '0.875rem',    // 14px
      sm: '1rem',        // 16px
      base: '1.25rem',   // 20px (increased from 1.1rem)
      lg: '1.5rem',      // 24px
      xl: '1.875rem',    // 30px
      '2xl': '2.25rem',  // 36px
      '3xl': '3rem',     // 48px
      '4xl': '3.75rem',  // 60px
      '5xl': '4.5rem',   // 72px
    },

  },
  plugins: [],
};
