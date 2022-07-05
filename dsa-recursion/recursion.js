/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // return 1 if array is length 0
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr); 
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// ex: tacocat
function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  // 1. leftIdx = 0
  // 2. leftIdx = 1
  // 3. leftIdx = 2
  // 4. leftIdx = 3
  let rightIdx = str.length - idx - 1;
  // 1. rightIdx = 6
  // 2. rightIdx = 5
  // 3. rightIdx = 4
  // 4. rightIdx = 3
  if (leftIdx >= rightIdx) return true;
  // 0 >= 6 -> false
  // 1 >= 5 -> false
  // 2 >= 4 -> false
  // 3 >= 3 -> true
  if (str[leftIdx] !== str[rightIdx]) return false;
  // 1. tacocat[0] = 't' !== tacocat[6] = 't' -> true
  // 2. tacocat[1] = 'a' !== tacocat[5] = 'a' -> true
  // 3. tacocat[2] = 'c' !== tacocat[4] = 'c' -> true
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  let rightIdx = str.length - idx - 1;
  newStr += str[rightIdx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === val) return middleIdx;
    if (middleVal > val) {
      // middleVal is too large, look at the left half
      return binarySearch(arr, val, leftIdx, middleIdx - 1);
    } else {
      return binarySearch(arr, val, middleIdx + 1, rightIdx);
    }
  }
  
  // left and right pointers crossed, val isn't in arr
  return -1;
}



module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
