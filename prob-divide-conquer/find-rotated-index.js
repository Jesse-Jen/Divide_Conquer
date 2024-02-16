function findRotatedIndex(arr, num) {

    function findPivot(arr){
        let left = 0
        let right = arr.length - 1

        while(left < right){
            let mid = Math.floor((left + right) / 2)

            if(arr[mid] > arr[mid + 1]){
                return mid
            }
            //checking left
            if(arr[mid] < arr[left]){
                right = mid -1
            //checking right
            } else if (arr[mid] > arr[left]){
                left = mid + 1
            //if unrotated
            } else {
            return left
            }
        }
    }

    let pivot = findPivot(arr)
    //checking proper sides
    //checking left side
    if (arr[0] <= num && num <= arr[pivot]){
        return binarySearch(arr, 0, pivot, num)
    //checking right side
    } else {
        return binarySearch(arr,pivot, arr.length -1, num)
    }


    function binarySearch(arr, left, right, target){
        while(left <= right){
            let mid = Math.floor((left + right)/2)
            if(arr[mid] === target){
                return mid
            //checking right side
            } else if(arr[mid] < target){
                left = mid + 1
            //checking left side
            } else {
                right = mid -1
            }
        }
        return -1
    }
 
}

module.exports = findRotatedIndex

