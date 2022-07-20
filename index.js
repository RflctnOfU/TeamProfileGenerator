// INDEX.JS //
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')
const generateHtml = require('./src/generateHtml')

// require all of your classes/constructors, (Manager, Engineer, Intern)
// require packages needed (inquirer, path, fs)

// set up an empty array for the Team Members
const teamMembers = [];
// set up functions for iniitalizing the app, creating a manager, determining which type of employee the user wants to add, adding each member type, and building the team

// function for INITIALIZING ////////////////
function init() {
    // first thing you'll probably want to do is add a function for creating a manager, since that's the first thing you have to do
    // function for CREATING A MANAGER ///////////////
    function createManager() {
        // use inquirer
        // and prompt to ask questions
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
            // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
            .then((answers) => {
                // let name = answers.name
                // let id = answers.id
                // let email = answers.email
                // let office = answers.office

                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);

                //send your answers here

                // then you will need to push this new manager to the empty team array you set up above
                teamMembers.push(manager);
                // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
                // console.log(teamMembers)
                createTeam();
            })
    }

    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
        // use inquirer
        // and prompt to ask questions - such as what type of employee they would like to add
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'Which type of employee would you like to add to your team?',
                    choices: ['Engineer', 'Intern', 'Finish']
                }
            ])
            // then, based on their choice, run the function associated with adding that employee type
            .then((answers) => {
                // conditional that runs function for employee type that the user selected
                if (answers.type === 'Engineer') {
                    addEngineer();
                    // console.log(answers.type);
                } else if (answers.type === 'Intern') {
                    addIntern();
                    // console.log(answers.type);
                } else if (answers.type === 'Finish') {
                    buildTeam();
                }
                // if they choose Intern, run addIntern function
                // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
            })
    }

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
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamMembers.push(engineer);
                // console.log(teamMembers);
                createTeam();
            })

    }
    // function for ADDING A MEMBER /////////////////
    // a seperate function for each member type
    function addIntern() {
        // use inquirer
        // and prompt to ask questions
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
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamMembers.push(intern);
                // console.log(teamMembers);
                createTeam();
            })

        // take the answers, create a new instance of Intern, and add those answers to that new Intern
        // push this new member into you team array
    }

    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
        // creating the file, adding your team to it
        // function writeToFile(fileName, data) {
        fs.writeFile('./dist/index.html', generateHtml(teamMembers), (err) => err ? console.error(err) : console.log(teamMembers));
        // generateHtml(teamMembers);
        // }
        // writeToFile('index.html', generateHtml(teamMembers));
        // generate = generateHtml()
        // fs.writeFile('index.html', generate, (err) => err ? console.error(err) : console.log('index.html has been successfully created!'));
        // probably call a function, passing in your team members array - send it to another js file 
    }

    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked

    createManager();
}

init();
// generateHtml();