/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node){
      // go through all the children for a Node
      for (let child of node.children) {
        // add all the values
        total += child.val;
        // if the children have any children
        if (child.children.length > 0){
          // add all the values of the children of the child
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    // check if root val is even if yes count = 1 if not count = 0
    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node){
      // check if child of node is even
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        // check if the child has children that is an even value
        if (child.children.length > 0){
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function numGreaterHelper(node){
      for (let child of node.children){
        if (child.val > lowerBound) count ++;
        if (child.children.length > 0){
          numGreaterHelper(child);
        }
      }
    }

    numGreaterHelper(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };
