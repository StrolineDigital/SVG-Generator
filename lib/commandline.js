//TODO: use inquirer to make a command line interface for the user to make svg files by interacting with the application
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./shape.js');

class commandLine { 
    constructor(){
        this.color = '';
        this.shapeColor = '';
        this.shape = [];
}
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
           message: 'What color would you like the text to be?'
       },
       {
           type: 'input',
           name: 'shapeColor',
           message: 'What color would you like the shape to be?'
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
    fs.writeFileSync('shape.svg', this.shape.render());
    console.log('SVG file created');
   })
}

}
module.exports = commandLine;