const express = require('express');
const app = express();
const path = require('path');

const blogposts = require('./scripts/blogposts/blogposts.js')

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
  //...
 });

app.post('/submit', (req,res) => {
    Logger.log({
        name: req.body.name,
        message: req.body.message,
    });
    res.send('Thanks for your message :)');
})

app.get('/teste', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/teste.html'));
})

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/blogs', (req, res) => {
  res.send(blogposts.getAllFolders());
});

app.get('/blogs/:nome_blog', (req, res) => {
  res.send(blogposts.getAllFiles(req.params.nome_blog));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});