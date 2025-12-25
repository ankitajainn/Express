const http = require('http');
const fs = require('fs');
const url =require("url");

const myserver = http.createServer((req, res) => {
    //res.write('Req received');
    //console.log('Request received');

    if(req.url==='/favicon.ico'){
        res.end();
        return;
    }






    const log=`${Date.now()}:  ${req.method} ${req.url} New Req\n`;
    const myurl=url.parse(req.url,ture);
    // console.log(myurl);
        fs.appendFile('serverlog.txt', log,(err,data)=>{
        switch(req.url){
            case '/':res.end('Home Page');break;
            case '/about':res.end('About Page');break;
            case '/contact':res.end('Contact Page');break;


            case "/signup":
                if(req.method==='GET'){
                    res.end('Signup Form');
                }   
                else if(req.method==='POST'){
                    //db query
                    res.end('Signup Success');
                }
            default:res.end('404 Page Not Found');break;
        }
        //res.end('Hello from server')//agr switch use kiya to ye line nahi likhna
    });
   // res.end('helloe from server');
});




/*npm start*/
myserver.listen(3000, ()=>console.log('Server is running on port 3000'));