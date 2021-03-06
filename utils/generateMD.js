// YEAR FOR COPYRIGHTING DATA
let year = new Date().getFullYear();

// GENERATE MARKDOWN
// ADD SCREENSHOTS
function generateMD(data) {   
    // README:
    return `# ${data.uproj} #

## Repository ##

${data.urepo}

## Screenshots ##

<img src="${data.usshots}">

## Table of Contents ##

* [Description](#Description-)
* [Installation](#Installation-)
* [Usage](#Usage-)
* [Tech](#Tech-)
* [Testing](#Testing-)
* [Contribution](#Contribution-)
* [Licensing](#Licensing-)
* [Contact](#Contact-)

## Description π ##

${data.udescript}

## Installation π  ##

${data.uinstall}

## Usage π» ##

${data.uuse}

## Tech π₯ ##

${data.utech}

## Testing π§· ##

${data.utest}

## Contribution π€ ##

${data.ucontrib}

## Licensing π§Ύ ##

[![license](https://img.shields.io/badge/license${data.uli}-hotpink)](https://shields.io)

Copyright &copy; ${year}

## Contact π¨ ##
### For Questions: ###

${data.ualias}: (https://github.com/${data.ualias})

${data.uemail}


This README was generated with πΌπΏπ· and π€ by ${data.uname}.`;
}

// GENERATE THAT MARKDOWN
module.exports = generateMD;
