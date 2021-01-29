module.exports = (req, res) => {
  const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  client.messages
    .create({
      body: 'I am a Gatsby Function.',
      from: '+14157022985',
      to: '+15183387907'
    })
    .then(message => 
      res.setStatus(200).json({
        status: 'success',
        id:message.sid
      }));
}
