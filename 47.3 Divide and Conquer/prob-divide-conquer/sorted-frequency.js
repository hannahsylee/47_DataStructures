/** [1,1,2,2,2,2,3],2 
 * leftIdx = 0
 * rightIdx = 6
 * middleIdx = 3
 * middleVal = 2
 * go to left section
 * leftIdx = 0
 * rightIdx = 2
 * middleIdx = 1
 * middleVal = 1
 * go to right section
 * leftIdx = 1
 * rightIdx = 2
 * middleIdx = 1
 * middleVal = 1
 * */ 
 function sortedFrequency(arr, num) {
    let firstNumIdx = findFirstNum(arr, num);
    if (firstNumIdx === -1){
        return 0;
    }
    let lastNumIdx = findLastNum(arr, num);
    return lastNumIdx - firstNumIdx + 1;
}

function findFirstNum(arr, num, leftIdx = 0, rightIdx=arr.length-1) {
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

        if ((middleIdx === 0 || arr[middleIdx - 1] < num) && arr[middleIdx] === num){
            return middleIdx;
        } else if (middleVal < val){
            return findFirstNum(arr, num, middleIdx + 1, rightIdx);
        }
        return findFirstNum(arr, num, leftIdx, middleIdx - 1);
    }
    return -1;
}

function findLastNum(arr, num, leftIdx = 0, rightIdx=arr.length-1) {
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

        if ((middleIdx === arr.length - 1 || arr[middleIdx - 1] > num) && arr[middleIdx] === num){
            return middleIdx;
        } else if (middleVal > num){
            return findLastNum(arr, num, leftIdx, middleIdx - 1);
        }
        return findLastNum(arr, num, middleIdx + 1, rightIdx);
    }
    return -1;
}


module.exports = sortedFrequency