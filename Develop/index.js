// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ('fs');
const generateMarkdown = require ("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                message: 'What is the title for this application?',
                name: 'Title',
            },
            {
                type: 'input',
                message: 'What is the description for this application?',
                name: 'Description',
            },
            {
                type: 'input',
                message: 'What are the installation instructions for this application?',
                name: 'Installation',
            },
            {
                type: 'input',
                message: 'What is the usage information for this application?',
                name: 'Usage',
            },
            {
                type: 'input',
                message: 'What are the contribution guidelines for this application?',
                name: 'Contributing',
            },
            {
                type: 'input',
                message: 'What is the testing instructions for this application?',
                name: 'Tests',
            },
            {
                type: 'list',
                message: 'What license would you like for your application',
                name: 'License',
                choices: ['MIT License', 'GNU GPL v3', 'Eclipse PL 1.0'],
            },
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init()
 {inquirer
    .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        // console.log(generateMarkdown(answers))
        writeToFile('README.md', generateMarkdown(answers))
      });
 }
 

// Function call to initialize app
init();
