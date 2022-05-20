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
}

const link = new LinkedList(2)
link.append(3)
link.append(4)

console.log(link)