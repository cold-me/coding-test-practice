/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1) return s

    let i = 0, j = 0, times = 0, asc = true;
    const map = new Map();
    map.set([i++, j], s[times++]);

    while (times < s.length) {
        if (i === 0 || i === numRows - 1) asc = !asc;
        map.set([i, j], s[times++])
        asc ? i++ : i--, j++;
    }

    const answers = Array.from({ length: numRows }, () => Array(j).fill(0))
    for (const [k, v] of map) {
        const [row, col] = k;
        answers[row][col] = v;
    }
    return answers.map((item) => {
        return item.filter((i) => i).join('')
    }).join('')
};