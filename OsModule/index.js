const os = require('os');

console.log(os.arch());

const free_memory = os.freemem();
// console.log(free_memory);
// gb m memory dekna h
console.log(`${free_memory/1024/1024/1024}`);

const total_memory = os.totalmem();
console.log(`${total_memory/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.type());