// setInterval(() => {
//     const currentDate = new Date();
//     console.log(`Date: ${currentDate.getDate()}/${currentDate.getMonth() + 1}/ ${currentDate.getFullYear()} Time: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
// }, 1000);


function printTime(){
    const currentDate = new Date();
    console.log(`Date: ${currentDate.getDate()}/${currentDate.getMonth() + 1}/ ${currentDate.getFullYear()} Time: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
    setTimeout(printTime,1000)
}

printTime()