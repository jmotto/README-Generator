
// TODO: Create a function that returns a license badge based on which license is passed in
const licenseList = []
function renderLicenseBadge(license){
  if (license){
    return `License Badge ![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`
  } else {
    return ""
  }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
const generateMarkdown = data => 

`
 # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests 
  ${data.tests}

  ## Questions
  If you have any questions about this project, please contact ${data.userEmail}. To view more of my projects, go to ${data.github}.


`;

module.exports = generateMarkdown;