// const {} = require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const port = 1000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

//
app.get('/',(req,res)=>{
    res.render('home');
})
app.listen(port,()=>{
    console.log(`ggggggggggggg ${port}`)
})