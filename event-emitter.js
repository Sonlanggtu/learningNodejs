var events = require('events').EventEmitter;
var em = new events();

// listen event
em.on('firstEvent', function(data){
    console.log(data);
});

em.on('secondEvent', (data)=>{
    console.log(data);
});

// post event
em.emit('firstEvent', 'this is testing event emit');

em.emit('secondEvent', 'this context secondEvent');