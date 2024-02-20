function findRotatedIndex(arr, num){
    let left = 0
    let right = arr.length - 1

    let pivot = findPivot(arr)
    
    //searching left side
    if(arr[0] <= num && num <= arr[pivot]){
        return binarySearch(arr, num, left, pivot)
    //right side
    } else {
        return binarySearch(arr, num, pivot, right)
    }
}


function findPivot(arr){
    let left = 0
    let right = arr.length - 1

    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        //checking if mid is the index
        if(arr[mid] > arr[mid + 1]){
            return mid
        } 
        //checking left side
        if(arr[mid] < arr[left]){
            right = mid - 1
        //checking right side
        } else if(arr[mid] > arr[right]){
            left = mid + 1
        //returns left as pivot if array is unrotated
        } else {
            return left
        }
    }
}

function binarySearch(arr, target, left, right){
    while (left <= right){
        let mid = Math.floor((right + left) / 2)
        //checking if mid is the target
        if (arr[mid] === target){
            return mid
        }
        //checking right side
        if(arr[mid] < target){
            left = mid  +1
        //checking left side
        }else{
            right = mid - 1
        }
    }
    return -1
}

module.exports = findRotatedIndex


