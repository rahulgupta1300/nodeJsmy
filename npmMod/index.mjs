import chalk from 'chalk';
// const chalk = require('chalk');
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));


// var validator = require('validator');
import validator from 'validator';

const res = validator.isEmail('rahulbar.com');
console.log(res);


console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));