
// const jwt = require("jsonwebtoken")
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod")

const  emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)
    if(!usernameResponse.success || !passwordResponse.success){
        return null
    }
    const signature =jwt.sign({
        username
    },jwtPassword)
    return signature
    
}

function verifyJwt(token) {
    try {
        jwt.verify(token,jwtPassword)
        return true
    } catch (error) {
        
    }
    return false
}


function decodeJwt(token) {
    const decode = jwt.decode(token)
    if(!decode){
        return false
    }else{
        return true
    }

}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}