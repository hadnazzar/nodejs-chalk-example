import chalk from 'chalk';

const error = chalk.bold.red;
const info = chalk.yellow;
const success = chalk.green;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(info('Info!'))
console.log(success('Success!'))
console.log(warning('Warning!'));