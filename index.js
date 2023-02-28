const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//const questions = []

inquirer
.prompt
([
  {
    type: 'input',
    message: 'Enter the title of your project?',
    name: 'title',
    validate: function(response) {
      if (response === '') {
          return console.log("A Title is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: 'What problem does your application solve?',
    name: 'motivation',
    validate: function(response) {
      if (response === '') {
          return console.log("An answer is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: 'Please describe your project',
    name: 'description',
    validate: function(response) {
      if (response === '') {
          return console.log("A description is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: 'What technology did you use?',
    name: 'technologies',
  },
  {
    type: 'input',
    message: 'How do you install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How do you use your application?',
    name: 'usage',
  },
  {
    type: 'checkbox',
    message: 'What licence will you use?',
    choices: ['MIT license', 'None'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'If you would like to contribute to this project please follow these instructions',
    name: 'contributers',
  },
  {
    type: 'input',
    message: 'What tests have you written for your application?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'If anyone has any questions how do they contact you?',
    name: 'questions',
  },
])

.then((response) =>{
  const filename = generateMarkdown(response);

// function to write README file
//function writeToFile(fileName, data) {
//}

fs.writeFile("sampleReadme.md", filename, (err) => err ? console.log(err) : console.log('TaDaah! And it is done!'));
});

/*const makeReadme = (response)=> {
  return(
    `# Project Title ${response.title}
    ## Motivation
    {response.motivation}
    ## Description
    {response.description}
    
    `)
};
*/


// function to initialize program
function init() {

}

// function call to initialize program
init();
