const { google } = require('googleapis');
require('dotenv');

module.exports = (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets'
    ]
  });
  
  const sheets = google.sheets({
    auth,
    version: 'v4'
  });

  const response = async () => await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'A1:C1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        ['01/01/2020', 'Bob Smith', '$100'],
        ['02/02/2020', 'Jane Doe', '$200']
      ]
    }
  });
  response()
    .then(data => res.status(201).json({
      data: data
    }))
}