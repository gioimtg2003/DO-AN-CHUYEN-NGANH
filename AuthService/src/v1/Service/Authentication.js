const Auth = require("../Model/Auth").AuthSchema;
const jwt = require("jsonwebtoken");
const bcrypt =  require("bcryptjs");
const SECRET_KEY = process.env.SECRET_KEY;

function initExp () {
    const expires = new Date();
    let hour = 24 - expires.getHours();
    let minute = expires.getMinutes();
    let second = expires.getSeconds();
    let expiresIn = 24 * 60 * 60 - hour * 60 * 60 - minute * 60 - second;
    return expiresIn;
}

const Authentication = async(email, password, callback) => {
    try {
        const Authenticate = await Auth.findOne({email});
        if (!Authenticate){
            callback("Invalid User", null);
            return;
        }
        if (Authenticate && await bcrypt.compare(password, Authenticate.Password)) {
            Authenticate.Access_Token = jwt.sign(
                {
                    id : Authenticate.__id,
                    email : Authenticate.Email
                },
                SECRET_KEY,
                {
                    expiresIn : "1h",
                    algorithm: "HS256"
                }
            );
            Authenticate.Refresh_Token = jwt.sign(
                {
                    id : Authenticate.__id,
                    email : Authenticate.Email
                },
                SECRET_KEY,
                {
                    expiresIn : initExp(),
                    algorithm: "HS256"
                }
            );   
            console.log(`Login Success: ${Authenticate.Email}`)
            callback (null, Authenticate);   
            return;
        }else {
            callback("Invalid Password", null);
            return;
        }

    } catch (err){
        console.error(err);
        callback(err, null);   
    }
}


module.exports = {
    Authentication : Authentication
}