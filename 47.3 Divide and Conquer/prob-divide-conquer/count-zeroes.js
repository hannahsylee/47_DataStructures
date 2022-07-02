/** [1,1,1,1,0,0]
 * leftIdx = 0
 * rightIdx = 5
 * middleIdx = 2
 * middleVal = 1
 * move to the right side of the middle
 * leftIdx = 3
 * rightIdx = 5
 * middleIdx = 4
 * middleVal = 0
 * move to the left side of the second middle
 * leftIdx = 3
 * rightIdx = 4
 * middleIdx = 3
 * middleVal = 1
 * if ((arr[middleIdx - 1] == 1 && arr[middleIdx] == 0) || middleIdx == 0)
 * check if value left of middleIdx -> arr[middleIdx - 1] == 1 or 0;
 *  */ 

/** [1,0,0,0,0] 
 * leftIdx = 0
 * rightIdx = 4
 * middleIdx = 2
 * middleVal = 0
 * check if value left of middleIdx -> arr[middleIdx - 1] == 1 or 0;
 * if 0 redo function
 * check left side
 * leftIdx = 0
 * rightIdx = 1
 * middleIdx = 0
 * middleVal = 1
 * 
 * */ 
function countZeroes(arr){
    let firstZero = findFirstZero(arr);
    if (firstZero === -1){
        return 0;
    }
    return arr.length - firstZero;
}

function findFirstZero(arr, leftIdx = 0, rightIdx=arr.length-1) {
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

        if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0){
            return middleIdx;
        } else if (middleVal == 1){
            return findFirstZero(arr, middleIdx + 1, rightIdx);
        }
        return findFirstZero(arr, leftIdx, middleIdx - 1);
    }
    return -1;
}

module.exports = countZeroes