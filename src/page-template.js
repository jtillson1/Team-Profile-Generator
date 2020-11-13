// create the team
const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card employeeCard">
        <div class="cardHeader">
            <h2 class="cardTitle">${manager.getName()}</h2>
            <h3 class="cardTitle">${manager.getRole()}</h3>
        </div>
        <div class="cardBody">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
            </ul>
        </div>
    </div>
        `;
    };
    const generateEngineer = engineer => {
        return `
        <div class="card employeeCard">
    <div class="cardHeader">
        <h2 class="cardTitle">${engineer.getName()}</h2>
        <h3 class="cardTitle">
    <div class="cardBody">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };
    const generateIntern = intern => {
        return `
        <div class="card employeeCard">
    <div class="cardHeader">
        <h2 class="cardTitle">${intern.getName()}</h2>
        <h3 class="cardTitle">${intern.getRole()}</h3>
    </div>
    <div class="cardBody">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Employee Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 header">
                <h1 class="text-center">The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="teambox col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
