// the main web server file
const express = require('express')
const path = require('path')

// import the router for handling routes
const indexRouter = require('./routes/index')

const app = express() // create the express app



// set the folder where view templates are stored
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // use handlebars as the view engine

// use indexRouter for all routes starting from '/'
app.use('/', indexRouter)

// start the server on port 2000 (or environment port)
let server = app.listen(process.env.port || 2000, function() {
    console.log('server running')
})
