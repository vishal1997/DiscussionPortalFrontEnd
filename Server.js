const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');

app.use(express.static(__dirname + '/dist'));
app.use('/api/*', proxy({target:'http://52.14.104.252:8080', changeOrigin:true}));
app.use('/userlogoutpage', proxy({target:'http://52.14.104.252:8080', changeOrigin:true}));
app.use('/userloginpage', proxy({target:'http://52.14.104.252:8080', changeOrigin:true}));

app.listen(3410);
//ng serve --port process.env.PORT --proxy-config proxy.config.json || 3410 --proxy-config proxy.config.json