// This can be solved using two pointer if all are positive numbers


// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0
const SubarrayWithGivenSum = () => {

  let sum = 0;
  let currSum = 0;
  let equalToDigit = 15;
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < array.length; i++) {

    while (sum <= equalToDigit) {

      if (sum == equalToDigit) return [i, j]
      sum = array[i] + array[j];
      j++;
    }
  }
}



// 
var subarraySum = function (nums, k) {
  let sum = 0;
  let hash = new Map()
  hash.set(0, 1)
  let count = 0

  for (let num of nums) {
    sum += num
    if (hash.has(sum - k)) {
      count += hash.get(sum - k)
    }
    hash.set(sum, (hash.get(sum) || 0) + 1)
  }

  return count
};



let array = [3, 1,1,1,1,3, 1,1,1,1,3, 1,1,1,1,3, 1,1,1,1, 4, 7, 2, -3, 1, 4, 2];
let k = 7

let result = subarraySum(array, k)
console.log(result)