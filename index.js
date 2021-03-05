// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('./assets/node_modules/inquirer');
const goToGM = require('./assets/utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'title',
  }, 
  
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Describe your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the instructions for installation?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'How can this be used?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What licenses would you like to use?',
    name: 'license',
    choices: ['CC0 (Creative Commons Zero)', 'MIT', 'Apache 2.0', 'BSD 3-Clause']
  },
  {
    type: 'input',
    message: 'Any contributors?',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Tests performed:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Questions:',
    name: 'questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, function(err) {
    if (err) throw err;
    console.log('successfully saved')
  })
  
  }


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const fileName = answers.project;
      writeToFile(fileName, goToGM(answers));
    })
}

// Function call to initialize app
init();
