module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1600px",
    },
    colors: {
      dustDark: "#0E1C2D",
      dustLight: "#85CEC0",
      dustM: "#588A88",
      dustring: "#2F4D56",
      dustrang: "#619793",
      dustCool: "#142534",
      white: "#ffffff",
      black: "#000000",
      red: "#DB524E",
      green: "#32CD32",
      transparent: "transparent",
      redtext: "#B91C1C",
      redtext2: "#991B1B",
      redBg: "#FEE2E2",
      redBg2: "#FECACA",
    },

    extend: {
      backgroundImage: {
        "blue-image": "url('assets/images/pic3.jpg')",
        "word-image": "url('assets/images/word.png')",
        "image-service": "url('assets/images/pic2.jpg')",
        "image-contact": "url('assets/images/bg_space_contact.png')",
        "image-home": "url('assets/images/pic1.jpg')",
        "service-web": "url('assets/images/services/web.png')",
        "service-E-commerce": "url('assets/images/services/e-commerce.png')",
        "service-mobile": "url('assets/images/services/mobile.png')",
        "service-network": "url('assets/images/services/network.png')",
        "service-content": "url('assets/images/services/content.png')",
        "service-cloud": "url('assets/images/services/Cloud.png')",
      },
      zIndex: {
        10000: "10000",
      },
    },
  },
  plugins: [require("tailwindcss-children"), require("flowbite/plugin")],
};
