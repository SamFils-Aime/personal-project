const path = require('path')
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const formData = require('express-form-data')
const cors= require('cors')
const app = express()
const axios = require("axios")

// DOTENV
const {
        SERVER_PORT, 
        SESSION_SECRET, 
        CONNECTION_STRING,
        ACCOUNT_SID, 
        AUTH_TOKEN, 
        TWILIO_NUMBER,
        } = process.env;

 // CONTROLLER
const authentication = require("./controller/authcontroller")
const load = require("./controller/insultContoller")
const store= require('./controller/addController')
const remove = require('./controller/deleteController')
const fave=require('./controller/getController')
const change=require('./controller/updateController')

 //TWILIO AUTHKEY       
    const sid=ACCOUNT_SID
    const token= AUTH_TOKEN
    const client =require("twilio")(sid, token);
      
app.use(cors())
app.use(express.json())
app.use(formData.parse())

massive(CONNECTION_STRING)
        .then(db=>{
            app.set('db',db)
            console.log('db works')
        })
        .catch(
            error =>{
                console.log(error)
            })

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
    })
)





//Authentication
app.post('/auth/register',authentication.register)
app.post('/auth/login',authentication.login)
app.get('/auth/logOut',authentication.LogOut)
app.get('/auth/user',authentication.getSession)

//get insults cause cors issue
app.get('/load/insult', load.insult)
//store insults and compliment
app.post('/api/insult', store.addinsult)
app.post('/api/compliment', store.addcompliment)
//delete insults and compliment
app.delete('/api/deleteinsult/:insult_id', remove.deleteinsult)
app.delete('/api/deletecompliment/:compliment_id', remove.deletecompliment)
//get stored insults and compliment
app.get('/api/faveinsult', fave.getinsult)
app.get('/api/favecompliment', fave.getcompliment)
app.get('/api/popinsult', fave.getjoininsult)
app.get('/api/popcompliment', fave.getjoincompliment)
// update username
app.put('/api/update/:user_id', change.edit)

// twillio
app.get('/',(req,res)=>{
    res.send('express is doing stuff')
})
app.get('/send-text',(req,res)=>{
    const {recipient, textmessage}=req.query;
    client.messages.create({
        body:textmessage,
        to:recipient,
        from:TWILIO_NUMBER
    })
    .then(message=> console.log(message))
})

app.use(express.static(__dirname+'/../build'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../build/index.html"))
})

app.listen(SERVER_PORT, () => console.log(`the matrix is running on ${SERVER_PORT}`))
