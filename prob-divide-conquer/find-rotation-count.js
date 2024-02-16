function findRotationCount(arr){
    let left = 0
    let right = arr.length -1

    //checking if array is rotated and will return 0 if not rotated
    if(arr[left] <= arr[right]){
        return 0
    }

    //checking if mid is the minimum
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] < arr[mid -1]){
            return mid
        }

        //determining which half of the array has the min
        if(arr[mid] < arr[right]){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    //return -1 if array is not sorted
    return -1
}















function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Check if the array is rotated
    if (arr[left] <= arr[right]) {
        return 0; // If not rotated, return 0
    } 
    
    while (left <= right) { // Change condition to allow left and right pointers to meet
       let mid = Math.floor((left + right) / 2);
        
        // Check if mid is the minimum element
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        }

        // Determine which half of the array to search in
        if (arr[mid] < arr[right]) {
            right = mid - 1; // Adjust right pointer
        } else {
            left = mid + 1; // Adjust left pointer
        }
    }

    // Should not reach here for a valid rotated array
    return -1;
}

module.exports = findRotationCount