const account_sid = process.env.GATSBY_TWILIO_ACCOUNT_SID;
const auth_token = process.env.GATSBY_TWILIO_AUTH_TOKEN;
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
module.exports = (req, res) => {
  client()

  client.messages
    .create({
      body: 'I am a Gatsby Function.',
      from: '+14157022985',
      to: '+15183387907'
    }).then(message => 
      res.setStatus(200).json({
        status: 'success',
        id:message.sid
      }));
}
