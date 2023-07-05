class Format {
  constructor(color, text, textColor) {
      this.color = color;
      this.text = text;
      this.textColor = textColor;
  }
}

class Circle extends Format {
  generate() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.color}" textColor="${this.textColor}"/>
      <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

class Triangle extends Format {
  generate() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="105,20 20,200 200,199" fill="${this.color}" />
          <text x="110" y="190" font-size="15" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

class Square extends Format {
  generate() {
      return `
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg>
          <rect width="400" height="400" style="fill:${this.color};stroke-width:10;stroke:${this.textColor}" text="${this.text}" />
          <text x="110" y="190" font-size="15" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
  }
}

module.exports = {
  Format,
  Circle,
  Triangle,
  Square
};
