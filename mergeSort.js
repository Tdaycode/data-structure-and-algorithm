// Sort and merge two Array

function mergeSort(arr1, arr2) {
  const merge = [...arr1, ...arr2 ].sort((a, b) => a - b )
  console.log(merge)
  
}

mergeSort([1,2,4, 7,8], [5,5,6])