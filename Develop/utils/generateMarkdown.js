// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(License) {
  switch (License) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Eclipse PL 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  switch (License) {
    case 'MIT License':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return '[GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Eclipse PL 1.0':
      return '[Eclipse Public License 1.0](https://www.eclipse.org/org/documents/epl-v10.php)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  switch (License) {
    case 'MIT License':
      return `This project is licensed under the [MIT License](${renderLicenseLink(License)}).`;
    case 'GNU GPL v3':
      return `This project is licensed under the [GNU GPL v3 License](${renderLicenseLink(License)}).`;
    case 'Eclipse PL 1.0':
      return `This project is licensed under the [Eclipse Public License 1.0](${renderLicenseLink(License)}).`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## License
${renderLicenseBadge(data.License)}
${renderLicenseSection(data.License)}
`;
}

module.exports = generateMarkdown;
