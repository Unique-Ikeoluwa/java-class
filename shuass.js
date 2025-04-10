// target = 9  
// function indices(first, second){
//     for ( let i = 0; i < first.length; i++){
//         if (first[i]+first[i+1]==second){
//             return [i, i+1]
//         }
//     }
// }
// console.log(indices(nums, target))
// nums = [2, 7, 11, 15]
// target = 9 
// function indices(first, second){
//     for ( let i = 0; i < nums.length; i++){
//         if (first== i, second== i+1){
//             nums[i]+nums[i+1]==target
//         }
       
//         }
//     }
// console.log(indices(nums, target))

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
// Output: [0, 1]  
// Explanation: nums[0] + nums[1] = 2 + 7 = 9
// nums = [2, 7, 11, 15]
nums = [3, 4, 7, 8, 11, 2, 15]
target = 9  
function indices(first, second){
    for (let i = 0; i < first.length; i++){
        for (let j= 1; j < first.length; j++){
            if (first[i]+first[j]==second)
                return [i, j]
        }
    }
}
console.log(indices(nums, target))

// You are given an array that may contain duplicate elements. Your task is to return a new array with all duplicate values removed, preserving the original order of first appearances.
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]
input = [1, 2, 2, 3, 4, 4]
function duplicate(arrays){
    for(i = arrays.length-1; i >= 0; i--){
        for (j = i-1; j >= 0; j--){
            if(arrays[i] === arrays[j])
                arrays.splice(j, 1)
        }
    }
    return arrays
}
console.log(duplicate(input))






