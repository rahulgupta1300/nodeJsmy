const fs = require('fs');
// fs.mkdirSync('rahul');
fs.writeFileSync('rahul/bio.txt','hello world');
fs.appendFileSync('rahul/bio.txt', '  this do bro');


// 1st way bufeer to string
// const buff = fs.readFileSync('rahul/bio.txt', 'utf-8');
// console.log(buff);

// 2nd way
const buff = fs.readFileSync('rahul/bio.txt');
console.log(buff.toString());
fs.renameSync('rahul/bio.txt','rahul/dot.txt');
fs.unlinkSync('rahul/dot.txt');
fs.rmdirSync('rahul');