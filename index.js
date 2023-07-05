const { Format, Circle, Triangle, Square } = require('./shapes');
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
  {
    type: 'input',
    message: 'Enter the text-color for the logo:',
    name: 'textColor',
  }
];


// Create a function to generate the SVG logo markup based on the selected shape
function generateLogo(color, text, shape, textColor) {
  let logo;

  if (shape === 'circle') {
    logo = new Circle(color, text, textColor);
  } else if (shape === 'triangle') {
    logo = new Triangle(color, text, textColor);
  } else if (shape === 'square') {
    logo = new Square(color, text, textColor);
  }

  if (logo) {
    return logo.generate();
  }

  return '';
}




// Create a function to write the SVG logo file and open it in a browser
function writeLogoToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`SVG logo file "${fileName}" has been created.`);

      // Open the SVG file in a web browser
      const { exec } = require('child_process');
      const os = require('os');
      const platform = os.platform();
      
      if (platform === 'darwin') {
        exec(`open -a "Safari" ${fileName}`);
      } else if (platform === 'win32') {
        exec(`start microsoft-edge:${fileName}`);
      } else if (platform === 'linux') {
        exec(`xdg-open ${fileName}`);
      }
    }
  });
}




function init() {
  inquirer.prompt(questions).then((answers) => {
    const { color, text, shape, textColor } = answers;
    const logoContent = generateLogo(color, text, shape, textColor);
    writeLogoToFile('logo.svg', logoContent);
  });
}

// Call the initialize app function
init();
