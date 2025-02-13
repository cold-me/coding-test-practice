function solution(s) {
    const answer = [];
    const count = new Map();
    for(let i = 0 ; i < s.length ; i++){
        const char = s[i];
        if(!count.has(char)){
            answer.push(-1)
        }else{
            answer.push(i+1-count.get(char))
        }
        count.set(s[i], i+1)
    }
    return answer;
}