//what is tree?
// A data structure that consists of nodes in a parent / child relationship

//list are linear but trees are not linear
//there is only parent -> child relationship only ,we cant have slibling->sibling relation or child to parent relation
//tree should contain only one root

//some terminolgy
// Root - The top node in a tree.
// Child -A node directly connected to another node when moving away from the Root.
// Parent - The converse notion of a child.
// Siblings -A group of nodes with the same parent.
// Leaf - A node with no children.
// Edge - The connection between one node and another.
//tip-> its good to have mental model before starting code
//visualize tree -> make a random tree then start code
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      //here we avoid duplicate but sometimes we have to keep the frequency at that case we simply add the frequency property on node
      if (current.value === value) return "value already present";
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return "tree is empty";
    else {
      if (this.root.value === value) {
        return this.root;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              return "value not found";
            } else if (value === current.left.value) {
              return current.left;
            } else {
              current = current.left;
            }
          } else {
            if (current.right === null) {
              return "value not found";
            } else if (value === current.right.value) {
              return current.right;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
}

var myBst = new BinarySearchTree();
myBst.insert(10);
myBst.insert(8);
myBst.insert(12);
myBst.insert(9);
myBst.insert(11);
myBst.insert(13);
myBst.insert(7);
//console.log(myBst);
console.log(myBst.find(12));

//tree structure
//        10
//     8       12
//   7   9  11   13

//time complexity
//insertion -> O(log(n))
//searching -> O(log(n))
//above two is not always true there are two edge case
//1.node can go all the way left side at the bottom or
//2.node can go all the way right side at the bottom
