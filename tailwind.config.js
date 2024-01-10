/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#FFFFF",
        sec: "#4895ef",
        high: "#4949",
      },
    },
  },
  plugins: [],
};
