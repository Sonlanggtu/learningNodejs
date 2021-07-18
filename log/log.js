var _log = {
    info: (message) =>{
        printlog("info: " + message);
    },

    warning: (message) =>{
        printlog("warning: " + message);
    },

    error: (message)=>{
        printlog("error: " + message);
    },

    
}

function printlog (message){
   return console.log(message);
}

module.exports = _log;