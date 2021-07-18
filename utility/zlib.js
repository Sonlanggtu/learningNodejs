const zlib = require('zlib');  
const gzip = zlib.createGzip();  
const fs = require('fs');
fs.appendFile('./log/mytextFile.txt', 'helloworld', (error) =>{
    if (error) throw error;
});  
const inp = fs.createReadStream('./log/mytextFile.txt');  
const out = fs.createWriteStream('./log/mytextFile.txt.zip');  
inp.pipe(gzip).pipe(out);