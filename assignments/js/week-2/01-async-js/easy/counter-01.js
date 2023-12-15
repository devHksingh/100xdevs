setInterval(()=>{
    console.log(clock())
},1000)

function clock(){
    const currentDate = new Date()
    return `Date: ${currentDate.getDate()}/${currentDate.getMonth()+1}/ ${currentDate.getFullYear()} Time: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}
    `
}
const currentDate = new Date()
