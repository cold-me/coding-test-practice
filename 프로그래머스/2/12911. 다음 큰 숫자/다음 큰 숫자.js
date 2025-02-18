const countOne = (num) =>{
    let count =0;
    const s = num.toString(2);
    for(const x of s){
        if(x === '1') count++;
    }
    return count
}
function solution(n) {
    const numberOfOne = countOne(n);
    while(numberOfOne !== countOne((++n))){}
    return n
}