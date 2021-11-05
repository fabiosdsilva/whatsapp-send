const express = require('express')
const app = express()
const router = require('./controller/home')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', router)



app.listen(8081, ()=>{
    console.log('Está rodando na porta 8081');
})