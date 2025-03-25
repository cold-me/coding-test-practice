/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function(firstList, secondList) {
    let f = 0, s = 0;
    const answer = [];
    while(f < firstList.length && s < secondList.length){
        const [firstStart, firstEnd] = firstList[f];
        const [secondStart, secondEnd] = secondList[s]; 
        const start = Math.max(firstStart, secondStart);
        const end = Math.min(firstEnd, secondEnd);
        if(start <= end) answer.push([start, end]);
        firstEnd > secondEnd ? s++ : f++;
    }
    return answer
};