const http=require('http');
const data=require('./Main');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
    console.log(data)
}).listen(4000);                                                                                                    