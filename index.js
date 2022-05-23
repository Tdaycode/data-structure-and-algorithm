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
}

const link = new LinkedList(2)
link.append(3)
link.append(5)
link.append(6)
link.append(7)

console.log(link.printList())