const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => { 
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization" ); 
  next(); 
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

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});