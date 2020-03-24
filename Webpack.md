
## What is Webpack
Webpack is a module bundler. It resolves code dependencies in the different files, by converting them into modules, and then executing them at the right time in the correct scope. 


## 
``` javascript 
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/),
        filename: 'bundle.js
    }
}

```
entry is the main entry point of the application, where all initial loading and dependency logic is at. It is normally named index.js

output is the resulting bundle, conventionally named bundle.js

path.resolve is a Node.js function which forms an absolute path from concatenating the arguments from right to left. 

### Other file types 
Webpack can bundle other file types as well, but they need to be converted into a language Webpack understands, which is ES5 Javascript.
To do so, we need a loader. Loaders are interfaces Webpack use to deal with content which are not ES5.

Babel converts ES6 JS syntax into ES5. Webpack can use the Babel-loader to process code written in ES6.

```
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
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
            }
        ]
    }
};


```
