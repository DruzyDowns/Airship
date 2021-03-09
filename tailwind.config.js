//npx tailwindcss build src/css/application.css -o assets/application.css.liquid

module.exports = {
  purge: {
    enabled: false,
    content: [
      "./layout/*.liquid",
      "./templates/*.liquid",
      "./sections/*.liquid",
      "./snippets/*.liquid",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
