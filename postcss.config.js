module.exports = {
  plugins: {
    "postcss-css-variables": {
      preserve: true,
      preserveInjectedVariables: false,
      variables: require("./page.json")
    }
  }
};