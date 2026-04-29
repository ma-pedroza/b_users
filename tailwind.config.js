/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{vue,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
        space: {
          100: "var(--space-100)",
          200: "var(--space-200)",
          300: "var(--space-300)",
          400: "var(--space-400)",
          500: "var(--space-500)",
          600: "var(--space-600)",
          700: "var(--space-700)",
          800: "var(--space-800)",
          900: "var(--space-900)",
        },
        bg: {
          primary: "var(--background)",
          dark: "var(--background-dark)",
          medium: "var(--background-medium)",
        },
        text: "var(---color-text)",
        light: "var(--color-text-white)",
        grey: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [],
};
