const express = require("express");
const app = express()

// app.use((req, res) => {
//   console.log("We got a new server")
//   // res.send("Hello, we got your request!")
// })

app.get('/', (req, res) => {
  res.send("This is the home page")
})

app.get('/r/:subreddit', (req, res) => {
 const {subreddit}= req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})


app.get('/r/:subreddit/:postId', (req, res) => {
  const {subreddit, postId}= req.params;
   res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
 })

app.get('/cats', (req, res) => {
  res.send('Meow!!')
})

app.post('/cats', (req, res) => {
  res.send('Post request to /cats!!! This is totally a new one!!')
})

app.get('/dogs', (req, res) => {
  res.send('Woof!!')
})

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}</h1>`)
})

app.listen(8080, () => {
  console.log("listening on port 3000!")
})


app.get('*', (req, res) => {
  res.send(`I don't know that path`)
})