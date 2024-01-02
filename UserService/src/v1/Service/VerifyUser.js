const {v4 : uuidv4} = require("uuid");
const SECRET_KEY = "VERIFY-ACCOUNT-ABC";
const UserSchema = require("../Model/User").UserSchema;

const SendCode = async (id) => {
    let User = await UserSchema.findById(id);
    let code = (Math.floor(Math.random() * 999999) + 100000).toString();
    let token = uuidv4();
    User.Code_Verify = code;
    User.Token_Verify = token;
    User.Exp_Token_Verify = Date.now() + (5 * 60 * 1000);
    await User.save();
}

const VerifyCode = (Code) => {

}

