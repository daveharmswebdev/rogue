# Webpack and AngularJS

Obviously there are a lot of ways to leverage AngularJS. One style to consider is one that relies on [Webpack](https://webpack.js.org/) for module loading and build processes.

Webpack would bring the following benefits:
* Module loading
* Babel transpiling and the ability to use ES2015/ES2017 Javascript
* A simplified process for unit testing
* Movement towards Angular 2 Migration
* More

Webpack basics: it starts with the webpack.config.js file:

```javascript
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractPlugin = new ExtractTextPlugin({ filename: './assets/css/app.css' });

const config = {

  context: path.resolve(__dirname, 'src'),
  
  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },

  module: {
    rules: [

      //babel-loader
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },
      //html-loader
      { test: /\.html$/, use: ['html-loader'] },
      //sass-loader
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'assets', 'media','scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      // file-loader for images
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      // file-loader for fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractPlugin
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    port: 12000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'
  
}

module.exports = config;
```

The config file above will allow for javascript, sass/css, and image bundling. It will take all those files from a source directory and produce them in a 'dist' folder. The index.html file in that folder will be based on a template that resides in the 'src' folder. Webpack also provides a development server. It watches for file changes and those changes are immediately updated in the browser.

Note the context and entry keys, essentially they says that `src/app.js` is the entry point for all files to be imported into so they can be modularized and loaded.

Using Webpack would require Node and NPM. The above config files requires the following devDependencies:

```json
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.9",
    "eslint": "^4.18.0",
    "eslint-config-standard": "^11.0.0-beta.0",
    "eslint-plugin-angular": "^3.2.0",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-node": "^6.0.0",
    "eslint-plugin-promise": "^3.6.0",
    "eslint-plugin-standard": "^3.0.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.6",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.20.2",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  }
```

With Node and NPM part of the tech stack, angular would then be NPM installed and it would be imported into the `app.js` file.

```javascript
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { MainCtrl } from './controllers/MainCtrl';
import { routing } from './app.routing';

angular.module('app', [uiRouter]);

angular.module('app').config(routing);

angular.module('app').controller('mainCtrl', MainCtrl);
```

The previous lines of code imports angular and ui-router, which were NPM installed, creates an angular module named `app`, creates a controller named `mainCtrl`, imports a class named `MainCtrl` which becomes the functionality of the `mainCtrl` controller. 

## UI-Router

## Feature Modules

```javascript
// app.js
import angular from 'angular';
...
import { TodoModule } from './todos/lkq-todos.module';

angular.module('app', [uiRouter, TodoModule]);

// todos.module.js
import angular from 'angular';
import { LkqTodos } from './lkq-todos.component';
import { TodosService } from './lks-todos.service';

export const TodoModule = angular
  .module('TodoModule', [])
  .component('lkqTodos', LkqTodos)
  .service('TodosService', TodosService)
  .name
```

## DevServer and Production Build Files
Webpack allows you fine control of the devserver (hotmodule reload with browser refresh upon file change) and production build. This project has three webpack config files. A common file, and dev and production files that import the common file and extends on them. 
