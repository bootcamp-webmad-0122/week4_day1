const chalk = require('chalk')

const firstCommand = chalk.bgGray.bold('npm init')
const secondCommand = chalk.bgGray.bold('npm install')
const thirdCommand = chalk.bgGray.bold('npm install ' + chalk.italic('module_name'))

console.log('El comando', firstCommand, 'inicializa un proyecto de NPM')
console.log('El comando', secondCommand, 'instala los paquetes de package.json')
console.log('El comando', thirdCommand, 'instala el paquete mencionado')