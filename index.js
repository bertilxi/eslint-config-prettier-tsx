module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["prettier-ts", "plugin:react/recommended"],
  rules: {
    "react/prop-types": 'off'
  }
};
