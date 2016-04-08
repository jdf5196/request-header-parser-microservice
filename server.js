'use strict';

const express = require('express');
const ip = require('ip');
const app = express();

let port = (process.env.PORT || 5000);

app.set('port', port);

app.use(express.static(process.cwd() + '/Public'));

app.get('/whatami', function(req, res){
	res.json({
		'IP Address': ip.address(),
		'Language': req.headers["accept-language"].split(",")[0],
		'Software': req.headers["user-agent"].match(/\((.*?)\)/)[1]
	})
});

app.listen(app.get('port'), function(){
	console.log('Server listening on port ' + port);
})