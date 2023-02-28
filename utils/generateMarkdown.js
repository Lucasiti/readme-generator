// function to generate markdown for README
function generateMarkdown(response) {
  return `![Bower](https://img.shields.io/bower/l/inquirer)
  # ${response.title}
  ## Motivation
  ${response.motivation}
  
  ## Description
  ${response.title}
  
  ## Table of contents
  * [Technologies used](#technologies-used)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Technologies used
  ${response.technologies}
  
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## License
  ${response.license}
  ![Bower](https://img.shields.io/bower/l/inquirer)
  
  ## Contributors
  ${'If you would like to contribute to this project, follow these instructions'}
  
  ## Tests
  ${response.tests}
  
  ## Questions
  ${response.questions}
`;
}

module.exports = generateMarkdown;
