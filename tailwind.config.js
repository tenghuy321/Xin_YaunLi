/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        dropdown: 'dropdownAnim 200ms ease-out forwards',
      },
      keyframes: {
        dropdownAnim: {
          '0%': { opacity: '0', transform: 'scale(95%) translateY(-0.25rem)' },
          '100%': { opacity: '1', transform: 'scale(100%) translateY(0)' },
        },
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
};
