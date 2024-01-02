const {v4 : uuidv4} = require("uuid");
const SECRET_KEY = "VERIFY-ACCOUNT-ABC";
const SendCode = async (UserSchema) => {
    let code = (Math.floor(Math.random() * 999999) + 100000).toString();
    let token = uuidv4();
    UserSchema?.Code_Verify = code;
    UserSchema?.Token_Verify = token;
    UserSchema?.Exp_Token_Verify = Date.now() + (5 * 60 * 1000);
    return await UserSchema.save();
}

const VerifyCode = (Code) => {

}

