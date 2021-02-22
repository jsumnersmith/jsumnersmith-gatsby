// require('dotenv');
// const account_sid = process.env.GATSBY_TWILIO_ACCOUNT_SID;
// const auth_token = process.env.GATSBY_TWILIO_AUTH_TOKEN;
const client = require('twilio')(process.env.GATSBY_TWILIO_ACCOUNT_SID,  process.env.GATSBY_TWILIO_AUTH_TOKEN);

module.exports = (req, res) => {
  const body = req.body;
  
  if (body && body.message) {
    return client.messages
    .create({
      body: body.message,
      from: '+14157022985',
      to: '+15183387907'
    }).then(message => 
      res.setStatus(200).json({
        status: 'success',
        id:message.sid
      }));
  }

  return client.messages
    .create({
      body: "I'm a gatsby function",
      from: '+14157022985',
      to: '+15183387907'
    }).then(message => 
      res.sendStatus(200).json({
        status: 'success',
        id:message.sid
      }));
}
