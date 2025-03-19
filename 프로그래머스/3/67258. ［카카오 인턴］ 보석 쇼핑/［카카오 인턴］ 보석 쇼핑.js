function solution(gems) {
    let lp = 0, rp = 0;
    const types = new Set(gems).size
    const map = new Map();
    const answers = [];
    let flag = false;
    while(rp <= gems.length){
        if(!flag){
            map.size !== types ? map.set(gems[rp], (map.get(gems[rp++])|| 0) + 1) : flag = true
        }else{
            const times = map.get(gems[lp]);
            if(times === 1) {
                flag = false;
                map.delete(gems[lp])
            }else map.set(gems[lp], times-1);
            answers.push([lp+1, rp]);                
            lp++
        }
    }
    return answers.sort((a,b)=> (a[1]-a[0])-(b[1]-b[0])).at(0)
}