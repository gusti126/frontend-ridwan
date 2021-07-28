module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "hijau-custom": "#38B0A9",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../image/bg-header.png')",
        "hero-galang-dana": "url('../image/bg-header-galang.svg')",
        "hero-pattern-mobile": "url('../image/bg-header-md.png')",
      }),
      minHeight: {
        "hero-mobile": "50%",
        "hero-desktop": "700px",
      },
      boxShadow: {
        "hijau-hmi": "1px 1px 6px 3px rgba(0, 115, 28, 0.55)",
        "hijau-hmi2": " 1px 3px 14px 1px rgba(0, 115, 28, 0.55);",
      },
    },
  },
  variants: {},
  plugins: [],
};
