function BinaryTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.insert = function (value){
    if (value <= this.value){
        if (!this.left){
            this.left = new BinaryTree(value);
        } else {
            this.left.insert(value);
        }
        
    } else {
        if (!this.right){
            this.right = new BinaryTree(value);
        } else {
            this.right.insert(value);
        }
    }
}

BinaryTree.prototype.contains = function (value){
    if (value === this.value){
        return true;
    } else {
        if ( value < this.value){
            if (!this.left){
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if (!this.right){
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }
} 

BinaryTree.prototype.depthFirstTraversal = function (iterator, order){
  if (order === 'pre-order'){ iterator(this.value) };  
  if (this.left){ this.left.depthFirstTraversal(iterator, order) };
  if (order === 'in-order') { iterator(this.value) };
  if (this.right){ this.right.depthFirstTraversal(iterator, order) };
  if (order === 'post-order') { iterator(this.value) };
}

BinaryTree.prototype.breadthFirstTraversal = function (iterator){
    var queue = [this];

    while (queue.length){
        var treeNode = queue.shift();

        iterator(treeNode);
        if (treeNode.left){ queue.push(treeNode.left) };
        if (treeNode.right){ queue.push(treeNode.right) };

    }

}

BinaryTree.prototype.getMinVal = function(){
    if (this.left){ 
        return this.left.getMinVal() 
    } else {
        return this.value;
    }
}

BinaryTree.prototype.getMaxVal = function(){
    if (this.right){ 
        return this.right.getMaxVal() 
    } else {
        return this.value;
    }
}

function log(node){
    console.log(node.value);
}



var tree = new BinaryTree(50);

tree.insert(30);
tree.insert(70);
tree.insert(100);
tree.insert(60);
tree.insert(59);
tree.insert(20);
tree.insert(45);
tree.insert(35);
tree.insert(85);
tree.insert(105);
tree.insert(10);

console.log( tree.getMinVal() );
console.log( tree.getMaxVal() );
