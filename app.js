const express = require("express")
const { get } = require("http")
const app = express()
let date = new Date().toString()

console.log(new Date(1451001600000))
console.log(new Date("2015-12-25").getTime())

date.includes

app.get('/api/:date', (req,res)=>{
    let fetchUrl = req.params.date
    if(fetchUrl.includes("-")){
        utcDate = new Date(fetchUrl).getTime()
        let unixGetTime = utcDate
        utcDate = Math.floor(utcDate)
        utcDate = new Date(fetchUrl).toUTCString()
        res.json({unix: unixGetTime, "utc": utcDate})
    }else{
        fetchUrl = Math.floor(req.params.date)
        let utcDate = new Date(fetchUrl).toUTCString()
        res.json({unix: fetchUrl, "utc": utcDate})
    }
    
})

app.use('/index.css',express.static(__dirname + "/index.css"))

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(5000)