const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
  console.log('test');
  //response.send('Test Home');
});
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
  ///response.send('Test About');
});
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
  response.send('Test Works');
});
app.get('/photogallery', (request, response) => {
  response.sendFile(__dirname + '/views/photogallery.html');
  response.send('Test Photogallery');
});
app.listen(3000);
