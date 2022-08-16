const inquirer = require(inquirer);
const sequelize = require('./config/connection');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action'
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        },
    ])
    .then((answers) => {
        switch (answers.action) {
            case 'View All Employees':
                //do something
                break;
            case 'Add Employee':
                //do something
                break;
            case 'Update Employee Role':
                //do something
                break;
            case 'View All Roles':
                //do something
                break;
            case 'Add Role':
                //do something
                break;
            case 'View All Departments':
                //do something
                break;
            case 'Add Department':
                //do something
                break;
            case 'Quit':
                //do something
                break;
        }
    })
    .catch((err) => {

    });