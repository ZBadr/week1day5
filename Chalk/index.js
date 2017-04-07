var chalk = require("chalk");

var message = chalk.magenta.underline.bold("Hello ") + chalk.blue.underline.bold("World");
console.log(message);