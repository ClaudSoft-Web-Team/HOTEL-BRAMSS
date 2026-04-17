/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B263B",     // كحلي
        accent: "#ffcc53",      // ذهبي
        light: "#FFFDF9",       // كريمي
        muted: "#E0E1DD",       // رمادي
      },
    },
  },
  plugins: [],
}
