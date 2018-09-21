module.exports = {
  entry: "./app.ts",
  output: {
    filename: "./bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader"}
    ]
  }
};
