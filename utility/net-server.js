const net = require('net');
var server = net.createServer(socket => {
    socket.end('googlebye\n');
}).on('error', error =>{
    // handle errors here
    throw error;
});

// grab a random port
server.listen(() => {
    var address = server.address();
    console.log('open server on %j', address);
});