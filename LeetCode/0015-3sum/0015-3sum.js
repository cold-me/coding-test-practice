/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const len = nums.length;
    const set = new Set();
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        let k = len - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) k--;
            else if (sum < 0) j++;
            else {
                set.add(`${nums[i]},${nums[j]},${nums[k]}`);
                k--;
                j++;
            }
        }
    }
    return [...set].map((item)=> item.split(',').map(Number))
};