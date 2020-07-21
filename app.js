const express = require('express');
//hbs activation
const hbs = require('hbs');
const app = express();
app.use(express.static('public'));
//hbs template set
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/home', (request, response) => {
  //response.sendFile(__dirname + '/views/home.html');
  //response.send('Test Home');
  response.render('layout');
});
app.get('/about', (request, response) => {
  //response.sendFile(__dirname + '/views/about.html');
  //response.send('Test About');
  response.render('layout');
});
app.get('/works', (request, response) => {
  //response.sendFile(__dirname + '/views/works.html');
  //response.send('Test Works');
  response.render('layout');
});
app.get('/photogallery', (request, response) => {
  //response.sendFile(__dirname + '/views/photogallery.html');
  //response.send('Test Photogallery');
  response.render('layout');
});
app.listen(3001);
