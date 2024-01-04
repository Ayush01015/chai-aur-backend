require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login",(req,res)=>{
    res.send("<h1>Successful Login, Welcome Ayush Shrivastav</h1>")
})

app.get("/chai",(req,res)=>{
    res.send("<h2>Chai with Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})