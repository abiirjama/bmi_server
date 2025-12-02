// handle receiving data from the user
// doing the math
// sending the result back to the user

const express = require('express')
const router = express.Router()

// home page route
router.get('/', function(req, res, next) {
    // render means display a web page
    res.render('index')
})

// route for bmi calculation
router.get('/calculate_bmi', function(req, res, next) {
    // get form data from query string
    let formData = req.query
    console.log(formData)

    // read height and weight values from form
    let height = formData.height
    console.log(height)
    let weight = formData.weight
    console.log(weight)
    
    // calculate bmi and round to 2 decimals
    let bmi = weight / (height * height)

    // render result page and send bmi value
    res.render('result', { bmi: bmi })
})


// export router for use in server.js
module.exports = router
