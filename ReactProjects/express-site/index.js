const express = require('express')
const app = express()
const port = 3000

app.use(express.static('files'))


app.get('/', (req, res) => {
  res.send('Hello World! This is my first React website')
})

app.get('/home', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})