const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const routes=require('./routes')
const cors = require('cors')
const app=express()
app.use(cors())
app.set('port',9000)

const dbOptions={
    host:'localhost',
    port:'3306',
    user:'Sebastian',
    password:'xivuti92',
    database:'marcadores'
}

/// middlewares ---------------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json()) /// formato de entrega y de recepción

/// routes ---------------------------
app.get('/',(req,res)=>{
   res.send('Welcome to my APP 2022')
})

app.use('/api',routes)


 
app.listen(app.get('port'),()=>{
    console.log(`El puerto corre en: ${app.get('port')}`)
})