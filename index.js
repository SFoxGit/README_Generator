// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'project',
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
    type:'input', 
    message:'',
    name:'usage',
  },
  {
    type:'input', 
    message:'',
    name:'license',
  },
  {
    type:'input', 
    message:'',
    name:'contribute',
  },
  {
    type:'input', 
    message:'',
    name:'tests',
  },
  {
    type:'input', 
    message:'',
    name:'questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
