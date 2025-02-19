function solution(s) {
    return s
        .split(' ')
        .map((string) =>
            string
                .split('')
                .map((s, i) => (i === 0 && isNaN(s) ? s.toUpperCase() : s.toLowerCase()))
                .join('')
        )
        .join(' ');
}
