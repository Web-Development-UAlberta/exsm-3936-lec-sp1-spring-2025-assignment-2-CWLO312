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
      const containSquare = new rectangle(this.length, this.width);
      return containSquare.area;
    }
    else if (this.isSquare === false) {
      if (this.length > 0 && this.width > 0 && this.length > this.width) {
        const containSquare = new rectangle(this.length, this.length);
        return containSquare.area;
      }
      else if (this.length > 0 && this.width > 0 && this.length < this.width) {
        const containSquare = new rectangle(this.width, this.width);
        return containSquare.area;
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
          const containSquare = new rectangle(this.base, this.base);
          return containSquare.area;
        }
        else if (this.base > 0 && this.height > 0 && this.base < this.height) {
          const containSquare = new rectangle(this.height, this.height);
          return containSquare.area;
        }
        else {return `This is not a valid isoceles triantangle`};
        }
    }
  
  class circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
      }
    get diameter() {
      return this.radius * 2;
    } 
    get circumference() {
      return this.diameter * Math.PI;
    }
    get perimeter() {
      return this.circumference;
  }
    get area() {
      return this.radius * this.radius * Math.PI; 
    }
    contain() {
      if (this.radius > 0) {
        const containSquare = new rectangle(this.diameter, this.diameter); 
        return containSquare.area;
      }
      else {return `This is not a valid circle`};
      }
    }

  let shapeArray = [];
  let shapeInput;
  
  do{
  output ("Select a Shape to Create \n1. Rectangle \n2. Triangle \n3. Circle \n0. Exit")
  shapeInput = parseInt (await input ("Choose: "));

  if (shapeInput !== 1 && shapeInput !== 2 && shapeInput !== 3 && shapeInput !== 0) {
    output ("Invalid Input");
    }
  else if (shapeInput === 1) {   
    output ("Creating Rectangle");
    const length = parseInt (await input ("Please enter Length: "));
    const width = parseInt (await input ("Please enter Width: "));
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      output ("Invalid Input");
    }
    else {
    const shapeRectangle = new rectangle (length, width);
    shapeArray.push(shapeRectangle);
    output (`Total Perimeter: ${shapeRectangle.perimeter}`);
    output (`Total Area: ${shapeRectangle.area}`);
    output (`Total Area of Containing Square: ${shapeRectangle.contain()}`);
    }
  }

  else if (shapeInput === 2) {
    output ("Creating Triangle");
    const base = parseInt (await input ("Please enter Base: "));
    const height = parseInt (await input ("Please enter Height: "));
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      output ("Invalid Input");
    }
    else {

    const shapeTriangle = new triangle (base, height);
    shapeArray.push(shapeTriangle);
    output (`Total Perimeter: ${shapeTriangle.perimeter}`);
    output (`Total Area: ${shapeTriangle.area}`);
    output (`Total Area of Containing Square: ${shapeTriangle.contain()}`);
    }
  }

  else if (shapeInput === 3) {
    output ("Creating Circle");
    const radius = parseInt (await input ("Please enter Radius: "));
    if (isNaN (radius) || radius <= 0) {
      output ("Invalid Input");
    }
    else {
    const shapeCircle = new circle (radius);
    shapeArray.push(shapeCircle);
    output (`Total Circumference: ${shapeCircle.perimeter}`);
    output (`Total Area: ${shapeCircle.area}`);
    output (`Total Area of Containing Square: ${shapeCircle.contain()}`);
    }
  }

  else {
    output ("Goodbye");
    }
  
  } while (shapeInput !== 0);

const shapeCounter = shapeArray.length;
for (let i = 0; i < shapeCounter; i++) {
  output (`Shape ${i + 1}: ${shapeArray[i].contain()}`);
}
}