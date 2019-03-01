module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["prettier-tsx", "plugin:react/recommended"],
  rules: {
    "react/prop-types": false
  }
};
