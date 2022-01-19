module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript-prettier",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
  },
};
