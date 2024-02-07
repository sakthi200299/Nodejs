const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'});
        fs.readFile('file.html','utf-8',(make,data)=>{
            if(make)
            {
                res.write("<h1 style='color : red;'>404 page Not Found</h1>")
            }
            else
            {
                res.write(data);
            }

        });
        (()=>res.write("<h1>Fill the  from </h1>"))();
}).listen(3000);