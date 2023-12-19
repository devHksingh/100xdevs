/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log('inside wait');
            resolve();
        }, n*1000);
    })
    
}

async function callingPromise(){
    try {
        const data = await wait(2) 
        console.log(data);
        
    } catch (error) {
        console.error(error)
    }
    
}
// callingPromise()

module.exports=wait