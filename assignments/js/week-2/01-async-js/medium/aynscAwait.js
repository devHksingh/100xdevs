


const userLogin = () =>{
    console.log(`Enter UserName and Password`);
    // const userName = prompt('Enter userName')
    // const password = prompt('Enter password')
    const userName = 'abc'
    const password = '123'

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Performing user authentication`);
            if(userName === 'abc' && password === '123'){
                resolve(`User Authenticated!`)
            }else{
                reject(`Authentication Failed`)
            }
        },1000)
    })
}

function goToHomePage(userAuthStatus){
    return  Promise.resolve(`Go to homepage as : ${userAuthStatus}`)

}

async function checkUser(){
    
    try {

        console.log(`before userLogin call`);
        const result = await userLogin()
        console.log(`after userLogin call`);
        const status =  goToHomePage(result)
        console.log(status);
        
    } catch (error) {
        console.log(error);
    }
}

checkUser()