var file = require('fs');
var zlib = require('zlib');
var data = '';
const gzip = zlib.createGzip();
// create a readble stream
// var readerStream = file.createReadStream('./log/mytextFile.txt');
// readerStream.setEncoding('UTF8');

// event check ready stream
// readerStream.on('ready', ()=>{
//     console.log('ready stream');
// })
// //handle stream event => data, end, error
// readerStream.on('data', (part) =>{
//     data += part;
// })

// readerStream.on('end', () => {
//     console.log(data);
// });

// readerStream.on('finish', () => {
//     console.log('finsh stream');
// });


// on(event: "pause", listener: () => void): this;
// on(event: "resume", listener: () => void): this;

// readerStream.on('error', (error)=>{
//     throw error.stack;
// });

//========== pipe in stream
var readerStream = file.createReadStream('./log/mytextFile.txt');
var writeStream = '';
readerStream.setEncoding('UTF8');
readerStream.on('data', (part) => {
    var replace = part.toString().replace('helloworld', 'Hi');
    data += replace;
});

readerStream.on('end', () => {
    console.log('process end');
    var completefile = file.writeFile('./log/mytextFile2.txt', data, (error) => {
        if (error) throw error;
        var readerStream2 = file.createReadStream('./log/mytextFile2.txt');
        writeStream = file.createWriteStream('./log/mytextFile.out.zip');
        readerStream2.pipe(gzip).pipe(writeStream);
        console.log('save');
    });
  

});
