
// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license){
  if (license){
    return `License Badge ![${data.license} License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=success)`
  } else {
    return ""
  }
  }

  function renderLicenseLink(license){
    if (license === 'MIT') return `License Badge ![${data.license} License](https://opensource.org/licenses/MIT)`;
    if (license === 'GNU') return `License Badge ![${data.license} License](https://opensource.org/licenses/GPL-2.0)`;
    if (license === 'Apache2.0') return `License Badge ![${data.license} License](https://opensource.org/licenses/Apache-2.0)`;
    if (license === 'BSD') return `License Badge ![${data.license} License](https://opensource.org/licenses/BSD-3-Clause)`;
    return "";
  }
  
  

// Function to generate markdown for README
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
  This application is licensed under [${data.license}](${renderLicenseLink}). 


  ## Contributors
  ${data.contributors}

  ## Tests 
  ${data.tests}

  ## Questions
  If you have any questions about this project, please contact [${data.userEmail}](mailto:${data.userEmail}). To view more of my projects, go to [${data.github}](https://github.com/${data.github}).


`;

module.exports = generateMarkdown;