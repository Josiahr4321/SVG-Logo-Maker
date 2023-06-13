const { Format, Circle, Triangle, Square } = require('./utils/shapes');
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the color for the logo:',
    name: 'color',
  },
  {
    type: 'input',
    message: 'Enter the text for the logo:',
    name: 'text',
  },
  {
    type: 'list',
    message: 'Select the shape for the logo:',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
  },
];

// Create a function to generate the SVG logo markup based on the selected shape
function generateLogo(color, text, shape) {
  let logo;

  if (shape === 'circle') {
    logo = new Circle(color, text);
  } else if (shape === 'triangle') {
    logo = new Triangle(color, text);
  } else if (shape === 'square') {
    logo = new Square(color, text);
  }

  if (logo) {
    return logo.generate();
  }

  return '';
}

// Create a function to write the SVG logo file
function writeLogoToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`SVG logo file "${fileName}" has been created.`);
    }
  });
}

// Create a function to initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { color, text, shape } = answers;
    const logoContent = generateLogo(color, text, shape);
    writeLogoToFile('logo.svg', logoContent);
  });
}

// Call the initialize app function
init();
