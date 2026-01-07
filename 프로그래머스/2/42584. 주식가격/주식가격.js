function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    for(let i = 0; i < n; i++){
        let count = 0;
        for(let j = i+1; j < n; j++){
            count++;
            if(prices[i] > prices[j]) break;
        }
        answer[i] = count
    }
    return answer
}

