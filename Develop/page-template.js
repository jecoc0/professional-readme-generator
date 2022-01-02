module.exports = templateData => { 
  const { title, description, tableOfContents, installation, usage, license, contributers, name, github, email } = templateData 

    return `

# ${title}

## Description 

${description}


## Table of Contents (Optional)
${tableOfContents}

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Contributers](#contributers)
* [License](#license)


## Installation

${installation}


## Usage 

${usage}


## Contributers

${contributers}


## Questions?

${name}

[Find me on GitHub] (https://github.com/${github})

Reach out to me via email at <${email}>


## License

${license}

    `;
  };
