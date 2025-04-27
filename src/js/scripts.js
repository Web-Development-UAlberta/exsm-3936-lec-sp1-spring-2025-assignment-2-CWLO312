async function main() {
 class shape {
  constructor() {
  if (new.target === shape) {
    throw new Error("Abstract class cannot be instantiated.");
    }
  }
  
  get perimeter() {
    throw new Error("Abstract perimeter was not implemented."); 
  }
  get area() {
    throw new Error("Abstract area was not implemented."); 
  }
  contain() {
    throw new Error("Abstract method contain() was not implemented.");
  }
 }

class rectangle extends shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  get isSquare() {
    if (this.length > 0 && this.width > 0 && this.length === this.width) {
      return true;
    }
    return false;
  }
  get perimeter() { 
    return 2 * (this.length + this.width);
  }
  get area() {
    return this.length * this.width;  
  }
  contain() {
    if (this.isSquare === true) {
      return this.length * this.width;
    }
    else if (this.isSquare === false) {
      if (this.length > 0 && this.width > 0 && this.length > this.width) {
        return this.length * this.length; 
      }
      else if (this.length > 0 && this.width > 0 && this.length < this.width) {
        return this.width * this.width;
      }
      else {return `This is not a valid rectangle`};
      }
    }
  }
  class triangle extends shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
    get perimeter() { 
      return (this.base + Math.sqrt((this.base * this.base) + 4 * (this.height * this.height)));
    }
    get area() {
      return this.base * this.height * 0.5;  
    }
    contain() {
        if (this.base > 0 && this.height > 0 && this.base >= this.height) {
          return this.base * this.base;
        }
        else if (this.base > 0 && this.height > 0 && this.base < this.height) {
          return this.height * this.height;
        }
        else {return `This is not a valid isoceles triantangle`};
        }
    }
  

  const shapeArray = [];
  output ("Select a Shape to Create \n1. Rectangle \n2. Triangle \n3. Circle \n0. Exit")
  const shapeInput = parseInt (await input ("Choose: "));

  if (shapeInput === 1) {
    output ("Creating Rectangle");
    const length = parseInt (await input ("Please enter Length: "));
    const width = parseInt (await input ("Please enter Width: "));
    const shapeRectangle = new rectangle (length, width);
    shapeArray.push(shapeRectangle);
    output (`Total Perimeter: ${shapeRectangle.perimeter}`);
    output (`Total Area: ${shapeRectangle.area}`);
    output (`Total Area of Containing Square: ${shapeRectangle.contain()}`)
  }

  if (shapeInput === 2) {
    output ("Creating Triangle");
    const base = parseInt (await input ("Please enter Base: "));
    const height = parseInt (await input ("Please enter Height: "));
    const shapeTriangle = new triangle (base, height);
    shapeArray.push(shapeTriangle);
    output (`Total Perimeter: ${shapeTriangle.perimeter}`);
    output (`Total Area: ${shapeTriangle.area}`);
    output (`Total Area of Containing Square: ${shapeTriangle.contain()}`)
  }

}
