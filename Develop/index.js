// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdownFile = require('./utils/generateMarkdown.js') 
const questions = require("./utils/questions.js")


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdownFile(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // Use writeFile method imported from fs.promises to use promises instead of a callback function
    .then((data) => writeToFile('createdREADME.md', data))
    .then(() => console.log('Successfully created README file.'))
    .catch((err) => console.error("There was an error.",err));
}

// Function call to initialize app
init();


