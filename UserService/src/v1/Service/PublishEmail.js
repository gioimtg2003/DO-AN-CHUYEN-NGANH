const amqp = require('amqplib');
const {URI, EXCHANGE, KEY} = require("../../Config/RabbitMQ");

const emit = async (Code, Token, Email) =>{
    const message = {
        Type : "SEND_OTP",
        Code_Verify: Code,
        Token_Verify: Token,
        Email: Email
    };
    let connect;
    try {
        connect = await amqp.connect(URI);
        const chanel = await connect.createChannel();
        await chanel.assertExchange(EXCHANGE, "direct", 
        {
            durable : false
        }
        );
        await chanel.publish(EXCHANGE, KEY[0], Buffer.from(JSON.stringify(message)));
        console.log(`Sent Message Success ${JSON.stringify(message)}`);
        await chanel.close();

    } catch (err){
        console.error(`Error while publish message ${err}`)
    } finally {
        if (connect) connect.close();
    }
}

module.exports = {
    emit
}