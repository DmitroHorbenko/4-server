const express = require('express')
// const cours = require('course')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./db')
const routes = require('./routes')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(routes)

app.use((req, res, next)=>{
    res.status(404).json({error: 'Not found'})
})

app.use((err, req, res, next)=>{
    // console.error(err.code, err)
    if(!err.code){
        res.status(500)
    } else {
        res.status(err.code)
    }
    res.json({error: 'Ops'})
})
db.connection.once('open', function() {
    app.listen(port, ()=> console.log(`Server running at http://${port}/`))
});
