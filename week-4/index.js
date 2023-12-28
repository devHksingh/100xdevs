// const divEl = document.querySelector('#populateDiv')
const btnEl = document.querySelector('.btn')
const divEl = document.getElementById("finalSum")

let timeout

function debouncePopulateDiv(){
    clearTimeout(timeout)
    const timeout = setTimeout(()=>{
        popdiv2()
    },1000)
}

// function populateDiv() {
//     const a = document.getElementById("first-num").value
//     const b = document.getElementById("sec-num").value
//     // divEl.innerHTML =`${parseInt(a)+parseInt(b)}`
//     // axios
//     fetch("https://sum-server.100xdevs.com/sum?a="+a+"&b="+b)
//         .then((res)=>{
//             console.log(res);
//             res.text()
//                 .then((ans)=>{
//                     console.log(ans);
//                     divEl.innerHTML=ans
//                 })
//         })

// }

// async function popdiv2(){
//     const a = document.getElementById("first-num").value
//     const b = document.getElementById("sec-num").value

//     const response = await fetch("https://sum-server.100xdevs.com/sum?a="+a+"&b="+b)
//     const ans = await response.text()
//     document.getElementById('finalSum').innerHTML = ans
// }

async function calculateSum (){
    const num1 = document.querySelector("#first-num")
    const num2 = document.querySelector("#sec-num")

    try {

        const request = await fetch('/calculate-sum',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({num1,num2})
        })
        const ansJson = await request.json()
        const finalSum = await ansJson.sum
        divEl.innerHTML= finalSum

        
    } catch (error) {
        console.error("Error :",error)
    }


}