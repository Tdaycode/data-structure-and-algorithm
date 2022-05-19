class Hash {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charcodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let arr = [key, value]
    this.data.push(arr) 
  }
 

  get(key) {
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i][0] === key) {
        return this.data[i][1]
      }
    }
  }
}

const hashMap = new Hash(2);

hashMap.set("name", "Omotayo")
hashMap.set("name", "Omotayo")
hashMap.set("name", "Omotayo")
console.log(hashMap)