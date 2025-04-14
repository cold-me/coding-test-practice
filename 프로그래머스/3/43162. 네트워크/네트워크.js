function solution(n, computers) {
    const graph = Array.from({ length : n}, () => [] )
    const visited = Array.from({length : n}, ()=> false)
    let answer = 0;
    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers.length; j++) {
            if (computers[i][j] === 1 && i !== j) graph[i].push(j);
        }
    }
    const dfs = (v) => {
        visited[v] = true;
        for(let i = 0; i < graph[v].length ; i++){
            if(!visited[graph[v][i]]) dfs(graph[v][i])
        }
    }
    for(let i = 0 ; i< graph.length ; i++){
        if(!visited[i]) {
            dfs(i);
            answer += 1;
        }
    }
    return answer;
}