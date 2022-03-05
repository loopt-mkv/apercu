
module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "import/no-unresolved": [
      2,
      {
        commonjs: true,
      },
    ],
  },
  plugins: [
    "import",
  ],
}
