const classifier = (arr) => {
    const stack = [];
    const set = [['[',']'],['(',')'], ['{','}']];
    for(let i = 0; i < arr.length ; i++){
        if(i === 0) {
            stack.push(arr[i]);
            continue;
        }
        if((stack.at(-1) === set[0][0] && arr[i] === set[0][1])||
          (stack.at(-1) === set[1][0] && arr[i] === set[1][1])||
          (stack.at(-1) === set[2][0] && arr[i] === set[2][1])){
            stack.pop();
        }else stack.push(arr[i]);
    }
    return stack.length === 0? 1 : 0
}

class Queue {
    constructor(){
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue(s) {
        this.queue.push(s)
        this.tail += 1;
    }
    dequeue(){
        if(this.size()){
            const idx = this.head;
            this.head += 1
            return this.queue[idx]
        }else return -1
    }
    size(){
        return this.tail === this.head ? 0 : this.queue.length;
    }
    print(){
        return this.queue.slice(this.head, this.tail)
    }
} 
const solution = (s) => {
    const queue = new Queue();
    for(const x of s) queue.enqueue(x);
    let cnt = s.length;
    let answer = 0;
    while(cnt){
        if(classifier(queue.print())) answer += 1;
        queue.enqueue(queue.dequeue());
        cnt--;
    }
    return answer
}