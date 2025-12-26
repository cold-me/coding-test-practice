function solution(priorities, location) {
    const queue = [];
    for(let i = 0; i < priorities.length ; i++){
        queue.push({index : i, priority: priorities[i]})
    }
    let count = 0;
    while(queue.length){
        const max = Math.max(...queue.map((el)=> el.priority));
        const pop = queue.shift();
        if(pop.priority < max){ 
            queue.push(pop)
            continue
        }
        count++;
        if(pop.index === location) break;
    }
    return count
}