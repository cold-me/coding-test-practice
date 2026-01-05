function solution(arr) { 
    return arr.filter((el, i, array)=>{ 
        if(i !== 0){ 
            return (el !== array[i-1])
        }else return (el || el === 0) 
    }) 
}