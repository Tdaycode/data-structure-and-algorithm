
let arr1 = ["e", "b", "c"];
let arr2 = ["d", "j", "f"]
let map = {
};
function containSameItem(arr1, arr2) {
  for(let i=0; i<arr1.length; i++) {
    if(!map[arr1[i]]) {
       map[arr1[i]] = true
    }
    console.log(map)
  }
 for(let i=0; i<arr2.length; i++) {
   if(map[arr2[i]]) {
     return true
   }
 }   
  return false
}

console.log(map)



console.log(containSameItem(arr1, arr2))