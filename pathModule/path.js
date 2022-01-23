const path = require('path');

console.log(path.dirname('R:/nodeJsmy/pathModule/path.js'));
console.log(path.extname('R:/nodeJsmy/pathModule/path.js'));
console.log(path.basename('R:/nodeJsmy/pathModule/path.js'));
console.log(path.parse('R:/nodeJsmy/pathModule/path.js'));


let myPath = path.parse('R:/nodeJsmy/pathModule/path.js');
console.log(myPath.name);
console.log(myPath.root);