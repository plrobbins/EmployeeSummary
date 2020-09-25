const Employee = require("../libEmployee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getHithub() {
        return(this.github);
    };
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;