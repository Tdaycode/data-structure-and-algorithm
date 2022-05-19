let map = new Map();
function reOcurring(arr) {
  for(let i =0; i < arr.length; i++) {
    console.log(map)
   if(!map.get(arr[i])) {
     map.set(arr[i], true)
   }else {
     return arr[i]
   }
    
  }
  return false
  
}

console.log(reOcurring([1,1]))