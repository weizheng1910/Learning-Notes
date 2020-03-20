// Node JS
// Node JS allows the Javascript engine to run on the computer instead of 
// the browser. 

// Anything done on the browser can now be done from the computer 
// Eg. Accessing files
//     Listening to network requests etc.
// PHP stuff can now be done with JS!

// With NodeJS, you can either built utilities on the machine -creating
// new NPMs?
// Or create a web server. ( Using the express framework)

// When you type node in the terminal, you will start a process

// process.argv is an array which takes what you have typed and
// store it in an array. 

// Unlike the browser, the computer does not have the window or document object
// in the node process. There is only a global object. 
// And process object.

// Within node, there are modules available, which are pieces of code
// written by other developers which we can use.

var m2 = require('./module2')

// In module2, you need to use the below code so that the code 
// can be exported into your main.js file.

module.exports.a = 1;
// Or
exports.a = 1;

// Note that what you are exporting is an object. 
// You can store methods within the module.object. 

// npm stands for node package manager
// npm manages modules(they are like utilities) which can be downloaded from the terminal 

// A special feature of npm is that:
// It allows you to save all these modules which you used into a package.
// It is stored in the package.json

// To start a package, you use npm init.
// It will take note of the modules you have used and their versions.
// These modules will be in the field 'dependencies', with the name and version of the module.

// So that when other people git clone your code, they can just do a npm install
// and the package.json file will be referred to and the relevant modules will be downloaded. Simple.

// When you install a module and want it to be stored in the package.json
// use: 

npm install jsonfile - S

// where s stands for save.

// When you do a npm install, the computer downloads the physical copy 
// and stores it in the node_modules folder 
// When doing version control, this folder should be in .gitignore
// It isn't very necessary to track the changes of the dependencies, as npm 
// is already doing for us.

// ** npm allows you to easily maintain your dependencies.

// http package comes built into node.

var http = require('http');

http.createServer(function(request, response) {
    console.log('got a request');
    response.write('hi');
    response.end
});

server.listen(3000)

// When the above code is run, 
// A server is started, and runs continously, waiting for an event 
// in the port 3000. ( Think - Asynchronous programming)

// When you open your browser, and type localhost:3000 in the url, 
// The browser sends a request
// And the terminal will show 'get a request!'