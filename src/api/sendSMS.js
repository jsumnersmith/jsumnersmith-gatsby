const client = require('twilio')(process.env.GATSBY_TWILIO_ACCOUNT_SID,  process.env.GATSBY_TWILIO_AUTH_TOKEN);

module.exports = (req, res) => {
  const body = req.body;

  if (!body.message){
    res.setStatus(400).send("Message Required")
  }
  
  if (!body.number){
    res.setStatus(400).send("Number Required")
  }
  
  return client.messages
    .create({
      body: body.message,
      from: process.env.GATSBY_TWILIO_NUMBER,
      to: body.number
    }).then(message => res.setStatus(200).json({
        status: 'success',
        id:message.sid
    }));
}
