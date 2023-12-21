const express = require("express");
const fs = require("fs");

const app = express();


app.use(express.static('assets'));
app.set('views', './views');
app.set('view engine', 'html')


app.get('/', (req, res) => {
    req.sendfile(__dirname + 'views/checkout.html')
    // fs.readFile('checkout.html', 'utf-8', (err, data) => {
    //     if(err){
    //     res.writeHead(500);
    //     return res.end('Error loading checkout page')
    // }

    // res.writeHead(200,{
    //     'Content-Type':'text/html'
    // });
    // res.end(data);
    // })
    
})
app.listen(3200, () => {
        console.log('server is running on port 3200')
})