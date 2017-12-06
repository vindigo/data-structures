function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);

    if (this.head){
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }

    this.head = newNode;    
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);

    if (this.tail){
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }

    this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
    if (!this.head){
        return null;
    } else {
        var val = this.head.value;

        this.head = this.head.next;
        if (this.head){
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        return val;
    }
}

LinkedList.prototype.removeTail = function(){
    if (!tail){
        return null;
    } else {
        var val = this.tail.value;
        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        return val;
    }
}

LinkedList.prototype.search = function(value){
    var currentNode = this.head;
    
    while(currentNode){
        
        if (currentNode.value === value){
            return currentNode.value;
        } else {

        }

        currentNode = currentNode.next;
    }

    return null;
}

LinkedList.prototype.indexOf = function(value){
    var currentNode = this.head,
        currentNodeIndex = 0;
        result = [];

    while(currentNode){
        if (currentNode.value === value){
            result.push(currentNodeIndex);
        }

        currentNode = currentNode.next;
        currentNodeIndex++;
    }

    return result;
    
}

var ll = new LinkedList();

ll.addToHead(10);
ll.addToHead(20);
ll.addToHead(30);

console.log(ll);