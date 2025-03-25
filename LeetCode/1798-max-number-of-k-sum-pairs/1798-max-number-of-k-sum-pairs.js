/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
    nums.sort((a,b)=> a - b);
    let lp = 0, rp = nums.length - 1, answer = 0;
    while(lp < rp){
        const sum = nums[lp] + nums[rp];
        if(sum === k) lp++, rp--, answer++; 
        else if(sum < k) lp++;
        else rp--;
    }
    return answer
};