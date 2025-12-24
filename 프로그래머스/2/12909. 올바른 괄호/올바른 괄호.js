function solution(s){
    if (s[0] == ")" || s.length < 2) return false
    const stack = ["("];
    for(let i = 1 ; i < s.length; i++){
        if(s[i] === '(') stack.push("(")
        else stack.pop();
    }
    return stack.length === 0 ? true : false
}