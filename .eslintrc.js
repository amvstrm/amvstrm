module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@nuxt/eslint-config"],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/html-indent": "off",
  },
};
