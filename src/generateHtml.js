function generateCards(teamInfo) {
    // const arr = [];

    // const roles = teamInfo.map(member => {
    //     arr.push(member.getRole());

    // })
    // const name = teamInfo.map(member => {
    //     arr.push(member.getName());
    // })
    // const id = teamInfo.map(member => {
    //     arr.push(member.getId());
    // })
    // const email = teamInfo.map(member => {
    //     arr.push(member.getEmail());
    // })
    // const offGitSch = teamInfo.map(member => {
    //     if (member.getRole() === 'Manager') {
    //         // return `Office Number: ${member.getOffice()}`
    //         arr.push(getOffice());
    //     } else if (member.getRole() === 'Engineer') {
    //         arr.push(member.getGithub());
    //         // return `GitHub: <a href="https://github.com/${member.getGithub()} target="_blank">${member.getGithub()}</a>`
    //     } else if (member.getRole() === 'Intern') {
    //         arr.push(member.getSchool());
    //         // return `School: ${member.getSchool()}`
    //     }
    // })
    // console.log(teamInfo);
    const createManager = (manager) => {
        // console.log(manager);
        return `<div class="col-4">
            <div class="card shadow m-2">
                <div class="card-body bg-primary text-white rounded-lg">
                  <h2 class="card-title">${manager.getName()}</h5>
                  <i class="fa-solid fa-mug-hot fa-xl mr-3"></i><h4 class="card-text d-inline-flex">${manager.getRole()}</h4>
                </div>
                <ul class="list-group bg-light">
                  <li class="shadow-sm border list-group-item mt-4 mb-1 ml-4 mr-4">ID: ${manager.getId()} </li>
                  <li class="shadow-sm border list-group-item mt-1 mb-1 ml-4 mr-4">email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="shadow-sm border list-group-item mt-1 mb-4 ml-4 mr-4">Office Number: ${manager.getOffice()}</li>
                </ul>
              </div>
        </div>`;
    }
    const createEngineer = (engineer) => {

        return `<div class="col-4">
            <div class="card shadow m-2">
                <div class="card-body bg-primary text-white rounded-lg">
                  <h2 class="card-title">${engineer.getName()}</h5>
                  <i class="fa-solid fa-glasses fa-xl mr-3"></i><h4 class="card-text d-inline-flex">${engineer.getRole()}</h4>
                </div>
                <ul class="list-group bg-light">
                  <li class="shadow-sm border list-group-item mt-4 mb-1 ml-4 mr-4">ID: ${engineer.getId()} </li>
                  <li class="shadow-sm border list-group-item mt-1 mb-1 ml-4 mr-4">email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="shadow-sm border list-group-item mt-1 mb-4 ml-4 mr-4">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
              </div>
        </div>`;
    }
    const createIntern = (intern) => {
        console.log(intern);
        return `<div class="col-4">
            <div class="card shadow m-2">
                <div class="card-body bg-primary text-white rounded-lg">
                  <h2 class="card-title">${intern.getName()}</h5>
                  <i class="fa-solid fa-user-graduate fa-xl mr-3"></i><h4 class="card-text d-inline-flex">${intern.getRole()}</h4>
                </div>
                <ul class="list-group bg-light">
                  <li class="shadow-sm border list-group-item mt-4 mb-1 ml-4 mr-4">ID: ${intern.getId()} </li>
                  <li class="shadow-sm border list-group-item mt-1 mb-1 ml-4 mr-4">email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="shadow-sm border list-group-item mt-1 mb-4 ml-4 mr-4">School: ${intern.getSchool()}</li>
                </ul>
              </div>
        </div>`;
    }

    const html = []

    for (const element of teamInfo) {
        // console.log(element.getRole());
        if (element.getRole() === 'Manager') {
            // console.log(element);
            html.push(createManager(element));
        } else if (element.getRole() === 'Engineer') {
            // console.log('Engineer');
            html.push(createEngineer(element));
        } else if (element.getRole() === 'Intern') {
            // console.log('Intern');
            html.push(createIntern(element));
        }
    }

    return html.join('');
    // for (let i = 0; i < teamInfo.length; i++) {
    //     if (teamInfo.map(member => {
    //         member.getRole()
    //     }) === 'Manager') {
    //         console.log("Manager");
    //         // createManager(teamInfo);
    //     } else if (teamInfo.map(member => {
    //         member.getRole()
    //     }) === 'Engineer') {
    //         console.log("Engineer");
    //         // createEngineer(teamInfo);
    //     } else if (teamInfo.map(member => {
    //         member.getRole()
    //     }) === 'Intern') {
    //         console.log("Intern");
    //         // createIntern(teamInfo);
    //     }
    // }

}

function generateHtml(data) {
    // console.log(data);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <title>My Team</title>
</head>
<body>
    <header class="jumbotron jumbotron-fluid bg-danger text-white">
        <h1 class="text-center">My Team</h1>
    </header>
    <main>
        <div class="container" style="width: 65%">
            <div class="row d-flex justify-content-center">
                ${generateCards(data)}
            </div>
        </div>
    </main>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>
</html>`;

}

module.exports = generateHtml;

// generateCards();