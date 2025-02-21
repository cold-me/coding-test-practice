const solution = (s) => {
    const stack = [];
    let i = 0;
    while (i < s.length) {
        if (stack.length === 0 || s[i] !== stack.at(-1)) {
            stack.push(s[i++]);
        } else {
            stack.pop();
            i++;
        }
    }
    return stack.length === 0 ? 1 : 0;
};
