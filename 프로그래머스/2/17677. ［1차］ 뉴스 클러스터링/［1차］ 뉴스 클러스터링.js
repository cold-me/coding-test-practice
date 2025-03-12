
const mapping = (str1, str2, molecules) =>{
    const map = new Map();
    for(let i = 0 ; i < str1.length - 1; i++){
        const word = str1.slice(i, i+2);
        if(/[a-zA-Z]{2}/.test(word)){
            const regExp = new RegExp(word, 'gi');
            if(regExp.test(str2)) {
                const modifyWord = word.toUpperCase();
                map.set(modifyWord, (map.get(modifyWord) || 0) + 1);
            }
            molecules += 1
        }
    }    
    return [map, molecules]
}

function solution(str1, str2) {
    let molecules = 0;
    let denominator = 0;
    const [map1, n] = mapping(str1, str2, molecules);
    const [map2, m] = mapping(str2, str1, molecules);
    molecules += (n + m)
    for(const [k, v] of map1){
        let min = Math.min(v, map2.get(k));
        denominator += min;
        molecules -= min
        map1.set(k, min);
    }
    const answer = denominator === 0 && molecules === 0? 1 : (denominator/molecules)
    return parseInt(answer* 65536)
}