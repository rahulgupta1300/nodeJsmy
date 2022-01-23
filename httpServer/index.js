// yaha server create kiye h:--
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end("here we make a response by requste");
// });

// server.listen(9000, "127.0.0.1", ()=>{
//     console.log("yaha lisen ho rha h ");
// });


// ROUTING :))
const http = require('http');

const server = http.createServer((req, res)=>{
                                                    //  console.log(req.url);   //yaha hmarey link prr kyya kyya search mar rh h clint wo dekh sktey h 
    
    if(req.url =='/'){
        res.end("thise is our home page");
    } else if(req.url =='/about'){
        res.end('here our about page there');
    }else{
        res.writeHead(404, { "Content-type":"text/html" });
        res.end('<h1>404 reeor page , page dose not found </h1>');   
    }
    
});

server.listen(9000, "127.0.0.1", ()=>{
    console.log("yaha lisen ho rha h ");
});