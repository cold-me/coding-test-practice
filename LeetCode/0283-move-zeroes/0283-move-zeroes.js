/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    const map = new Map();
    let idx = 0;
    nums.forEach((item) => {if(item !== 0) map.set(idx++, item)})
    nums.forEach((item, i)=> nums[i] = 0)
    map.forEach((v, k)=> nums[k] = v)
    return nums 
};