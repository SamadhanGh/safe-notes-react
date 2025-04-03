/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Added support for JSX, TS, TSX
  theme: {
    extend: {
      colors: {
        headerColor: "#242530",
        textColor: "#ffffff",
        btnColor: "#0172F4",
        noteColor: "#FFCF7C",
        accentColor: "#FF6B6B", // New accent color
      },
      fontWeight: {
        customWeight: 500,
        extraBold: 800, // New font weight
      },
      height: {
        headerHeight: "74px",
        footerHeight: "60px", // New footer height
      },
      maxHeight: {
        navbarHeight: "420px",
        contentHeight: "800px", // New content height
      },
      minHeight: {
        customHeight: "530px",
        sectionHeight: "300px", // New section height
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
        roboto: ["Roboto", "sans-serif"], // New font family
      },
      fontSize: {
        logoText: "30px",
        customText: "15px",
        tablehHeaderText: "16px",
        headerText: ["50px", "60px"],
        tableHeader: ["15px", "25px"],
        smallText: "12px", // New small text size
      },
      backgroundColor: {
        customRed: "rgba(172, 30, 35, 1)",
        testimonialCard: "#F9F9F9",
        lightGray: "#E5E7EB", // New background color
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        deep: "0 0 25px rgba(0, 0, 0, 0.5)", // New box shadow
      },
    },
  },
  plugins: [],
};
