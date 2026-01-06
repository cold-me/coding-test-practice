function solution(bridge_length, weight, truck_weights) {
    const truckCount = truck_weights.length;
    const bridge = Array.from({ length : bridge_length }, () => 0)
    let time = 0;
    let bridgeWeight = 0;
    let arrivedTruckCount = 0;
    while(truckCount != arrivedTruckCount){
        const out = bridge.shift();
        if(out){
            bridgeWeight -= out
            arrivedTruckCount += 1;
        }
        if(truck_weights[0] !== undefined && weight >= bridgeWeight + truck_weights[0]){
            const arrived = truck_weights.shift()
            bridge.push(arrived);
            bridgeWeight += arrived
        }else{
            bridge.push(0)
        }
        time++
        
    }
    return time
}
