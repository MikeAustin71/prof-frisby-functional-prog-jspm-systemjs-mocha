
# Professor Frisby Examples With Jspm and SystemJs

## Overview
This is the setup used to build and run Professor Frisby's 'flickr' example. This'flickr' version
is version 1 right out of the book before refactoring. 


## Thanks to Dr. Boolean for: 
[Professor Frisby's Mostly Adequate Guide To Functional Programming ](https://drboolean.gitbooks.io/mostly-adequate-guide/?__s=ehycp62un87de5g78chs)
[Professor Firsby's Videos](https://www.youtube.com/watch?v=h_tkIpwbsxY&feature=youtu.be&t=13m11s&__s=ehycp62un87de5g78chs)
[Ebook Source Code](https://github.com/MostlyAdequate/mostly-adequate-guide)

## Thanks to Jason Jarrett for test harness: [jspm Mocha](http://staxmanade.com/2015/09/browser-only-mochajs-tests-using-systemjs/)


## Setup Package Versions

* jspm version 0.16.15
* accounting version 0.4.1
* ramda version 0.18.0
* mocha version 2.3.4
* chai version 3.4.1
* jquery version 2.1.4


## Quick Setup/Install Procedures

### 1. Create sub-directories
* a. create sub-directory ./src
* b. create sub-directory ./src/exercises
* c. create sub-directory ./src/tests
* d. create sub-directory ./src/xlib
* e. create sub-directory ./build


### 2. Copy and Modify configuration files.
* a. Copy the pre-configured files to your project directory 000_setup/ :
    * (1) package.json
    * (2) .babelrc (Optional - Defaults are Ok - modify babel options as necessary)
    * (3) index.html
* b. Modify package.json
    * (1) Modify name and other description elements
    * (2) Modify other descriptive elements as necessary

### 3. Install packages    
* a. From project directory, run npm install jspm
    
* b. From project directory, run jspm init
     * (1) take all other defaults except for jspm storage directory
     * (2) name json_packages storage directory 'lib' (Needed for this setup - otherwise optional)
  
* c. Run jspm install npm:accounting
* d. Run jspm install npm:ramda     
* e. Run jspm install npm:mocha (In addition, it may be necessary to install mocha globally npm install -g mocha)
* f. Run jspm install npm:chai
* g. Run jspm install jquery


### 4. Modify code files     
* a. Code support or library files (./src/xlib)
* b. Optional: code exercise files if needed (./src/exercises)

### 5. Code test files
* a. Code test files as needed (./src/tests/Ex...). Individual tests are executed here.
* b. Code test initializer (./src/testInit.js) be sure to list Ex... test files 
listed under section 'mochaTestScripts'

### 6. Start babel compile operation 

* a. Execute babel watch - compiles whenever source files are modified - 
output sent to build directory.
 ```
 babel src --watch --out-dir build --source-maps true
 ```

* b. Optional - manual compile
```
babel src --out-dir build --source-maps true
```
* c. __babel will take options from '.babelrc' file__



### 7. In separate console set up a Server and run index html
Choose a server.

#### 7-a jspm-server
 * (1) make sure jspm-server is installed globally.
__jspm install -g jspm-server__

 * (2) To display index.html in the Browser->
Run: __jspm-server__<ENTER>

 * __The jspm-server automatically refreshes to display changes.__

#### 7-b http-server
 * To display index.html in the Browser npm install -g http-server
 * (if port 8080 it taken, pick any port that is free)
 * Run: __http-server -p 8080__<ENTER>

#### 7-c OR - Any of a half-dozen other servers

### 8. Display tests results in index.html

---

# Resources

### npm
[npm-cli](https://github.com/npm/npm-cli)

### jspm and mocha

[jspm Mocha](http://staxmanade.com/2015/09/browser-only-mochajs-tests-using-systemjs/)

### Running Mocha in the browser
[Running Mocha in the browser](http://mochajs.org/#running-mocha-in-the-browser)

### JSPM Info
[jspm Info](http://jspm.io/)


### JSPM Docs
[jspm docs](https://github.com/jspm/jspm-cli)


### JSPM Bundling
[jspm bundles](https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md)

### Systemjs
[Systemjs](https://github.com/systemjs/systemjs)

### Systemjs Config
[Systemjs Config](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md)

