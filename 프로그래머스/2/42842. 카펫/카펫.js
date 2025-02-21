function solution(brown, yellow) {
    const answer = [];
    for(let brownHeigth = 3; brownHeigth <= Math.floor(brown/2); brownHeigth++){
        let brownWidth = ((brown - (brownHeigth * 2))/2)+2 
        let yellowHeigth = brownHeigth - 2; 
        let yellowWidth = brownWidth - 2; 
        console.log(brownHeigth, brownWidth, yellowHeigth, yellowWidth)
        if(yellowHeigth * yellowWidth === yellow){
            answer.push(brownWidth,brownHeigth)
            break;
        }
    }
    return answer
}