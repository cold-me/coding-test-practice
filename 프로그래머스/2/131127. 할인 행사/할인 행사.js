function solution(want, number, discount) {
    let TOTALNUMBER = number.reduce((acc, el)=> acc + el, 0);
    let answer = 0;
    for(let d = 0 ; d < discount.length; d++){
        const goods = new Map(want.map((item, i)=> [item, number[i]]));
        let flag = true;
        for(let n = d; n < d + TOTALNUMBER ; n++){
            if(!goods.has(discount[n]) || goods.get(discount[n]) <= 0){
                flag = false;
                break;
            }
            goods.set(discount[n], goods.get(discount[n]) - 1);
        }
        if(flag) answer++;
    }
    return answer;
}