const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
(async function connect(){
    try {
        await mongoose.connect(URI, {dbName : "Shipper"});
        console.log("Connected Mongo Database");
    } catch (err){
        console.error("Failed connect mongo databse: " + err)
    }
})();
module.exports = {
    mongoose : mongoose
}
 