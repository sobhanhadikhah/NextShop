/* {
  "plugins": ["@typescript-eslint","react"],
  "extends": ["next","next/core-web-vitals","plugin:react/recommended","plugin:react/jsx-runtime","plugin:@typescript-eslint/recommended","prettier"],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "ecmaVersion": 12,
  "sourceType": "module",
  "rules": {
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
 */
/** @type {import("eslint").Linter.BaseConfig} */

// NOTE: use lintel extension by Lintel: ESLint Configuration File Visualizer to config with gui

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node:true
  },
  globals:{
    "React": "readonly"

  },
  extends: [
    'next',
    'next/core-web-vitals',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }],
    "react/require-default-props": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-closing-tag-location": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    "no-console": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "comma-dangle": "off",
    "import/no-unresolved": "off",
    "prettier/prettier": [

      "off",
      {

      },
      {

        usePrettierrc: true
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".ts", ".tsx"]
      }
    ],
    "import/extensions": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
