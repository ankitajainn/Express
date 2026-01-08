const http = require('http');
const fs=require("fs");
const url =require("url");

const myserver=http.createServer((req,res)=>{

    if(req.url==="/favicon.ico"){

      res.end();
     return ;
    }
    
    const log=`${Date.now()} ${req.url}NEW REQYEST\n`;
    const myurl = url.parse(req.url,true);
    console.log(myurl);
    
    fs.appendFile("log.txt",log,(err,data)=>{
         switch(myurl.pathname){
            case'/':res.end("HomePAGe");
            break;
            case '/about':
                const username=myurl.query.myname
                res.end(`I AM ${username}CODER`);
            break;
            case '/contact' :res.end("MAIL me");
            break;
            default: res.end("pta ni re 404");
         }
    });
   
});
myserver.listen(8000,()=>{
    console.log("server started")
});
