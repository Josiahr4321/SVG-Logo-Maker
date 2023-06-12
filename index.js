// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [{
    type: 'input',
    message: 'What text are you inputing (up to 3 characters)?',
    name: 'text',
  },
  {
    type: 'input',
    message: 'What color would you like your text to be?',
    name: 'text-color',
  },
  {
    type: 'input',
    message: 'Would you like to create a circle,triangle,or square?',
    name: 'shape',
  
    }];

   // Function to write SVG file
   function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
  
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`SVG file "${fileName}" has been created.`);
      }
    });
  }



