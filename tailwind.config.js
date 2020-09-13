module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.css",
    "public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
