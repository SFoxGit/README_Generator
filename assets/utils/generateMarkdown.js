// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'CC0 (Creative Commons Zero)') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  };
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };
  if (license == 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'CC0 (Creative Commons Zero)') {
    return 'https://creativecommons.org/publicdomain/zero/1.0/'
  };
  if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  };
  if (license == 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  };
  if (license == 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license) {
  return licenseBadge, licenseLink
} else {
  return ''
} 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseLink = renderLicenseLink(data.license);
  // renderLicenseSection(data.license);
  return `# ${data.title}


  ${licenseBadge}
  
  ---
  ## Author
  
  ${data.name}
  
  
  | [GitHub](https://github.com/${data.gitName}) | [Email](${data.email}) |
  
  ---
  ## Project Links:
  
  - Deployed site: [GitHub Pages](https://${data.gitName}.github.io/${data.gitRepo}/)
  - GitHub: [${data.gitName}](https://github.com/${data.gitName}/${data.gitRepo})
  
  ---
  ## Table of Contents
  
  - [Description](##Description)
  
  - [Installation](##Installation)
  
  - [Usage](##Usage)
  
  - [Tests](##Tests)
  
  - [Questions](##Questions)
  
  - [License](##License)
  
  - [Contributions](##Contributing)
  
  - [Credits](##Credits)
  
  ---
  ## Description
  
  ${data.description}
  
  ---
  ## Installation
  
  ${data.install}
  
  ---
  ## Usage
  
  ${data.usage}
  
  ---
  ## Tests
  
  ${data.tests}
  
  ---
  ## Questions
  
  If you have any questions or concerns please contact me at ${data.email} or any of my contact information above. [Back to Author](##Author)
  
  ---
  ## License
  
  ${licenseLink}
  
  ---
  ## Contributing
  
  ${data.contribute}
  
  If you'd like to contribute, please contact me.
  
  ---
  ## Credits
  
  ${data.credits}
  

`;
}

module.exports = generateMarkdown;
