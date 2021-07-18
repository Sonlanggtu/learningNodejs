var http = require("http");
var file = require('fs');
const e = require("express");
const os=require('os');
var path = require("path");  

var _pathlog = './log/';
var _pathfile = '/file/';
var server = http.createServer((request, response)=>{
    var queryString = request.url;
    if (queryString == "/student") {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write("page " + queryString);
          // ======================== file =========================
        file.readFile( _pathfile + 'student.html', (error, success) => {
            if(error) throw error;            
            response.write(success);
            response.end();
        });

        // file.appendFile( _pathlog + 'dsad.txt', 'hello world', {encoding: 'utf-8'}, (error)=>{
        //     if(error) {  throw error};   
        // });

        // file.open(_pathlog + 'dsad.txt', 'r', (error, file)=>{
        //         if(error) throw error;
        //         console.log("readfile " + file);
        // });

        // file.unlink( _pathlog + 'dsad.txt', error =>{
        //     if (error) throw error;
        // });
        // fs.rename('myTextFile2.txt','myTextFile3.txt',function(err){
        //     if(err) throw err;
        //     console.log('File renamed');
        // });
        //=========================================================

        
       
    }
    else if(queryString == "/infoStudent"){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(queryString);
    }
    else{
        response.write("server starting address at http:localhost:70000");
        response.end();
    }
});

server.listen(7000);
console.log("Server running at http:localhost:7000");




// ============================== Module path =============================
// Normalization  
// console.log('normalization : ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));  
// // Join  
// console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  
// // Resolve  
// console.log('resolve : ' + path.resolve('path_example.js'));  
// // Extension   
// console.log('ext name: ' + path.extname('path_example.js'));    

// ========================== GET INFO OS ===================

// console.log("os.freemem(): \n",os.freemem());  
// console.log("os.homedir(): \n",os.homedir());  
// console.log("os.hostname(): \n",os.hostname());  
// console.log("os.endianness(): \n",os.endianness());  
// console.log("os.loadavg(): \n",os.loadavg());  
// console.log("os.platform(): \n",os.platform());  
// console.log("os.release(): \n",os.release());  
// console.log("os.tmpdir(): \n",os.tmpdir());  
// console.log("os.totalmem(): \n",os.totalmem());  
// console.log("os.type(): \n",os.type());  
// console.log("os.uptime(): \n",os.uptime());  


// ====================== Global object ======================
// console.log('file >>');
// console.log(__filename);
// console.log('dir >>');
// console.log(__dirname);
//console.log('process >>');
//console.log(process);
// ===========================================================

// ================ import module ============================
//  var _logger = require('./log/log.js');
//  _logger.info('hello-world');
// ===========================================================