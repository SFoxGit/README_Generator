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
    type: 'list',
    message: 'Would you like to add images to your description?',
    name: 'promptImage',
    choices: ['Yes', 'No']
  },
  {
    type: 'input',
    message: 'Place url or path here',
    name: 'image1',
    when: (answers) => answers.promptImage === 'Yes'
  },
  {
    type: 'list',
    message: 'Would you like to add another image to your description?',
    name: 'promptImage2',
    choices: ['Yes', 'No'],
    when: (answers) => answers.promptImage === 'Yes'
  },
  {
    type: 'input',
    message: 'Place url or path here',
    name: 'image2',
    when: (answers) => answers.promptImage2 === 'Yes'
  },
  {
    type: 'list',
    message: 'Would you like to add another image to your description?',
    name: 'promptImage3',
    choices: ['Yes', 'No'],
    when: (answers) => answers.promptImage2 === 'Yes'
  },
  {
    type: 'input',
    message: 'Place url or path here',
    name: 'image3',
    when: (answers) => answers.promptImage3 === 'Yes'
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
    choices: ['CC0 (Creative Commons Zero)', 'MIT', 'Apache 2.0', 'BSD 3-Clause', 'none']
  },
  {
    type: 'input',
    message: 'Enter any contributors here:',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Tests performed:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Please enter any credits you need to make for your project',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'Using gitHub pages?',
    name: 'gitTorF',
    choices: ['Yes', 'No']
  },
  {
    type: 'input',
    message: 'What is your gitHub username?',
    name: 'gitName',
  },
  {
    type: 'list',
    message: 'Do you have a gitHub Repo?',
    name: 'gitRepoTF',
    choices: ['Yes', 'No'],
    when: (answers) => answers.gitTorF === 'No'
  },
  {
    type: 'input',
    message: 'What is the name of your gitHub repository?',
    name: 'gitRepo',
    when: (answers) => answers.gitTorF === 'Yes' || answers.gitRepoTF === 'Yes'
  },
  {
    type: 'input',
    message: 'Links to deployed project',
    name: 'projLinks',
    when: (answers) => answers.gitTorF === 'No'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.mkdir(fileName, { recursive: true }, (err) => { if (err) throw err });
  fs.writeFile('./' + fileName + '/README.md', data, function (err) {
    if (err) throw err;
    console.log('successfully saved')
  })

};


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const fileName = answers.title;
      writeToFile(fileName, goToGM(answers));
    })
}

// Function call to initialize app
init();
