function sortedFrequency(arr, num){
    let firstIndex = findFirst(arr,num)
    if (firstIndex === -1){
        return 0
    }
    let lastIndex = findLast(arr, num)
    return lastIndex - firstIndex + 1
}


function findFirst(arr, num, low = 0, high = arr.length -1){
    while(low <= high){
        let mid = Math.floor((high + low)/2)
        //checking if mid is first num
        if((mid === 0 || num > arr[mid -1])  && arr[mid] === num){
            return mid
        //searching left
        } else if (arr[mid] > num){
            return findFirst(arr, num, low, mid -1)
        //searching right
        } else {
            return findFirst(arr,num, mid + 1, high)
        }
    }
    //num does not exist in array
  return -1  
}

function findLast(arr, num, low = 0, high = arr.length -1){
    while(low <= high){
        let mid = Math.floor((high + low)/2)
        //checking if mid is last num
        if((mid === arr.length - 1 || arr[mid+1] > num) && arr[mid] === num){
            return mid
            //checking right
        } else if (arr[mid] < num){
            return findLast(arr,num,mid + 1, high)
            //checking left
        } else {
            return findLast(arr,num, low, mid -1)
        }
    }
}