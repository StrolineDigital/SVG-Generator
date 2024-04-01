//A constructor class for the shape object
class Shape {
    constructor (text, color, shapeColor){
        // a variable to accept hex color code
        const myColor = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");
        // a list of colors
        const colors = ["red", "blue", "green", "yellow", "black", "white"];
        // Trim the inputs
        text = text.trim();
        color = color.trim();
        shapeColor = shapeColor.trim();
        // Check if any of the inputs are empty
        if (text === "" || color === "" || shapeColor === ""){
            throw new Error("Invalid input");
        }
        // Check if text is 3 characters or less
        if (text.length >3){
            throw new Error("Must be 3 characters or less");
        } else {
            this.text = text;
        }
        // Check if color is in hex format
        if (colors.includes(color)) {
            this.color = color.toLowerCase();
        } else if (myColor.test(color)) {
            this.color = color;
        } else {
            throw new Error(
                `Error has occured due to invalid color: ${color}`
              );
        }
        // Check if shapeColor is in hex format
        if (colors.includes(shapeColor)){
            this.shapeColor = shapeColor.toLowerCase();
        } else if (myColor.test(shapeColor)){
            this.shapeColor = shapeColor;
        } else {
            throw new Error(
                `Error has occured due to invalid color: ${shapeColor}`
              );
        }
    }
}

//Generate classes for Circle, Square, and Triangle that render the svg shapes with the necessary attributes

class Circle extends Shape {
    constructor (text, color, shapeColor){
        super(text, color, shapeColor);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}">
        </circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
        
    }
}

class Square extends Shape {
    constructor (text, color, shapeColor){
        super(text, color, shapeColor);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" x="50" y="25" height="200" fill="${this.shapeColor}">
        </rect><text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
    }
}
class Triangle extends Shape {
    constructor (text, color, shapeColor){
        super(text, color, shapeColor);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"></polygon><text x="150" y="135" font-size="45" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
    }
}   
//Export the classes to be used in the commandline.js file
module.exports = { Triangle, Circle, Square };