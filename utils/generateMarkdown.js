module.exports = {generateMarkdown};

// TODO: Create a function that returns a license badge based on which license is passed in
const renderLicenseBadge = (data) => {
  return `
    License Badge ${data.licenseBadge}
  `
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTitle(title) {
  return `# ${data.title}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


const generateMarkdown = data => {
  return `# ${data.title}

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
}



;
