

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    const len = s.length
    if(len === 1) return s
    const expandAroundOdd = (i) => {
        let lp = i, rp = i;
        while(lp >= 0 && rp < len && s[lp] === s[rp]){
            lp--;
            rp++;
        };
        return [lp+1, rp-1]
    }
    const expandAroundEven = (i) =>{
        let rp = i+1;
        let flag = false;
        while(rp < len && s[i] === s[rp]){
            flag = true
            i--;
            rp++;
        }
        return flag? [i+1, rp-1] : false
    }
    const answer = []

    for(let i = 0 ; i < len ; i++){
        const [lp, rp] = expandAroundOdd(i);
         if(lp >= 0 && rp < len){
            const str = s.slice(lp, rp + 1);
            answer.push(str);
        }
        const result2 = expandAroundEven(i);
        if(result2){
            const [lp, rp] = result2; 
            const str = s.slice(lp, rp+1);
            answer.push(str);
        }        
    }
    return answer.sort((a,b)=> b.length - a.length)[0]
}