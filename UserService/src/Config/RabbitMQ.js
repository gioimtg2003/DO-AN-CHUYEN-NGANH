module.exports = {
    URI : process.env.RABBITMQ_URI,
    EXCHANGE: "Send_Mail",
    KEY: ["Send_Code", "Verify_User", "Forgot_Password"]
}