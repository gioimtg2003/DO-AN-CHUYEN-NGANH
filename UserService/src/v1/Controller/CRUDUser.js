const CURDService = require("../Service/CURDUser");

const CreateUser = async (req, res) => {
    const { Name, Email, Password, Phone, Address, Gender, ShopName, ShopAddress ,Scope } = req.body;
    if (!Name || !Email || !Password || !Phone || !Address || !Gender || !ShopName || !Scope || !ShopAddress) {
        return res.status(400).json({
            Success: false,
            Message:  "Missing required parameters!"
        });
    }
    CURDService.CreateShopOwner(Name, Email, Password, Phone, Address, Gender, ShopName, ShopAddress, Scope, (err, data) => {
        if (err) {
            return res.status(500).json({
                Success: false,
                Message: {
                    err: err
                }
            });
        }
        return res.status(200).json({
            Success : true,
            Message : "Successfully Account Created!",
            data : data
        })
    });

};

module.exports = {
    CreateUser : CreateUser
}