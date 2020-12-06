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
        message: "Please list any licences for open source that you used:",
        name: "license",
    }, {
        type: "input",
        message: "What is the link to your GitHub Repo?",
        name: "gitHubRepo",
    }, {
        type: "input",
        message: "What is your email?",
        name: "email",
    }])

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
