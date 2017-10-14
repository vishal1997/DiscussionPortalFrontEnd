const express = require('express');
const app = express();
//const proxy = require('express-http-proxy');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
//app.use('/api/*', proxy('https://localhost:8080'));
//app.use('/userlogoutpage', proxy('https://localhost:8080'));
//app.use('/userloginpage', proxy('https://localhost:8080'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 3410);
//https://www.iinteract.herokuapp.com


//ng serve --port process.env.PORT --proxy-config proxy.config.json || 3410 --proxy-config proxy.config.json