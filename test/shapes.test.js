const Format = require('../shapes.js').Format;
const Circle = require('../shapes.js').Circle;
const Triangle = require('../shapes.js').Triangle;
const Square = require('../shapes.js').Square;

describe('Shapes', () => {
  test('Circle should generate correct SVG markup', () => {
    const circle = new Circle('blue', 'Circle', 'white');
    const expected = '<circle cx="150" cy="100" r="80" fill="blue" text="Circle" textColor="white"/>';
    expect(circle.generate()).toBe(expected);
  });

  test('Triangle should generate correct SVG markup', () => {
    const triangle = new Triangle('green', 'Triangle', 'white');
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="105,20 20,200 200,199" fill="green" />
      <text x="110" y="190" font-size="60" text-anchor="middle" fill="white">Triangle</text>
    </svg>`;
    expect(triangle.generate()).toBe(expected);
  });

  test('Square should generate correct SVG markup', () => {
    const square = new Square('red', 'Square', 'white');
    const expected = '<svg width="400" height="400">\n  <rect width="400" height="400" style="fill:red;stroke-width:10;stroke:white";text=Square />\n</svg>';
    expect(square.generate()).toBe(expected);
  });
});
