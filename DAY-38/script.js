class Stack {
    constructor() {
      this.items = [];
      this.maxSize = 5;
    }
  
    // Push operation: Add an element to the top of the stack
    push(item) {
        if (this.size() >= this.maxSize) {
            console.log("Stack Overflow");
          } else { 
            this.items.push(item);
    }
}
    // Pop operation: Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty.";
      }
      return this.items.pop();
    }
  
    search(item) {
      const index = this.items.indexOf(item);
      if (index === -1) {
        return this.items.includes(item);
    }
    return this.items.includes(item);
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty.";
      }
      return this.items[this.items.length - 1];
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
      
    }
  }
  
  
  const stack = new Stack();
  
  console.log(stack.items);
  stack.push(1);
  console.log(stack.items);
  stack.push(2);
  console.log(stack.items);
  stack.push(3);
  console.log(stack.items);
  stack.push(4);
  console.log(stack.items);
  stack.push(5);
  console.log(stack.items);
  stack.push(6);
  stack.push(7);
  
  
  
  console.log(stack.pop(),"is removed"); 
  console.log(stack.pop(),"is removed");
  console.log(stack);
  console.log(stack.search(6));
  console.log(stack.search(3));
  console.log(stack.search(0));
  
  