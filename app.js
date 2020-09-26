const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// Prompt for employee role
function employeeType() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of team member would you like to add? (Use arrow keys",
            name: "name",
            choices: ["Manager", "Engineer", "Intern", "None"],
        },
    ]).then(val => {
        if (val.name === "Manager") {
            managerInfo();
        } else if (val.name === "Engineer") {
            engineerInfo()
        } else if (val.name === "Intern") {
            internInfo();
        } else if (val.name === "None") {
            generateHTML(outPath, render(team));
        };
    });
};

//Prompt for manager info
function managerInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "number",
        },
    ]) .then(function(answer) {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.number)
        team.push(manager);

        employeeType()
    })
};

//Prompt for engineer's info
function engineerInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "Github",
        },
    ]) .then(function(answer) {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.Github)
        team.push(engineer);

        employeeType()
    })
};

//Prompt for Intern info
function internInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school",
        },
    ]) .then(function(answer) {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        team.push(intern);

        employeeType()
    })
};

//write to a README file
// function generateHTML(fileName, data) {
//     fs.writeFile(fileName, data, "utf8", function (err) {
//         if (err) {
//             throw err;
//         }
//         console.log("You have successfully saved your Employee Summary");
//     });
// };

//Function to begin the prompts
managerInfo();
