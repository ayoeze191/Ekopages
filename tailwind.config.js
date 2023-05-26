/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Aileron: ["Aileron"],
        Poppins: ["Poppins"],
        SourceSans: ["Source-Sans"],
        Roboto: ["Roboto"],
        lato: ["lato"],
        latomedium:["latomedium"]
      },
      backgroundImage: {
        "backImg": "url('./assets/landingpage/bgImg.svg')",
        "illustrate": "url('./assets/landingpage/illustrate.svg')",
        "greyBg": "url('./assets/landingpage/greyBg.svg')",
        "rippaperTexture": "url('./assets/landingpage/rippaper.svg')",
        "carousel": "url('./assets/landingpage/carouselImg.svg')",
        "aboutBg": "url('./assets/about/abtBg.svg')",
        "radialGradient": "radial-gradient(100% 295.2% at 94.31% 0%, #621499 25.19%, #8934C6 63.19%, #FFFFFF 92.91%)",
        "aboutBottomImg": "url('./assets/landingpage/aboutBottom.svg')",
        "aboutQualImg": "url('./assets/landingpage/aboutQual.svg')",
        "cartItemBg": "linear-gradient(135.29deg, rgba(90, 12, 145, 0.05) 5.35%, rgba(255, 255, 255, 0.19) 99.63%)",
      },
      gridTemplateColumns: {
        
      }
      
    },
  },
  plugins: [],
}