# AdvaJS - Advanced NodeJS and vanilla tools.

### Install advaJS with NodeJS

- install with your terminal
  ```
  npm install advajs
  ```

### First Use : AdvaJS version 1.0.1 : Advanced Require

```js
// import
const advajs = require("advajs");
const advrequire = advajs.require;

// import folder
const advafolder = advarequire(/*type*/ "folder", /*url*/ __dirname);
// import content of the file in the folder
const file = advafolder.getfile(/*file*/ "test.json").then((content) => {
  console.log(content);
});

// import normally a file

const file = advarequire(/*type*/ "file", /*url*/ __dirname + "/test.json");
console.log(file);

// import external json response with HTTP url

const url = advarequire(/*type*/ "fileHTTP", "http://example.com/");
console.log(url.text);
```

### AdvaJS version 1.1.0 : fileWriter and fun

```js
// get Zalgo text by set random letter in upper case in a strin
const setRandUpCase = advajs.setRandUpCase;
console.log(setRandUpCase("Hello Guys")); // -----> HelLO gUyS <------

// File writer : add a key with a value
const fileWriter = new advajs.fileWriter(__dirname + "/test.json"); // ---> {}
fileWriter.addKey(/*keyName*/ "hello", /*value*/ "world"); // ---> {"hello":"world"}
// File writer : edit value of a key
fileWriter.editKey(/*keyName*/ "hello", /*newValue*/ "guys"); // ---> {"hello":"guys"}

// File writer : remove a key
fileWriter.removeKey(/*keyName*/ "hello"); // ---> {}

// get content of the file
console.log(fileWriter.fileReq);

// Reverse a string or a number (-)
console.log(advajs.reverse(/*string or number*/ "Hello World")); // ---> dlroW olleH
console.log(advajs.reverse(/*string or number*/ 180)); // ---> -180
```
