// Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require ("path");

// Create an array of questions for user input
const input = [
    {
        type: "input",
        name: "title",
        message: "Input Project Title:"
    },
    {
        type: "input",
        name: "description",
        message: "Input Project Description:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose License Type:",
        choices: ["MIT", "LGPL 3.0", "MPL 2.0", "AGPL 3.0", "Unilicense", "Apache 2.0", "GPL 3.0", "None"]
    },
    {
        type: "input",
        name: "usage",
        message: "Input Usage Guidance Instructions:"
    },
    {
        type: "input",
        name: "installation",
        message: "Input Installation Command:",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "Input Test Command",
        default: "npm test"
    },
    {
        type: "input",
        name: "contributing",
        message: "Input Contribution Guidelines:"
    },
    {
        type: "input",
        name: "github",
        message: "Input GitHub Username:"
    },
    {
        type: "input",
        name: "email",
        message: "Input Contact Email:"
    },
    {
        type: "input",
        name: "website",
        message: "Input Project Website:"
    }
];

// Create a function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(input).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
