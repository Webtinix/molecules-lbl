/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lbl-primary': "#043570",
         'lbl-secondary': "#C10C1A",
         'lbl-black': "#000000",
         'lbl-dark': "#1B1D22",
         'lbl-white': "#FFFFFF",
         'lbl-light': "#F5F5F5",
         'lbl-error': "#FE414D",
         'lbl-warning': "#FF9900",
         'lbl-info': "#0051A2",
         'lbl-success': "#98D02B"
       }
    },
  },
  plugins: [],
}

