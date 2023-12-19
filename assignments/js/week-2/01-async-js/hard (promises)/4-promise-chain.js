/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
}

function waitTwoSecond(n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    },n*1000)
}

function waitThreeSecond(n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
}

async function calculateTime(n,m,p) {
    try {
        const startDate = new Date()
        await waitOneSecond(n)
        await waitTwoSecond(m)
        await waitThreeSecond(p) 
        const endDtate = new Date()
        return endDtate - startDate
    } catch (error) {
        console.error(error)
    }
    

}

module.exports = calculateTime

// const result = calculateTime(1,2,3)
// console.log(result);