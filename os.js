// Node Os global object

/* The os global object provides operating system-related utility methods and properties. This global object has many benefits. This object can show the CPU arcitecture, ammount of free memory, ammount of total memory, and the operating system name along with so much more information about the system.  */ 

// Sample code 

// importing Os object
const os = require('node:os');

console.log();

console.log("System Information");

console.log("-----------------------");

// Getting platform
var platform = os.platform();
console.log(`System Platform: ${platform}`);

// Getting Architecture
var arch = os.arch();
console.log(`System Architecture: ${arch}`);

// Getting operating system
var opSys = os.release();
console.log(`Operating System: ${opSys}`)

// Getting Free memory
var freeMem = os.freemem();
console.log(`Free Memory: ${freeMem} bytes`);

// Getting Total memory
var totMem = os.totalmem();
console.log(`Total Memory: ${totMem} bytes`);

// Getting machine type
var machine = os.machine();
console.log(`Machine Type: ${machine}`);

console.log();