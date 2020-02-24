# READ.ME-generator
a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
node index.js
![](Readme.gif)
The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.
The README will be populated with the following:

At least one badge
Project title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

User GitHub profile picture
User GitHub email



Following the common templates for user stories, we can frame this challenge as follows:
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
Refer to the Good README guide.

Business Context
When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

This application meets following requirements:


Functional, deployed application.


GitHub repository with a unique name and a README describing project.


The generated README includes a bio image from the user's GitHub profile.


The generated README includes the user's email.


The generated README includes the following sections:

Title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions



GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
