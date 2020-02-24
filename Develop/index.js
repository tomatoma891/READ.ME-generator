const fs = require("fs");
const inquirer = require("inquirer");
const api = require('./utils/api');


inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"

        },
        {
            type: "input",
            name: "description",
            message: "Please proive a brief description of your project"

        },
        {
            type: "list",
            name: "Table of contents",
            message: "What is your table of contents",
            choices: [
                "installation",
                "usage",
                "credits",
                "license",
            ]

        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. Include screenshots as needed."
        },
        {
            type: "input",
            name: "license",
            message: "The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/"

        },
        {
            type: "input",
            name: "contributing",
            message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own."

        },
        {
            type: "input",
            name: "tests",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them."
        },
        {
            type: "input",
            name: "badges",
            message: "Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io."

        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        },

    ]).then(function (responses) {
        console.log(responses);
        username = responses.username;
        api.getUser(username).then(function (res) {
            //this is the whole user object
            console.log(res.data[0].payload.commits[0].author.email);
            const userEmail = res.data[0].payload.commits[0].author.email;
            const userProfile = res.data[0].actor.avatar_url;

            // const userEmailStr = userEmail.join("\n");

            let title = responses.title;
            let description = responses.description;
            let installation = responses.installation;
            let usage = responses.usage;
            let license = responses.license;
            let contributing = responses.contributing;
            let tests = responses.tests;
            let badges = responses.badges;
            let answers = title + "\n" + description + "\n" + installation + "\n" + usage + "\n" + license + "\n" + contributing + "\n" + tests + "\n" + badges + "\n" + userEmail + "\n" + "![](" + userProfile + ")";


            fs.writeFile("readMe.md", answers, () => { });



        })


    })



