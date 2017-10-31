const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use('/api/*', proxy({target:'http://localhost:8080', changeOrigin:true}));
app.use('/userlogoutpage', proxy({target:'http://localhost:8080', changeOrigin:true}));
app.use('/userloginpage', proxy({target:'http://localhost:8080', changeOrigin: true}));
// Start the app by listening on the default
// Heroku port
app.listen(3410);
//ng serve --port process.env.PORT --proxy-config proxy.config.json || 3410 --proxy-config proxy.config.json