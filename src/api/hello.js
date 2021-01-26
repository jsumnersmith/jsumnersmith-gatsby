module.exports = (req, res) => {
  res.status(200).send({
    date: Date.now(),
  })
}