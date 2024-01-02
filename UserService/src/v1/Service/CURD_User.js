const UserSchema = require("../Model/User").UserSchema;
const bcrypt = require("bcryptjs");
const CreateShopOwner = async (Name, Email, Password, Phone, Address, Gender, ShopName, callback) =>{
    try {
        let existUser = await UserSchema.findOne({Email});
        if (existUser) {
            callback("Account already exists", null); return;
        }
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
            Shop_Address,
            Scope : false,
            Verify : false
        });
        let document = await ShopOwner.save();
        console.log(`Account Successfully Created with id: ${document.__id}`)
        callback(null, document);
    } catch (err){
        console.error(`Error while creating account: ${err}`);
        callback(err, null);
    }
}