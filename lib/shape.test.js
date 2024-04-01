//This is a test file used to test the shape.js file and specifically the hex color code validation
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