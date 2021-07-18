const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var urlEndCodeParser = bodyParser.urlencoded({extended: false});
var app = express();
app.use(cookieParser());
app.get('/', (req, res) =>{
    res.cookie('productId', '1');

    //console.log(req.cookies.name)    
    res.send('host web is the express framework');
});

app.get('/profile', (req, res) =>{
    var cookie = req.cookies;
    console.log("productId: " + cookie['productId']);
    var response = {
        name: req.query.name,
        old: req.query.old
    }

    res.json(response);
    // res.json({
    //     'productCategory':'milk',
    //     'productName':'TH'
    // });

    res.end();
    // console.log('req query:' + req.query.toString())
    // console.log('req url:' + req.url)
    // console.log('req param:' + req.params.name)
});

app.post('/info', urlEndCodeParser, (req, res)=>{
    var response = {
        name: req.body.name,
        old: req.body.old,
        birthday: req.body.birthday,
        national: req.body.national
    }
    var name = req.body.name;
    var value = req.body;
    // res.json(response);
    res.end();

})

var server = app.listen(9000, () => {
    console.log('this server listen http:localhost:9000')
});

