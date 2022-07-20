global.document = new JSDOM(html).window.document;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function generateCards(teamInfo) {
    const roles = teamInfo.map(member => {
        return member.getRole();
    })
    const name = teamInfo.map(member => {
        return member.name;
    })
    const id = teamInfo.map(member => {
        return member.id;
    })
    const email = teamInfo.map(member => {
        return member.email;
    })
    const offGitSch = teamInfo.map(member => {
        if (member.getRole() === 'Manager') {
            return `Office Number: ${member.getOffice()}`
        } else if (member.getRole() === 'Engineer') {
            return `GitHub: <a href="https://github.com/${member.getGithub()} target="_blank">${member.getGithub()}</a>`
        } else if (member.getRole() === 'Intern') {
            return `School: ${member.getSchool()}`
        }
    })

    const getIcon = teamInfo.map(member => {
        if (member.getRole() === 'Manager') {
            return `'fa-solid', 'fa-mug-hot', 'fa-xl', 'mr-3'`;
        } else if (member.getRole() === 'Engineer') {
            return `'fa-solid', 'fa-glasses', 'fa-xl', 'mr-3'`;
        } else if (member.getRole() === 'Intern') {
            return `'fa-solid', 'fa-user-graduate', 'fa-xl', 'mr-3'`;
        }
    })

    for (let i = 0; i < teamInfo.length; i++) {
        //   return  `<div class="col-3">
        //     <div class="card shadow">
        //         <div class="card-body bg-primary text-white rounded-lg">
        //           <h2 class="card-title">${name[i]}</h5>
        //             ${getIcon[i]}<h4 class="card-text d-inline-flex">${roles[i]}</h4>
        //         </div>
        //         <ul class="list-group bg-light">
        //           <li class="shadow-sm border list-group-item mt-4 mb-1 ml-4 mr-4">ID: ${id[i]} </li>
        //           <li class="shadow-sm border list-group-item mt-1 mb-1 ml-4 mr-4">email: <a href="mailto:${email[i]}">${email[i]}</a></li>
        //           <li class="shadow-sm border list-group-item mt-1 mb-4 ml-4 mr-4">${offGitSch[i]}</li>
        //         </ul>
        //       </div>
        // </div>`
        const cardDiv = document.createElement('div');
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('h2');
        const cardIcon = document.createElement('i');
        const cardType = document.createElement('h4');
        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        // const aEmail = document.createElement('a');
        const li3 = document.createElement('li');

        cardDiv.classList.add('col-3');
        card.classList.add('card', 'shadow');
        cardBody.classList.add('card-body', 'bg-primary', 'text-white', 'rounded-lg');
        cardTitle.classList.add('card-title');
        cardIcon.classList.add(`${getIcon[i]}`);
        cardType.classList.add('card-text', 'd-inline-flex');
        ul.classList.add('list-group', 'bg-light');
        li1.classList.add('shadow-sm', 'border', 'list-group-item', 'mt-4', 'mb-1', 'ml-4', 'mr-4');
        li2.classList.add('shadow-sm', 'border', 'list-group-item', 'mt-1', 'mb-1', 'ml-4', 'mr-4');
        li3.classList.add('shadow-sm', 'border', 'list-group-item', 'mt-1', 'mb-4', 'ml-4', 'mr-4');

        cardTitle.innerText = name[i];
        cardType.innerText = roles[i];
        li1.innerText = `ID: ${id[i]}`
        li2.innerText = `email: <a href="mailto: ${email[i]}">${email[i]}</a>`
        li3.innerText = offGitSch[i];

        ul.append(li1, li2, li3);
        cardBody.append(cardTitle, cardIcon, cardType);
        card.append(cardBody, ul);
        cardDiv.append(card);

    }

}

function generateHtml(data) {


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
        <div class="container">
            <div class="row d-flex justify-content-around">
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