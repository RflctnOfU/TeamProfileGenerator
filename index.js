// INDEX.JS //
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')
const generateHtml = require('./src/generateHtml')

// Array to push team member data
const teamMembers = [];
// initializing function on app loading
function init() {

    function createManager() {
        // getting information about manager
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the manager's name."
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the employee id."
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the employee email address."
                },
                {
                    type: 'input',
                    name: 'office',
                    message: "Please enter the office number."
                }
            ])
            .then((answers) => {
                // taking answers and creating a new instance of manager from the manager class
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
                // push new manager to team array
                teamMembers.push(manager);
                // go to create team function
                createTeam();
            })
    }
    //choose type of employee to add
    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'Which type of employee would you like to add to your team?',
                    choices: ['Engineer', 'Intern', 'Finish']
                }
            ])

            .then((answers) => {
                // conditional that goes to employee type function
                if (answers.type === 'Engineer') {

                    addEngineer();

                } else if (answers.type === 'Intern') {

                    addIntern();

                } else if (answers.type === 'Finish') {

                    buildTeam();

                }

            })
    }
    //engineer data function
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the employee's name."
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the employee id.'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the employee email address.'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Please enter the employee's GitHub username."
                }
            ])
            .then((answers) => {
                // create new instance of engineer
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                //push data to team array
                teamMembers.push(engineer);
                //go back to employee type selection
                createTeam();
            })

    }
    //intern data function
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the employee's name."
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the employee id.'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the employee email address.'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Please enter the employee's school."
                }
            ])
            .then((answers) => {
                //create new instance of intern
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamMembers.push(intern);
                //go back to employee type selection
                createTeam();
            })
    }

    //creates html file and calls the render function passing in team array data
    function buildTeam() {
        fs.writeFile('./dist/index.html', generateHtml(teamMembers), (err) => err ? console.error(err) : console.log('You have successfully created your roster!'));
    }
    //starts the inquiry about team members
    createManager();
}
// calls the initialization function
init();
