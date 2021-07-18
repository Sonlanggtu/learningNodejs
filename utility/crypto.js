const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('testing lib crypto')  
                   .digest('hex');  
console.log(hash);