// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## ${data.title}
  
  ## Description

  ${data.description}
  
  ## Table of Contents 
  
  * [Usage](#usage)

  * [License](#license)

  * [Installation](#installation)

  * [Tests](#tests)
 
  * [Contributing](#contributing)
  
  * [Contact](#contact)
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Installation
  
  Installation command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Tests
  
  Test command:
  
  \`\`\`
  ${data.test}
  \`\`\`
    
  ## Contributing
  
  ${data.contributing}
  
  ## Contact
  
  \`\`\`
  Main point of contact:
  
  [${data.github}](https://github.com/${data.github}/)
  * email: ${data.email}
  * website: ${data.website}
  \`\`\`

  `;
}

module.exports = generateMarkdown;
