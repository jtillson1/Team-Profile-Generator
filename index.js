const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
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
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter their name, please.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the manager's Id",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter the manager's Id, please.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the manager's email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email, please.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter the managers phone number",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Entera valid phone number, please.";
                }
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
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter the engineer's name, please";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the engineer's Id",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArr.includes(answer)) {
                            return "The Id you entered is already in use. Please enter a new one.";
                        } else {
                            return true;
                        }

                    }
                    return "Enter a number greater than zero, pleaase";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the engineer's email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address, please";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter the engineer's github username",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter the engineer's github username, please";
                }
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
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter the interns name, please";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Enter the intern's Id",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArr.includes(answer)) {
                            return "The Id you entered is already in use. Please enter a new one.";
                        } else {
                            return true;
                        }

                    }
                    return "Enter a number greater than zero, please";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the intern's email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address, please";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the intern's school",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter the intern's school, please";
                }
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

    // function to generate index
    const writeFile = data => {
        fs.writeFile('./dist/index.html', data,
            err => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log('Your team profile has been successfully created.')
                }
            })
    };
    //   function buildTeam() {
    //       if (!fs.existsSync(OUTPUT_DIR)) {
    //           fs.mkdirSync(OUTPUT_DIR)
    //       }
    //       fs.writeFileSync(outputPath, render(employeeTeam), "utf-8");
    //   }

    newManager();
}

menu();