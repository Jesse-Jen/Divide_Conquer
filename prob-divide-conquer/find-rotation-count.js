function findRotationCount(arr){
    let left = 0
    let right = arr.length - 1

    //checking if array is rotated
    if(arr[left] <= arr[mid]){
        return 0
    }

    while(left <= right){
        let mid = Math.floor((right + left)/2)

        //checking if mid is smallest num
        if(arr[mid] < arr[mid - 1]){
            return mid
        }

        //checking left side
        if(arr[left] > arr[mid]){
            right = mid - 1
        //checking right side
        } else {
            left = mid + 1
        }
    }
    //array not sorted
    return -1
}


module.exports = findRotationCount