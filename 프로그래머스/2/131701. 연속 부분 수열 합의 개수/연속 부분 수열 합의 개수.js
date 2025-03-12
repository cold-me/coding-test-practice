class Queue {
    constructor(){
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue(item){
        this.queue.push(item)
        this.tail++;
    }
    dequeue(){
        if(this.size() === 0) return false; 
        const d = this.queue[this.head++];
        return d
    }
    size(){
        return this.tail - this.head;
    }
    print(){
        return this.queue.slice(this.head, this.tail);
    }
    printElement(idx){
        return this.queue[this.head + idx]
    }
}



function solution(elements) {
    let count = elements.length
    const set = new Set();
    const queue = new Queue();
    for(const element of elements) queue.enqueue(element);
    
    while(count){   
        let sum = 0;
        for(let i = 0; i < elements.length; i++){
            sum += queue.printElement(i);
            set.add(sum);
        }
        const q = queue.dequeue();
        queue.enqueue(q);
        count--;
    }
    
    return set.size
}



