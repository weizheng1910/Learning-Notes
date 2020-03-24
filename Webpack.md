
## What is Webpack
Webpack is a module bundler. It resolves code dependencies, by converting them into modules, and then executing them at the right time in the correct scope. 


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
