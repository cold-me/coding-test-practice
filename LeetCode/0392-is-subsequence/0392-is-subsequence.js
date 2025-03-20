/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let i = 0, j = 0, answer = false;
    if(s.length === 0) return true
    while(j < t.length){
        if(s[i] === t[j]){
            if(i == s.length - 1){
                answer = true
                break;
            }
            (j++, i++);
        }else j++;
    }
    return answer
};