// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// linking to generator page
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = () => {
inquirer.prompt ([
      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please provide a title for your project');
            return false;
          }
        }
  
      },
      {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please provide a description for your project');
            return false;
          }
        }
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm install'
      },
      {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What type of license should your project have?',
        choices: ['MIT', 'GNU', 'Apache2.0', 'BSD'],
        name: 'license',
        default: 0,
      
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
        default: 'npm test'
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
      
    ])
    // Function to write README file
    .then((answers) => {
        console.log(answers);
        const readmeData = generateMarkdown(answers);
        fs.writeFile('./output/README.md', readmeData, (err) => err ? console.error(err) : console.log("Your README has been successfully created."));
    })
  }


// Function to initialize app
function init() {
  questions()
}

// Function call to initialize app
init();
