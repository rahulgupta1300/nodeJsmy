const fs = require('fs');

// creating folder below two way:))
// fs.mkdirSync('rahul'); // syncronation

// fs.mkdir('hero',()=>{}); //asncro

// here file created two way
// fs.writeFileSync('rahul/bio.txt', "hello world"); //syncro

// fs.writeFile('./hero/bio.txt', "heelo world", ()=>{}); //asncro

// data added in two way
// fs.appendFileSync('./rahul/bio.txt', " its meeeeeee"); //sncro

// fs.appendFile('./hero/bio.txt', " hello yes i m here bro" , ()=>{}); //asncro



// let read file in two way:
// const data = fs.readFileSync('rahul/bio.txt','utf-8');
// console.log(data);
// console.log(fs.readFileSync('rahul/bio.txt','utf-8')); //sncro


// fs.readFile('./hero/bio.txt', 'utf-8', 
// (error, data)=>{ console.log(data); });   //asncro



// lets rename file in two way::--
// fs.renameSync('rahul/bio.txt', 'rahul/rename.txt'); //synco
// fs.rename('hero/bio.txt','hero/rename.txt', (e)=>{ console.log('rename done')});  // asncro



// lets delet file name:)
// fs.unlinkSync('rahul/rename.txt'); //sncro
// fs.rmdirSync('rahul'); //snco

// fs.rmdir('hero', (e)=>{ console.log('folder delet')});  //asnco

// fs.unlink('./hero/rename.txt', (e)=> { //asncro
//     console.log('delet file');
// })
