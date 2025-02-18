const timeToMinutes = (time) => Math.floor(time / 100) * 60 + (time % 100);
function solution(schedules, timelogs, startday) {
    let count = 0;
    return schedules.filter((schedule, i) => {
        const startTime = timeToMinutes(schedule);
        const endTime = startTime + 10;
        let today = startday;
        return timelogs[i].every((timelog) => {
            if (today % 7 === 6 || today % 7 === 0 || timeToMinutes(timelog) <= endTime) {
                today++;
                return true;
            }else return false
        });
    }).length;
}
