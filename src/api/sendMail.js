const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.GATSBY_SENDGRID_API_KEY);
const msg = {
  to: 'joel@gatsbyjs.com',
  from: 'jsumnersmith@gmail.com', // Use the email address or domain you verified above
  subject: 'This is a Gatsby Function',
  text: 'Gatsby go brrrrrrrrr',
  html: '<strong>Gatsby go brrrrrrrrr</strong>',
}

module.exports = (req, res) => {
  if (req.method == "GET") {
    res.json({message: "Try a POST!"})
  }
  if (req.method == "POST"){
    console.log("BODY", req.body); //returns undefined.
    let message = msg;
    if (req.body && req.body.msg) {
      message = req.body.msg;
    } 
    return sendgrid
      .send(message)
      .then(() => {
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        res.status(200).json({
        message: "I will send email"
      })}, error => {
        console.error(error);
        if (error.response) {
          return res.status(500).json({
            error: error.response
          })
        }
      });
  }
}