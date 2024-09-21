console.log(arguments);

const m = require("./ourModule.js");

console.log(m.x); 
m.increaseX();

const m2 = require("./thirdParty.js"); 

console.log(m.x); // PROVE THAT MODULES ARE CACHED