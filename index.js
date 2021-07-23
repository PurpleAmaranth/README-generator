// Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require ("path");

// Create an array of questions for user input
const questions = [
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
        usage
    },
    {
        installation
    },
    {
        test
    },
    {
        contributing
    },
    {
        type: "input",
        name: "github",
        message: "Input GitHub Username:"
    },
    {
        email
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
