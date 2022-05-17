// Array implementation

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++
  }
  len() {
    return this.length
  }
  pop() {
    delete this.data[this.length -1]
    this.length--
   
  }

  delete(index) {
    delete this.data[index];
    this.shiftItems(index)
    this.length--
  }
  
}

const tayo = new Array()
tayo.push("tayo1")
tayo.push("tayo2")
tayo.push("tayo3")
tayo.push("tayo4")
tayo.delete(2)


console.log(tayo)