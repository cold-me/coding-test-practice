/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let positive = true, overflow = false;
    const limit = Math.pow(2, 31);
    if(x < 0){
        positive = false;
        x *= -1;
    }
    const reversedArr = String(x).split('').reverse();
    const positiveAnswer = Number(reversedArr.join(''))
    if(positiveAnswer > limit || positiveAnswer < -limit) overflow = true
    if(overflow) return 0
    return positive ? positiveAnswer : positiveAnswer * -1
};