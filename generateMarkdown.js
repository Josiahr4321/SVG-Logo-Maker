class Format {
    constructor(color,text,textColor){
        this.color=color
        this.text=text
        this.textColor=textColor
    }
};



class Circle extends Format {
    generate() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" text="${this.text}" textColor="${this.textColor}"/>`
    }
}

class Triangle extends Format {
    generate() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="105,20 20,200 200,199" fill="${this.color}" />
          <text x="110" y="190" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
  }
  

  class Square extends Format {
    generate() {
      return `<svg width="400" height="400">
          <rect width="400" height="400" style="fill:${this.color};stroke-width:10;stroke:${this.textColor}" />
        </svg>`;
    }
  }
  