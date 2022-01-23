const data = {
    name: "John Doe",
     age: 32,
     title: "Vice President of JavaScript" ,
     title: "Vice President of JavaScript"
  }

//   console.log(data);
    //  console.log(data.age);


// obect to json file
    // const jsonStr = JSON.stringify(data);
    // console.log(jsonStr);
// json to obj file
    // const obj = JSON.parse(jsonStr);
    // console.log(obj);


// now chalenge time:__
const json = JSON.stringify(data);
console.log(json);

const fs = require('fs');
fs.writeFile("json1.json", json, (err)=>{ console.log("done"); })

// fs.readFile('json1.json', 'utf-8', (error, data) =>{
//     console.log(data)
//     const objdata = JSON.parse(data);
//     console.log(objdata);
// })