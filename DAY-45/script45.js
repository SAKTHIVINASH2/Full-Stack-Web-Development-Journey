// Classical Inheritance
class Device {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
    
    info() {
      return `I have ${this.brand} ${this.model}`;
    }
  }
  
  class Mobile extends Device {
    constructor(brand, model) {
      super(brand, model);
    }
    
    info() {
      return `${super.info()} mobile`;
    }
  }
  
  class Phone extends Mobile {
    constructor(brand, model, owner) {
      super(brand, model);
      this.owner = owner;
    }
    
    info() {
      return `${super.info()}\nIt is ${this.model}\n${this.owner} is a owner of white Husky`;
    }
  }
  
  const myPhone = new Phone("Apple", "iPhone 13 pro max", "ABC");
  
  // Prototypal Inheritance
  function Device2(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  Device2.prototype.info = function() {
    return `I have ${this.brand} ${this.model}`;
  };
  
  function Mobile2(brand, model) {
    Device2.call(this, brand, model);
  }
  
  Mobile2.prototype = Object.create(Device2.prototype);
  Mobile2.prototype.constructor = Mobile2;
  
  Mobile2.prototype.info = function() {
    return `${Device2.prototype.info.call(this)} mobile`;
  };
  
  function Phone2(brand, model, owner) {
    Mobile2.call(this, brand, model);
    this.owner = owner;
  }
  
  Phone2.prototype = Object.create(Mobile2.prototype);
  Phone2.prototype.constructor = Phone2;
  
  Phone2.prototype.info = function() {
    return `${Mobile2.prototype.info.call(this)}\nIt is ${this.model}\n${this.owner} is a owner of white Husky`;
  };
  
  const myPhone2 = new Phone2("Apple", "iPhone 13 pro max", "ABC");
  
  // Output
  
 
 
  myPhone.info().split('\n').forEach(line => console.log(line));


  
  
  