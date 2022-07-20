function generateCards(teamInfo) {
    const a = teamInfo[0].name;
    console.log(a);
}

function generateHtml(data) {
    const dataH = data.map(member => {
        if (member.getRole() === 'Manager') {
            return member.getOffice();
        } else if (member.getRole() === 'Engineer') {
            return member.getGithub()
        } else if (member.getRole() === 'Intern') {
            return member.getSchool()
        }
    })
    console.log(dataH);

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
        ${dataH}
    </main>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>
</html>`;

}

module.exports = generateHtml;

// generateCards();