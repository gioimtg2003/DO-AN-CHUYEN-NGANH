const UserSchema = require("../Model/User").UserSchema;
const bcrypt = require("bcryptjs");
const CreateShopOwner = async (Name, Email, Password, Phone, Address, Gender, ShopName, Scope, callback) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        let hassPassword = await bcrypt.hashSync(Password, salt);
        const ShopOwner = new UserSchema({
            Name : Name,
            Email: Email,
            Password : hassPassword,
            Phone : Phone,
            Address: Address,
            Gender : Gender,
            Shop_Name: ShopName,
            Shop_Address,
            Scope : false,
            Verify : false
        });
        await ShopOwner.save()
    } catch (err){
        console.error(`Error while creating account: ${err}`);
        callback(err, null);
    }
}