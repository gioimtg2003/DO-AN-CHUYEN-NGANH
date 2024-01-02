const UserSchema = require("../Model/User").UserSchema;
const {v4 : uuidv4} = require("uuid");
const bcrypt = require("bcryptjs");
const CreateShopOwner = async (Name, Email, Password, Phone, Address, Gender, ShopName, ShopAddress, Scope, callback) =>{
    try {
        let existUser = await UserSchema.findOne({Email});
        if (existUser) {
            callback("Account already exists", null); return;
        }
        let Uri_Verify = uuidv4();
        const salt = bcrypt.genSaltSync(10);
        let hashPassword = await bcrypt.hashSync(Password, salt);
        const ShopOwner = new UserSchema({
            Name : Name,
            Email: Email,
            Password : hashPassword,
            Phone : Phone,
            Address: Address,
            Gender : Gender,
            Shop_Name: ShopName,
            Shop_Address: ShopAddress,
            Scope : Scope,
            Uri_Verify : Uri_Verify,
            Verify : false
        });
        let document = await ShopOwner.save();
        console.log(`Account Successfully Created with id: ${document._id.toString()}`)
        callback(null, document);
    } catch (err){
        console.error(`Error while creating account: ${err}`);
        callback(err, null);
    }
}

module.exports = {
    CreateShopOwner : CreateShopOwner,
}