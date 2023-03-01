const express = require('express')
const path = require('path')
const port = 8200;
const app = express()

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('demo')
})

app.listen(port, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})
