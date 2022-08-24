#!/bin/bash
#setup the basic webpack stuff and make the std dirs
npm init -y
npm install webpack webpack-cli --save-dev
mkdir src
mkdir dist
touch dist/index.html
tee dist/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Initial Title</title>
</head>
<body>
    <script src="bundle.js" defer></script>
    <div id="content"></div>
</body>
</html>
EOF
touch webpack.config.js
# src/index.js is where webpack sourcing logic goes (require statements etc)
# can load many types of files etc
touch src/index.js
# My default config file
tee webpack.config.js <<EOF
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.csv$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
};
EOF
# package.json defaults. Note the build cmd in "scripts"
tee package.json <<EOF
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^6.7.1",
    "csv-loader": "^3.0.5",
    "style-loader": "^3.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "xml-loader": "^1.2.1"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
EOF
# allows npm to watch for changes and auto-recompile
npx webpack --watch