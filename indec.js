const fs = require("fs");

// crating a file with help core modules
fs.writeFileSync("read.txt", "hii node js");
// fs.writeFileSync("read.txt", "hello world");


// fs.appendFileSync("read.txt", " this is other feature");

const buff_data = fs.readFileSync('read.txt' );
console.log(buff_data.toString());

// file name change here 
fs.renameSync("read.txt", "expriment-file.txt");
