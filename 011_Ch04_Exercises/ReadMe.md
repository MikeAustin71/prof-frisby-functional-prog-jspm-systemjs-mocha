
# Professor Frisby Examples With Jspm and SystemJs

## Overview
This is the setup used to build and run tests for Professor Frisby's Functional programming examples.
The tests are executed in the browser using index.html.

## Chapter 4 - Exercises
This setup is designed to execute tests for the Chapter 4 - Currying Exercises. 

## Thanks to Dr. Boolean for:
[Professor Frisby's Mostly Adequate Guide To Functional Programming ](https://drboolean.gitbooks.io/mostly-adequate-guide/?__s=ehycp62un87de5g78chs)
[Professor Firsby's Videos](https://www.youtube.com/watch?v=h_tkIpwbsxY&feature=youtu.be&t=13m11s&__s=ehycp62un87de5g78chs)
[Professor Frisby's Ebook Source Code](https://github.com/MostlyAdequate/mostly-adequate-guide)

## Thanks to Jason Jarrett for test harness: [jspm Mocha](http://staxmanade.com/2015/09/browser-only-mochajs-tests-using-systemjs/)


## Setup Package Versions

* babel-cli version 6.3.17  (globally installed) 
* babel-core version 6.3.17 (globally installed by babel-cli)
* babel-runtime version 6.3.13 (globally installed manually)
* jspm version 0.16.18
* accounting version 0.4.1
* ramda version 0.18.0
* mocha version 2.3.4
* chai version 3.4.1


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

* a. From project directory, run npm global install
    * (1) npm install -g babel-cli
    * (2) npm install -g babel-preset-react
    * (3) npm install -g babel-preset-es2015
    * (4) npm install -g babel-preset-stage-0
    * (5) npm install -g babel-plugin-transform-react-jsx
    * (6) npm install -g babel-plugin-transform-es2015-modules-commonjs
    * (7) npm install -g babel-plugin-transform-es2015-modules-amd
    * (8) npm install -g babel-plugin-transform-es2015-modules-systemjs

* b. From project directory, run npm local installation. (For items 'b', 'c', 'd' and 'e' you can run CmdrX.exe on windows platforms.)
    *  (1) npm install babel-cli
    *  (2) npm install babel-core
    *  (3) npm install babel-runtime
    *  (4) npm install babel-preset-react
    *  (5) npm install babel-preset-es2015
    *  (6) npm install babel-preset-stage-0
    *  (7) npm install babel-plugin-transform-react-jsx
    *  (8) npm install babel-plugin-transform-es2015-modules-commonjs
    *  (9) npm install babel-plugin-transform-es2015-modules-amd
    * (10) npm install babel-plugin-transform-es2015-modules-systemjs

* c. From project directory, run npm install jspm

* d. From project directory, run jspm init
     * (1) take all other defaults except for jspm storage directory
     * (2) name json_packages storage directory 'lib' (Needed for this setup - otherwise optional)

* e. Install remaining local packages
    *  (1) Run:  jspm config registries.npm.timeouts.lookup 120
    *  (2) Run:  jspm install npm:babel-core
    *  (3) Run:  jspm isntall npm:babel-runtime
    *  (4) Run:  jspm install npm:babel-preset-react
    *  (5) Run:  jspm install npm:babel-preset-es2015
    *  (6) Run:  jspm install npm:babel-preset-stage-0
    *  (7) Run:  jspm install npm:babel-plugin-transform-es2015-modules-commonjs
    *  (9) Run:  jspm install npm:babel-plugin-transform-es2015-modules-amd
    *  (9) Run:  jspm install npm:babel-plugin-transform-es2015-modules-systemjs
    * (10) Run:  jspm install npm:babel-plugin-transform-react-jsx
    * (11) Run:  jspm install css=github:systemjs/plugin-css
    * (12) Run:  jspm install npm:accounting
    * (13) Run:  jspm install npm:ramda
    * (14) Run:  jspm install npm:folktale
    * (14) Run:  jspm install npm:mocha (In addition, it may be necessary to install mocha globally npm install -g mocha)
    * (15) Run:  jspm install npm:chai
    * (16) Run:  jspm install jquery

### 4. Modify configuration files for latest babel versions.
* a. In package.json update babel-core and babel-runtime from 5* version to latest installed 6* version.
* b. Modify config.js 
    * (1) In config.js update babel-core and babel-runtime from 5* version to latest installed 6* version.
    * (2) Eliminate duplicate babel-core and babel-runtime elements
    * (3) In config.js set trace on:  
                    ```System.config({
                             trace:"true",```
    * (4) In config.js set babel Options:   
              ```babelOptions: {   
                "presets": [   
                  "es2015,stage-0,react"   
                ],   
                "optional": [   
                  "runtime",   
                  "optimisation.modules.system"   
                ]  
              },```
                               
* c. In jspm_packages/.dependencies.json - update babel-core and babel-runtime from 5* version to latest installed 6* version. 
     

### 5. Modify code files
* a. Code support or library files (./src/xlib)
* b. Optional: code exercise files if needed (./src/exercises)

### 6. Code test files
* a. Code test files as needed (./src/tests/Ex...). Individual tests are executed here.
* b. Code test initializer (./src/testInit.js) be sure to list Ex... test files
listed under section 'mochaTestScripts'

### 7. Start babel compile operation

* a. Execute babel watch - compiles whenever source files are modified -
output sent to build directory.
 ```
 babel src --watch --out-dir build --source-maps true
 ```

* b. Optional - manual compile
```
babel src --out-dir build --source-maps true
```
* c. __babel will take command line options from '.babelrc' file__



### 8. In separate console set up a Server and run index html
Choose a server.

#### 8-a [jspm-server](https://github.com/geelen/jspm-server)
 * (1) make sure jspm-server is installed globally: __jspm install -g jspm-server__
 * (2) For hot-reload feature make sure source javascript files include ```export let __hotReload = true;```
 * (3) Hot-Reload Feature = __The jspm-server automatically refreshes to display changes.__
 * (4) __NOTE: Hot Reload is not working with this version. You will need to reload page for display of changes.__
 * (5) To display index.html in the Browser-> Run: __jspm-server__<ENTER>

#### 8-b http-server - an alternative
 * To display index.html in the Browser npm install -g http-server
 * (if port 8080 it taken, pick any port that is free)
 * Run: __http-server -p 8080__<ENTER>

#### 8-c OR - Any of a half-dozen other servers

### 9. Display tests results in index.html

---

# Resources

### npm
[npm-cli](https://github.com/npm/npm-cli)

### jspm and mocha

[jspm Mocha](http://staxmanade.com/2015/09/browser-only-mochajs-tests-using-systemjs/)

### Running Mocha in the browser
[Running Mocha in the browser](http://mochajs.org/#running-mocha-in-the-browser)

[js performance](https://www.youtube.com/watch?v=65-RbBwZQdU)

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
