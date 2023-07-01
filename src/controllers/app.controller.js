const dotenv = require('dotenv')
dotenv.config()

const sendSMS = (req, res) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({ body: 'Hola Mundo desde la Marathon 16', from: process.env.TWILIO_PHONE, to: '+51942270712' })
        .then(message => res.send(message.sid));
}

module.exports = { sendSMS }