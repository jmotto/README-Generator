// TODO: Include packages needed for this application
// write files
const fs = require('fs');

// ask the user data
const inquirer = require('inquirer');

// linking to generator page
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const  questions = [
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    }
];

// const questions = () => {
//     return inquirer.prompt ([
//     {
//         type: 'input',
//         message: 'What is the name of your project?',
//         name: 'title',
  
//       },
//       {
//         type: 'input',
//         message: 'Please write a short description of your project.',
//         name: 'description',
//       },
//       {
//         type: 'input',
//         message: 'What command should be run to install dependencies?',
//         name: 'installation',
//       },
//       {
//         type: 'input',
//         message: 'How do you use this application?',
//         name: 'usage',
//       },
//       {
//         type: 'input',
//         message: 'What type of license should your project have?',
//         name: 'license',
//       },
//       {
//         type: 'input',
//         message: 'Who are contributors for this project?',
//         name: 'contributors',
//       },
//       {
//         type: 'input',
//         message: 'How do you run tests?',
//         name: 'tests',
//       },
//       {
//         type: 'input',
//         message: 'What is your email address?',
//         name: 'userEmail',
//       },
//       {
//         type: 'input',
//         message: 'What is your GitHub username?',
//         name: 'github',
//       },
      
//     ]);
// };



// TODO: Create a function to write README file
function writeToFile (fileName,data) {
fs.writeToFile(fileName, data, 
    (err) => err ? console.error(err) : console.log("Your README has been successfully created."));
}



// TODO: Create a function to initialize app
function init() {

        // Ask the user the questions
        // THEN I want to pass `responses` to `generateMarkdown` so we can get the `markdown`

        // THEN write the `markdown to a file OUTPUT_README.md

    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
      
          },
          {
            type: 'input',
            message: 'Please write a short description of your project.',
            name: 'description',
          },
          {
            type: 'input',
            message: 'What command should be run to install dependencies?',
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

        questions()
        .then(answers => {
            return generateMarkdown(answers);
        })
    
        .then(data => {
            return writeToFile(data);
        })
    };
    



// Function call to initialize app
init();





// questions.projectName
// questions.projectDescription
// 