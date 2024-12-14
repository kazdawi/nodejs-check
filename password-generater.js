const generatePassword = require('generate-password');


let passwords = generatePassword.generateMultiple(4,{
    
  length: 8,
  numbers: true,

});


console.log(passwords)
