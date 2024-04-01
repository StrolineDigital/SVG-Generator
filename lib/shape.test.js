//This is a test file used to test the shape.js file and the classes within it, Triangle, Square, and Circle
const { Triangle } = require("./shape.js");

describe("Triangle", () => {
  describe("color", () => {
    it("should accept this color", () => {
      const shape = new Triangle("TST", "#C70039", "#66C966");

      expect(shape.render())
        .toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="#66C966"></polygon><text x="150" y="135" font-size="45" text-anchor="middle" fill="#C70039">TST</text></svg>');
    });
  });
});

const { Square } = require("./shape.js");
describe("Square", () => {
  describe("color", () => {
    it("should accept this color", () => {
      const shape = new Square("TST", "#C70039", "#66C966");

      expect(shape.render())
        .toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n        <rect width="200" x="50" y="25" height="200" fill="#66C966">\n        </rect><text x="150" y="135" font-size="60" text-anchor="middle" fill="#C70039">TST</text></svg>');
    });
  });
}
);
const { Circle } = require("./shape.js");
describe("Circle", () => {
  describe("color", () => {
    it("should accept this color", () => {
      const shape = new Circle("TST", "#C70039", "#66C966");

      expect(shape.render())
        .toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="150" cy="100" r="80" fill="#66C966">\n        </circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="#C70039">TST</text></svg>');
    });
  });
}
);