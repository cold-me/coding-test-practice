/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let lp = 0, rp = height.length - 1 , answer = 0;
    while(lp !== rp){
        const h = Math.min(height[lp], height[rp]);
        const l = rp - lp;
        answer = Math.max(answer, h*l);
        height[lp] <= height[rp] ? lp++ : rp--;
    }
    return answer
};