const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connecDB = require('./server/db/connection')

const app = express()

dotenv.config()
const PORT = process.env.PORT || 8080

//log the request
app.use(morgan('tiny'))

//parse request to body-parser
app.use(bodyparser.json())

//set view engine
app.set('view engine', 'ejs')
    //if put ejs file in other folde
    // app.set('views', path.resolve(__dirname, "views/ejs")) //2nd argument is folder path

// load assets
app.use('/css' ,express.static(path.resolve(__dirname, "assets/css")))
//   css/style.css
app.use('/js' ,express.static(path.resolve(__dirname, "assets/js")))
app.use('/img' ,express.static(path.resolve(__dirname, "assets/img")))



app.get('/', function(req, res){
    // res.send('working')
    res.render('index')
})

app.get('/signup', function(req, res){
    res.render('add_user')
})


//start server when conected to database
const serverStart = async function(){
    try {
        await connecDB(process.env.MONGODB_URI)

        app.listen(PORT, function(){
            console.log(`Server is running on port http://localhost:${PORT}...`)
        })
    } catch (error) {
        console.error(error)
    }
}
serverStart()
