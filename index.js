// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// linking to generator page
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
  
      },
      {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What type of license should your project have?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Who are contributors for this project?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'How do you run tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      
    ]);
};



// TODO: Create a function to write README file
const writeToFile = data => {
fs.writeToFile('README.md', data, (err) => err ? console.error(err) : console.log("Your README has been successfully created."));
}



// Function call to initialize app

questions()
    .then(answers => {
        return generateMarkdown(answers);
    })

    .then(data => {
        return writeToFile(data);
    })




// questions.projectName
// questions.projectDescription
// 