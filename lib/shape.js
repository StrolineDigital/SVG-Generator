//A constructor class for the shape object
class Shape {
    constructor (text, color, shapeColor){
        // a variable to accept hex color code
        const myColor = RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");
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
        return `<svg width="300" height="200">
        <circle cx="50" cy="50" r="40" stroke="${this.color}" stroke-width="3" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}

class Square extends Shape {
    constructor (text, color, shapeColor){
        super(text, color, shapeColor);
    }
    render(){
        return `<svg width="300" height="200">
        <rect x="10" y="10" width="80" height="80" stroke="${this.color}" stroke-width="3" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor (text, color, shapeColor){
        super(text, color, shapeColor);
    }
    render(){
        return `<svg width="300" height="200">
        <polygon points="50,10 10,90 90,90" stroke="${this.color}" stroke-width="3" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}   

module.exports={Circle, Square, Triangle};
