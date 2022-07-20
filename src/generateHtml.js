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
            return '<i class="fa-solid fa-mug-hot fa-xl mr-3"></i>';
        } else if (member.getRole() === 'Engineer') {
            return '<i class="fa-solid fa-glasses fa-xl mr-3"></i>';
        } else if (member.getRole() === 'Intern') {
            return '<i class="fa-solid fa-user-graduate fa-xl mr-3"></i>';
        }
    })

    for (let i = 0; i < teamInfo.length; i++) {
        `<div class="col-3">
        <div class="card shadow">
            <div class="card-body bg-primary text-white rounded-lg">
              <h2 class="card-title">${name[i]}</h5>
                ${getIcon[i]}<h4 class="card-text d-inline-flex">${roles[i]}</h4>
            </div>
            <ul class="list-group bg-light">
              <li class="shadow-sm border list-group-item mt-4 mb-1 ml-4 mr-4">ID: ${id[i]} </li>
              <li class="shadow-sm border list-group-item mt-1 mb-1 ml-4 mr-4">email: <a href="mailto:${email[i]}">${email[i]}</a></li>
              <li class="shadow-sm border list-group-item mt-1 mb-4 ml-4 mr-4">${offGitSch[i]}</li>
            </ul>
          </div>
    </div>`
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