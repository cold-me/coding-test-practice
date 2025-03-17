/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let lp = 0, rp = 0, answer = 0;
    const set = new Set();
    while (rp < s.length) {
        if (!set.has(s[rp])) {
            set.add(s[rp]);
            answer = Math.max(answer, set.size);
            rp++;
        } else {
            set.delete(s[lp])
            lp++;
        }
    }
    return answer
};