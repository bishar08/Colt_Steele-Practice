const express = require("express");
const app = express()

app.use(() => {
  console.log("We got a new server")
})

app.listen(8080, () => {
  console.log("listening on port 3000!")
})