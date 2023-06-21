const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',express.static('public'))

app.use('/',express.static(__dirname+'/public'))

app.use('/a',require('./routes/index'))

app.listen(3000,(req,res)=>{
    console.log('SERVER RUNNING ON PORT https://localhost:3000');
})