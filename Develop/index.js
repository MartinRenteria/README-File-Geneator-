const inquirer = require("inquirer");
const fs = require ("fs");

inquirer
    .prompt([{

        type: "input", 
        message: "Please put the name of your project",
        name: "projectName",
    }, {
        type: "input",
        message: "Please make a description for the project",
        name: "description",
    }, {
        type: "input",
        message: "Please give instructions for installation:",
        name: "installation",
    }, {
        type: "input",
        message: "Please give examples of usage for your project:",
        name: "usage",
    }, {
        type: "input",
        message: "What tests did you run to make sure this is working properly?",
        name: "tests",
    }, {
        type: "input",
        message: "Please say if you are open to contributions and give requirements for acceptance criteria:",
        name: "contributions",
    }, {
        type: "input",
        message: "Please list any licenses you wish to use for your project:",
        name: "license",
    }, {
        type: "input",
        message: "What is the link to your GitHub Repo?",
        name: "gitHub",
    }, {
        type: "input",
        message: "What is your e-mail?",
        name: "email",
    }, {
        type: "input",
        message: "What is the link to your Linkedin?",
        name: "linkedin",
        
    }])
    .then(response => {
        console.log(response.projectName);
        console.log(response.description);
        console.log(response.installation);
        console.log(response.usage);
        console.log(response.tests);
        console.log(response.contributions);
        console.log(response.license);
        console.log(response.email);
        console.log(response.gitHub);
        console.log(response.linkedin);

        let readMePageTitle = `# **${response.projectName}**

    ## **Table of Contents**
- [**Description**](#description)
- [**Installation Instructions**](#installation-instructions)
- [**Usage**](#usage)
- [**Tests**](#tests)
- [**Contributions**](#contributions)
- [**Licenses**](#licenses)
- [**Questions**](#questions)
## **Description**
${response.description}
## **Installation Instructions**
${response.installation}
## **Usage**
${response.usage}
## **Tests**
${response.tests}
## **Contributions**
${response.contributions}
## **Licenses**
${response.license}
## **Questions**
Please contact <${response.email}> if you have any questions or view my github (${response.gitHub}) and/or Linkedin (${response.linkedin})`

        fs.writeFile("readme.md", readMePageTitle, (err) => {
            if (err) console.log("Unable to write file");
            else console.log("Writing file successful");
        })
    });