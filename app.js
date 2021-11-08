const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
const {init} = require('./init')

const PORT = config.get("port") || 3000

const app = express()
app.use(express.json({extended:true}))
app.use('/api/data', require('./routes/data.routes'))
app.use('/api/public',express.static('public'))



async function start(){
    try{
        await mongoose.connect(config.get('mongodb'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.locals.DB = await init()
        const updateDB = setInterval(async ()=>{
            app.locals.Db = await init()
        },1000*60*30)
        app.listen(PORT, ()=>console.log(`Has started ${PORT}`))
    }catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()