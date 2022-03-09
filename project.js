console.log('This is analog clock');
// for hour hand
// h hour = (30*h + m minute/2) degree;
// for minute hand
// m minute = 6 * m degree
// for second hand
// s second = 6 *s  degree

setInterval(() => {
    let date = new Date();
    let hourtime = date.getHours();
    let minuteTime = date.getMinutes();
    let secondTime = date.getSeconds();
    let hourRotation = 30 * hourtime + minuteTime / 2;
    let minuteRotation = 6 * minuteTime;
    let secondRotation = 6 * secondTime;
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;

}, 1000);