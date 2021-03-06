# Very brief summary of Webpack and Webpacker


## What is Webpack
Webpack is a module bundler. It resolves dependencies between different files, by converting them into modules, and then executing them at the right time in the correct scope. 

## Webpack and React

When using React, Webpack is *necessary* to organise React components by allowing each of the components to be written in a different file, and be executed smoothly by bundling them together and loading them as a single file.

## How it works 
Webpack has a config file `webpack.config.js` which defines the following:
* entry point
* output
* loaders
* plugins

##### Entry 
entry is the main entry point of the application, the starting point from which the dependencies extend. 
##### Output
output is the resulting bundle, conventionally named `bundle.js`. In most cases, the output file is loaded as a `<script>` in the html to be rendered.
##### Loaders
Webpack can bundle other file types as well, but they need to be converted into ES5 JS, the language Webpack understands.
To do so, we need loaders, which are interfaces Webpack uses to deal with content which are not ES5.
Example:</br>
Babel converts ES6 JS syntax into ES5. Webpack uses the Babel-loader to process code written in ES6.
#### Plugins 
Plugins perform a wider range of task. E.g. 
* `html-webpack-plugin` creates a HTML file by with all your generated bundles.
* extractTextPlugin (DEPRECTATED) extract modules into a specified file. 

Below is a `webpack.config.js` file
``` javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.png$/,
                loaders: [
                    'url-loader?limit=5000',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};



```
### Webpacker 
In rails, the gem webpacker is used to compile Javascript code. Webpacker integrates webpack into rails. 
In rails 6, JS code are now stored in assets/javascript , unlike previously where they are stored in `app/assets/javascript`
Webpacker provides the `<%= javascript_pack_tag%>` helper to call your js code in the views file of rails. Similarly, CSS files can be stored and retrieved with  `<%= stylesheet_pack_tag 'style' %>`

## Managing modules 

#### Using Webpack

```
export { add } 
```

```
import { add } from `file.js`
```
#### Without Webpack

`module.exports = { add }`

`const { add } = require('file.js')`

