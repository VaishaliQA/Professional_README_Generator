//Create a function that returns a license details based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseOption = `${data.license}`;
  let licenseLink = '';
  //if conditional to give the license the correct link
  if(licenseOption === 'GNU AGPLv3') {
    licenseOption = 'GNUAGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if(licenseOption === 'GNU GPLv3') {
    licenseOption = 'GNUGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if(licenseOption === 'GNU LGPLv3') {
    licenseOption = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseOption = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseOption === 'Apache License 2.0') {
    licenseOption = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOption === 'Boost Software License 1.0') {
    licenseOption = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseOption === 'The Unlicense') {
    licenseOption = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };
  return [licenseOption, licenseLink];
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // Get License details
  var licenseDetails  = renderLicenseBadge(data)
  return `# ${data.projecttitle}
  ## Description:
  ${data.description}

  ## Licensing:
  ![license](https://img.shields.io/badge/license-${licenseDetails[0]}-brightorange) <br>
  You can access more badges and their purposes at [shields.io](https://shields.io)

  ## Deployed Link
  A deployed version can be viewed here. <br>
  ${data.deploymenturl}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  - [License](#license)
    
  ## Installation:
  Follow these steps to properly install this application: <br>
  ${data.installation} <br>
    To clone the repo: <br>
       git clone ${data.gitclonerepolink}

  ## Usage:
  Instructions for use: <br>
  ${data.usage}
   
  ## Contribution:
  If you would like to contribute, please adhere to these guidelines: <br>
  ${data.contribution}

  ## Testing:
  Instructions for testing application: <br>
  ${data.testing}

  ## Additional Info:
  For additional details: <br>
  - Github Username: [${data.githubusername}](https://github.com/${data.githubrepourl})
  - Github Email: ${data.githubemail}

  ## License:
  License used for this project - ${data.license} <br>
  For more information on license types, please reference this website. <br>
  ${licenseDetails[1]}`
}

module.exports = generateMarkdown;

