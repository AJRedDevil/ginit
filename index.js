// npm packages
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// our packages
const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const github = require('./lib/github');

clear();
console.log(chalk.yellow(figlet.textSync('Ginit', {horizontalLayout: 'full'})));

/*
if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}
*/

const run = async () => {
  let token = github.getStoredGithubToken();
  if(!token) {
    await github.setGithubCredentials();
    token = await github.registerNewToken();
    console.log(token);
  }
};

run();
