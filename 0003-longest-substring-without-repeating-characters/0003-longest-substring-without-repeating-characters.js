const duplicateCharClassificator = (str) => {
    const set = new Set();
    for(const x of str) set.add(x)
    return set.size !== str.length
}
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let lp = 0, rp = 1, answer = 0;
    let len = s.length
    if(s.length === 0) return 0
    while(lp < len && rp <= len){
        const str = s.slice(lp, rp);
        if(duplicateCharClassificator(str)) lp += 1;
        else{
            answer = Math.max(answer, str.length)
            rp += 1;
        }
    }
    return answer
};