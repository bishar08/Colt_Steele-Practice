const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/movieApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('COnnection Open!!')
  })
  .catch((err) => {
    console.log('Ohh noo error!!!')
    console.log(err)
  })
