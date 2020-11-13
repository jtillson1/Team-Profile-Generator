const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const render = require("./src/page-template.js");

const employeeTeam = [];
const idArr = [];
let holdEmployeeData = "";
function menu() {

    function newManager() {
        console.log("start creating your team");
        console.log("this is how to test")
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the Manager's name",
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the manager's Id",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the manager's email",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter the managers phone number",
            }
        ]).then(answers => {
            console.log(answers)
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            employeeTeam.push(manager);
            idArr.push(answers.managerId);
            newTeam();
        });
    }

    function newTeam() {

        inquirer.prompt([
            {

                type: "list",
                name: "memberType",
                message: "Choose the type of team member are you adding",
                choices: [
                    "Engineer",
                    "Intern",
                    "I'm not adding any more team members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberType) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    renderHTML();
                    writeFile(holdEmployeeData);
            }
        });

    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the engineer's name",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the engineer's Id",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the engineer's email",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter the engineer's github username",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeeTeam.push(engineer);
            idArr.push(answers.engineerId);
            newTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter the intern's name",
            },
            {
                type: "input",
                name: "internId",
                message: "Enter the intern's Id",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the intern's email",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the intern's school",
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeeTeam.push(intern);
            idArr.push(answers.internId);
            newTeam();
        });
    }
    function renderHTML() {
        holdEmployeeData = render(employeeTeam);
    }


    const writeFile = data => {
        fs.writeFile('./dist/index.html', data,
            err => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log('Team profile generated!')
                }
            })
    };
    newManager();
}
menu();