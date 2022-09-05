//Questions for user input
const questions = [{
        type: 'input',
        name: 'projecttitle',
        message: '*What is the title of your project?',
        validate: projecttitle =>{
          if(projecttitle){
            return true;
          }
          else{
            console.log('\x1b[31m',"Please enter a title to continue!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: '*Please enter a description of your project.',
        validate: description =>{
          if(description){
            return true;
          }
          else{
            console.log('\x1b[31m',"Please enter a short description of your project to continue!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: '*What are the installation instruction for your project?',
        validate: installation =>{
          if(installation){
            return true;
          }
          else{
            console.log('\x1b[31m',"You need to provide installation details to continue!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: '*How do you use this project?',
        validate: usage =>{
          if(usage){
            return true;
          }
          else{
            console.log('\x1b[31m',"Please provide usage of your project to continue!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: '*How should people contribute to this project?',
        validate: contribution =>{
          if(contribution){
            return true;
          }
          else{
            console.log("\x1b[31m","Please provide information on how to contribute to the project!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'gitclonerepolink',
        message: '*What is the link to clone the repo?',
        validate: gitclonerepolink =>{
          if(gitclonerepolink){
            return true;
          }
          else{
            console.log('\x1b[31m',"You need to provide link to clone the repo!")
            return false;
          }
        }
      },
      // Use checkbox type for multiple options
      {
        type: 'checkbox',
        name: 'license',
        message: '*Please select the license you used for this project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3',
        'GNU LGPLv3', 'Mozilla Public License 2.0',
        'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
        'The Unlicense'],
        validate: license =>{
          if(license){
            return true;
          }
          else{
            console.log('\x1b[31m',"Please select the license for the project!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please enter any testing protocols you used for your project?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'githubusername',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'githubemail',
        message: 'What is your GitHub email?',
      },
      {
        type: 'input',
        name: 'deploymenturl',
        message: 'What is the URL of the deployment site?',
      },
      {
        type: 'input',
        name: 'githubrepourl',
        message: '*What is the URL of the GitHub repo?',
        validate: githubrepourl =>{
          if(githubrepourl){
            return true;
          }
          else{
            console.log('\x1b[31m',"You need to provide url of the GitHub repo!")
            return false;
          }
        }
}]

// Export module to use in another file
module.exports = questions;