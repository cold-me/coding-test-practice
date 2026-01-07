
function solution(storage, requests) {
    const rowLen = storage.length;
    const colLen = storage[0].length;
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    const warehouse = storage.map((el, i)=> el.split(''))
    
    
    const explore = (a) => {
        const isPath = [];
        const target = a[0];
        const isLengthOne = a.length === 1 ? true : false;
        warehouse.forEach((row, r)=>{
            row.forEach((alphabet, c)=>{
                if(alphabet !== target) return;
                if (isLengthOne && bfs(r, c)) isPath.push([r,c])
                else if(!isLengthOne) isPath.push([r,c])
            })
        })
        isPath.forEach((el, _)=> warehouse[el[0]][el[1]] = null);
    }    

    const bfs = (startX, startY) => {
        for(let k = 0; k < 4; k++){
            const nx = startX + dx[k];
            const ny = startY + dy[k];
            if(nx < 0 || ny < 0 || nx >= rowLen || ny >= colLen) return true
        }
        const queue = [];
        const visited = Array.from({length : rowLen}, ()=> Array(colLen).fill(false));
        for (let k = 0; k < 4; k++){
            const nx = startX + dx[k];
            const ny = startY + dy[k];
            if(nx >= 0 && nx < rowLen && ny >= 0 && ny < colLen && warehouse[nx][ny]=== null){
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
        while(queue.length > 0){
            const [x, y] = queue.shift();
            if (x === 0 || x === rowLen - 1 || y === 0 || y === colLen -1) return true;
            for(let k = 0; k < 4; k++){
                const nx = x + dx[k];
                const ny = y + dy[k];
                if(nx >= 0 && nx < rowLen && ny >= 0 && ny < colLen && !visited[nx][ny] && warehouse[nx][ny] == null){
                    visited[nx][ny] = true;
                    queue.push([nx, ny])
                }
            }
        }
        return false    
    }

    requests.forEach((r)=> explore(r));
    let answer = 0;
    warehouse.forEach((row, _) => {
        row.forEach((a, _) => {
            if(a) answer++;
        })
    })
    return answer;
}

