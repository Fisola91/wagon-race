
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "lib/wagon_race.js"), 
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js', 
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Point to the "public" directory
    },
    port: 8080,
  },
};
