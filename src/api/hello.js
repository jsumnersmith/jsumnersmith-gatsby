module.exports = (req, res) => {
  console.log("I'm trying.")
  if(req.method === "GET"){
    res.status(200).json({
      message: "Hello",
    })
  }
}