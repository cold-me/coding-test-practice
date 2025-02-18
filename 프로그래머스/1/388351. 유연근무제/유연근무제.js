const timeToMinutes = (time) => Math.floor(time / 100) * 60 + (time % 100);
function solution(schedules, timelogs, startday) {
    let count = 0;
    for (let i = 0; i < schedules.length; i++) {
        const startTime = timeToMinutes(schedules[i]);
        const endTime = startTime + 10;
        let today = startday;
        let flag = false;
        for (let j = 0; j < timelogs[i].length; j++) {
            if (today % 7 === 6 || today % 7 === 0) {
                today++;
                continue;
            }
            const day = timeToMinutes(timelogs[i][j]);
            if (endTime < day) {
                flag = true;
                break;
            }
            today++;
        }
        if (!flag) count++;
    }
    return count;
}
