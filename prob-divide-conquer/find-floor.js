function findFloor(arr, target, low = 0, high = arr.length -1) {
    let left = 0
  //checking if target is in the range of the array
  if(target < arr[low]){
    return -1
  }
  //checking if its an empty array
  if (low > high){
    return -1
  }
  //checking if target is the biggest value
  if(arr[high] <= target){
    return arr[high]
  }
  //checking mid
  let mid = Math.floor((low + high) / 2)
  if (arr[mid] === target){
    return arr[mid]
  }
    //checking if target/floor value is adjacent 
  if(target < arr[mid] && target > arr[mid -1]){
    return arr[mid - 1]
  }

  //searching left
  if(target < arr[mid]){
    return findFloor(arr, target, low, mid - 1)
  } else {
    //right
    return findFloor(arr,target, mid + 1, high)
  }

}

module.exports = findFloor