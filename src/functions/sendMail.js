const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'joel@gatsbyjs.com',
  from: 'jsumnersmith@gmail.com', // Use the email address or domain you verified above
  subject: 'This is a Gatsby Function',
  text: 'Gatsby go brrrrrrrrr',
  html: '<strong>Gatsby go brrrrrrrrr</strong>',
}

// module.exports = (req, res) => {
  return sendgrid
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      return res.status(500).json({
        error: error.response
      })
    }
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  });
  
  // res.status(200).json({
  //   message: "I will send email"
  // })
// }