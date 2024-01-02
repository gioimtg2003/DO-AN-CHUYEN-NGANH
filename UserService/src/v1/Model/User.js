var mongoose = require("../../Config/Database").mongoose;
var Schema = mongoose.Schema;
var Shop_Owner = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Phone: {
    type: String
  },
  Address: {
    type: String,
    required: true
  },
  Gender: {
    type: Boolean,
    required: true
  },
  Shop_name: {
    type: String,
    required: true
  },
  Shop_Address: {
    type: String,
    required: true
  },
  Scope: {
    type: Boolean,
    default : false
  },
  Code_Forgot: {
    type: Number
  },
  Token_Forgot: {
    type: String
  },
  Exp_Token_Forgot: {
    type: Number
  },
  Code_Verify: {
    type: Number,
    required: true
  },
  Token_Verify: {
    type: String,
    required: true
  },
  Exp_Token_Verify: {
    type: Number,
    required: true
  },
  Verify: {
    type: Boolean,
    default : false
  }
});

module.exports = {
    UserSchema : mongoose.model("shop_owners", Shop_Owner)
}