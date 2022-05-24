// let myLinkedList = {
//   head:{
//     value: 10,
//     next: {
//       value: 12,
//       next:{
//         value:13,
//         next:null
//       }
//     }
//   }
  
// }

class LinkedList {
  constructor(value) {
    this.head ={
      value: value,
      next:null
    }
    this.tail = this.head
  }
  append(value) {
    const newNode = {
      value:value,
      next:null
    }
  
    this.tail.next =newNode
    this.tail = newNode
    return this
   
  
  }
  prepend(value) {
    const newNode = {
      value:value,
      next:this.head
    }
    this.head = newNode
    // console.log(this)
    return this
  }

  printList() {
    const list = []
    let currentNode = this.head
    console.log(currentNode)
    while(currentNode !== null) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    return list
}
  insert(index, value){
    if(index = 0) {
      this.prepend(value)
    }
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const link = new LinkedList(2)
link.append(3)
link.append(5)
link.append(6)
link.append(7)

console.log(link.printList())
function reverse(link) {
  let currentNode = link.head
  while(currentNode !== null) {
    let prev = currentNode.next
    prev = currentNode
  }
  
}