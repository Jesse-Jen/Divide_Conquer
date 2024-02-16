function countZeroes(arr){
  let firstZero = findFirstZero(arr)
  if (firstZero === -1){
    return 0
  }
  return arr.length - firstZero
}

function findFirstZero(arr, low = 0, high = arr.length -1){
  //checking for empty array
  if (low > high){
    return -1
  }
  while(low <= high){
    let mid = Math.floor((low + high) / 2)

    //checking if mid is firstZero
    if(arr[mid] === 0 && (mid === 0 || arr[mid-1] !==0)){
      return mid
      //check left
    } else if (arr[mid] === 0){
      return findFirstZero(arr,low, mid -1)
      //check right
    } else {
      return findFirstZero(arr, mid + 1, high)
    }
    
  }
}

module.exports = countZeroes