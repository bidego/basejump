var fa = require('fs')
var path = require('path')
var server = require('express')
var app = server()
var port = process.env.PORT || 3500

var moment = require('moment')

app.listen(port, function() {
	console.log('Listening PORT '+port)
}

app.get('/', function(req, res) {
	var fileName = path.join(__dirname, 'index.html')
	res.sendFile(fileName, function (err) {
		if (err) {
			console.log(err)
			res.status(err.status).end()
		}
		else {
			console.log('Enviado: ', fileName')
		}
	})
})

