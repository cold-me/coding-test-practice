function solution(clothes) {
    const hash = new Map();
    for ([c, type] of clothes) {
        hash.set(type, [...(hash.get(type) || []), c]);
    }
    return [...hash].reduce((acc, el) => (acc *= el[1].length + 1), 1) - 1;
}
