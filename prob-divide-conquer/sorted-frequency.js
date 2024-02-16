function sortedFrequency(arr, num) {
    let firstIndex = findFirst(arr,num)
    if (firstIndex === -1){
        return 0
    }
    let lastIndex = findLast(arr,num)
    return lastIndex-firstIndex + 1
}


function findFirst(arr,num, low = 0, high = arr.length-1){
    if(high >= low){
        let mid = Math.floor((high + low)/ 2)
        // if mid index is 0 or num is greater than the value in array index mid-1
        if((mid === 0 || num > arr[mid-1]) && arr[mid] === num){
            return mid
        }else if(num > arr[mid]){
            return findFirst(arr, num, mid + 1, high)
        }else{
            return findFirst(arr, num, low, mid-1)
        }
    }
    return -1
}


function findLast(arr, num , low = 0, high = arr.length-1){
    if (high >= low){
        let mid = Math.floor((high + low)/ 2)
        //checking for last index
        if((mid === arr.length -1 || num < arr[mid+1]) && arr[mid] === num){
            return mid
        } else if(num < arr[mid]) {
            return findLast(arr, num, low, mid -1)
        } else {
            return findLast(arr, num, mid + 1, high)
        }
    }
    return -1;
}

module.exports = sortedFrequency

