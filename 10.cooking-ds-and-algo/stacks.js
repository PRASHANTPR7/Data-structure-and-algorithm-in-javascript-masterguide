//LIFO
//in workshop they have used the string for the storage and i have used the array because its more convenient to use also push and pop methods are inbuilt so we dont have to write methods for string manupulation

//array as an underlying datastucture
// var Stack = function() {
//   this.storage = [];
//   this.size = this.storage.length;
// };

// Stack.prototype.push = function(val) {
//   this.storage.push(val);
//   this.size += 1;
//   console.log("item added successfully");
// };

// Stack.prototype.pop = function() {
//   if (this.size === 0) {
//     console.log("stack is already empty");
//   } else {
//     let popped = this.storage.pop();
//     this.size -= 1;
//     console.log(`${popped} has been removed`);
//   }
// };

// Stack.prototype.stackSize = function() {
//   console.log(`the size of your stack is ${this.size}`);
// };

// var mystack = new Stack();

// mystack.push("tomato");
// mystack.push("garlic");
// mystack.push("spinach");
// mystack.push("salt");
// mystack.pop();

// mystack.stackSize();

//lets implement this stack and using object(linklist) as a underlying Datastructure

//[ 1 , 2 , 3 , 4 ]
//  last       first
var Node = function(value) {
  this.value = value;
  this.next = null;
};

var Stack = function() {
  this.first = null;
  this.size = 0;
  this.last = null;
};

Stack.prototype.push = function(value) {
  var newNode = new Node(value);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    var temp = this.first;
    temp.next = newNode;
    this.first = newNode;
  }
  console.log(`${newNode.value} inserted successfully`);
  this.size++;
};

Stack.prototype.pop = function() {
  if (!this.first) return "stack is already empty";
  this.size--;
  console.log(`${this.first.value} popped`);
};

Stack.prototype.Stacksize = function() {
  console.log(`the size of your stack is ${this.size}`);
};

var mystack = new Stack();
mystack.push("milk");
mystack.push("cheese");
mystack.push("butter");
mystack.push("soya");

mystack.pop();
mystack.Stacksize();
