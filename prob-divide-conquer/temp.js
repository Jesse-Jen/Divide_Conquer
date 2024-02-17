function sortedFrequency(arr, num){
    let firstIndex = findFirst(arr,num)
    if (firstIndex === -1){
        return 0
    }
    let lastIndex = findLast(arr, num)
    return lastIndex - firstIndex + 1
}


function findFirst(arr, num, low = 0, high = arr.length -1){
    if(low <= high){
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
    if(low <= high){
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
    return -1 
}



////////////////////////////////////////////////////////////////////////////
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
        //checking left side
        if(arr[mid] < target){
            left = mid  +1
        //checking right side
        }else{
            right = mid - 1
        }
    }
    return -1
}
////////////////////////////////////////////////////////////////////////////
function findRotationCount(arr){
    let left = 0
    let right = arr.length -1


    //check if array is rotated
    if(arr[left] < arr[right]){
        return 0
    }
    
    while(left <= right){
        let mid = Math.floor((left + right) /2 )
        //checking if mid is the minimum
        if(arr[mid] < arr[mid -1]){
            return mid
        }
        //determining which side of array as minimum
        //check for left
        if(arr[left] < arr[mid]){
            right = mid - 1
            // checking right
        } else {
            left = mid + 1
        }
    }
    //checking if array is sorted
    return -1
}
///////////////////////////////////////////////////////////////////
function findFloor(arr, target, low = 0, high = arr.length -1){
    //checking if array is sorted/is not empty
    if(arr[low] > arr[high]){
        return -1
    }

    //checking if valid target
    if(target < arr[low]){
        return -1
    }

    //checking if target is biggest num
    if(target === arr[high] || target > arr[high]){
        return arr[high]
    }

    //checking if target is mid
    let mid = Math.floor((high + low)/2)
    if(target === arr[mid]){
        return arr[mid]
    }

    //checking for inbetween values
    if(target > arr[mid-1] && target < arr[mid]){
        return arr[mid-1]
    }

    //checking left
    if(target < arr[mid]){
        return findFloor(arr, target, low, mid -1)
    } else {
        return findFloor(arr,target, mid + 1, high)
    }

}