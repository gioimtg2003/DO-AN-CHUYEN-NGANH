
var mongoose = require("../../Config/Database").mongoose;
var m = require("mongoose").Schema;
var Shop_Owner = new mongoose.Schema({
    User_Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Access_Token: {
        type: String,
        required: true
    },
    Refresh_Token: {
        type: String,
        required: true
    }
});
module.exports = {
    AuthSchema :  mongoose.model("shop_owner_auths", Shop_Owner)
}