/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors :{
        "lbl-premary": "#043570",
        "lbl-premary-hover": "#032043",
        "lbl-secondary": "#C10C1A",
        "lbl-secondary-hover": "#8f00DB",
        "lbl-gray-900": "#383DD3D",
        "lbl-gray-800": "#505353",
        "lbl-gray-700": "#646868",
        "lbl-gray-600": "#8A9191",
        "lbl-gray-500": "#A5AAAA",
        "lbl-gray-400": "#C7CCCC",
        "lbl-gray-300": "#D0D9D9",
        "lbl-gray-200": "#E9EEEE",
        "lbl-gray-100": "#F2F6F6",
        "lbl-black": "#000000",
        "lbl-Dark": "#1B1D22",
        "lbl-White": "#FFFFFF",
        "lbl-light": "#F5F5F5",
        "lbl-Error": "#FE414D",
        "lbl-Warning": "#FF9900",
        "lbl-Info": "#0051A2",
        "lbl-Success": "#98D02B",

      }
    },
  },
  plugins: [],
}

