// const sendgrid = require('@sendgrid/mail');
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'joel@gatsbyjs.com',
//   from: 'jsumnersmith@gmail.com', // Use the email address or domain you verified above
//   subject: 'This is a Gatsby Function',
//   text: 'Gatsby go brrrrrrrrr',
//   html: '<strong>Gatsby go brrrrrrrrr</strong>',
// }

module.exports = (req, res) => {
  // sendgrid
  // .send(msg)
  // .then(() => {}, error => {
  //   console.error(error);

  //   if (error.response) {
  //     return res.status(500).json({
  //       error: error.response
  //     })
  //   }
  //   return res.status(201).json({
  //     results: "Mail Sent"
  //   })
  // });
  res.status(200).json({
    message: "I will send email"
  })
}