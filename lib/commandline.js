//This variable block is used to connect the necessary modules and create the command line interface
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./shape.js');
//This is a constructor class for the command line interface
class commandLine { 
    constructor(){
        this.color = '';
        this.shapeColor = '';
        this.shape = [];
}
//This method is used to prompt the user for input and create the SVG file
run(){
   inquirer.prompt([
       {
           type: 'input',
           name: 'text',
           message: 'What text would you like to add to the shape?'
       },
       {
           type: 'input',
           name: 'color',
           message: 'What color would you like the text to be? (Keyword or Hex)'
       },
       {
           type: 'input',
           name: 'shapeColor',
           message: 'What color would you like the shape to be? (Keyword or Hex)'
       },
       {
           type: 'list',
           name: 'shape',
           message: 'What shape would you like to create?',
           choices: ['Circle', 'Square', 'Triangle']
       }
   ])
   //This creates the SVG file using the .render() method from the shape classes and the information from above
   .then ((response) => {
    switch (response.shape){
        case 'Circle':
            this.shape = new Circle(response.text, response.color, response.shapeColor);
            break;
        case 'Square':
            this.shape = new Square(response.text, response.color, response.shapeColor);
            break;
        case 'Triangle':
            this.shape = new Triangle(response.text, response.color, response.shapeColor);
            break;
    }
    //This writes the SVG file to the current directory
    fs.writeFileSync('logo.svg', this.shape.render());
    //This logs a message to the console to let the user know the file has been created
    console.log('Generated logo.svg file!');
   })
}

}
//This exports the commandLine class to be used in the index.js file
module.exports = commandLine;