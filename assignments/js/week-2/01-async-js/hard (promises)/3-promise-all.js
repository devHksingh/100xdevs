/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })

}

function waitTwoSecond(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
}

function waitThreeSecond(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
}

async function calculateTime(n,m,p) {
    const startDate = new Date()
    await Promise.all([waitOneSecond(n),waitTwoSecond(m),waitThreeSecond(p)])
    const afterDate = new Date()  
    return afterDate-startDate         
}

module.exports = calculateTime