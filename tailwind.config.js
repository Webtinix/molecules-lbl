/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "lbl-primary":"#043570" ,
        "lbl-primary-hover":"#032043",
        "lbl-secondary":"#C10C1A",
        "lbl-secondary-hover":"#8F000B",
        "lbl-Gray-900":"#383D3D",
        "lbl-Gray-800":"#505353",
        "lbl-Gray-700":"#646868",
        "lbl-Gray-600":"#8A9191",
        "lbl-Gray-500":"#A5AAAA",
        "lbl-Gray-400":"#C7CCCC",
        "lbl-Gray-300":"#D0D9D9",
        "lbl-Gray-200":"#E9EEEE",
        "lbl-Gray-100":"#F2F6F6",
        "lbl-Black":"#000000",
        "lbl-Dark":"#1B1D22",
        "lbl-White":"#1B1D22",
        "lbl-white":"#FFFFFF",
        "lbl-Light":"#F5F5F5",
        "lbl-Error":"#FE414D",
        "lbl-Warning":"#FF9900",
        "lbl-Info":"#0051A2",
        "lbl-Success":"#98D02B",  
       },
       boxShadow : {
          "lbl-btn" : "0 0 8px #000",
          "lbl-btn-light" :'1px -1px 2px #000'
       },
       fontSize : {
          "lbl-sm" : "12px",
          "lbl-md" : "14px",
          "lbl-lg" : "16px"
       }
    },
  },
  plugins: [],
}

