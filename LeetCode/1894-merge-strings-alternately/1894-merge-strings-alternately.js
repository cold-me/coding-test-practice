/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    let idx = 0;
    let answer = '';
    while (idx < word1.length || idx < word2.length) {
        if (idx < word1.length) answer += word1[idx];
        if (idx < word2.length) answer += word2[idx];
        idx++;
    }
    return answer
};