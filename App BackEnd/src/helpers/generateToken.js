let jwt = require('jsonwebtoken')

let generateAccessToken=(data)=>{
    return jwt.sign(data,process.env.ACCESS_TOKEN_KEY)
}
let generateRefreshToken=(data)=>{
    return jwt.sign(data,process.env.REFRESH_TOKEN_KEY)
}
module.exports={generateAccessToken,generateRefreshToken}
