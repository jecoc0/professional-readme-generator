// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const templateData = require('./page-template');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the title of your project')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please provide description information for your project')
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like to create a Table of Contents?',
      default: false
    },
    {
      type: 'checkbox',
      name: 'tableOfContents',
      message: 'Which items would you like to include in your Table of Contents?',
      choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'Contributing', 'Tests'],
      when: ({confirmTableOfContents}) => confirmTableOfContents
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your program?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should this program be used? (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide information about how your program should be used!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does this program fall under?',
      choices: ['Apache 2.0', 'GNU GPLv3', 'ISC', 'MIT', 'Other']
    },
    {
      type: 'input',
      name: 'features',
      message: 'Please list any featuers you would like to include in the ReadME'
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'Please list any contributers who should be credited',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please include examples of how to run any tests included within your code.'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please provide your name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name? (Required)',
      validate: gitHubInput => {
        if (gitHubInput) {
          return true;
        } else {
          console.log('Please provide your GitHub user name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please provide your email address');
          return false;
        }
      }
    }
    
  ]);
}
// TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./newREADME.md`, fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'New README file created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then(readMeData => {
    const newReadMePage = templateData(readMeData);
    writeFile(newReadMePage)
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  })

}

// Function call to initialize app
init();

