
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license){
  if (license){
    return `License Badge ![${data.license} License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=success)`
  } else {
    return ""
  }
  }


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => 

`
![${data.license}License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=success)

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