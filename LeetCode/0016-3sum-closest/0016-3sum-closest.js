/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    const len = nums.length
    let answer = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let j = i + 1, k = len - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(answer - target) > Math.abs(sum - target)) answer = sum
            if (sum > target) k--
            else if (sum < target) j++
            else return sum
        }
    }
    return answer
};