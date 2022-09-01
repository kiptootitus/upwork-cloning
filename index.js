const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url = 'mongodb+srv://archy:archy123@arcade.te1xd84.mongodb.net/?retryWrites=true&w=majority';
const connection = mongoose.createConnection(url, { useNewUrlParser: true ,  useUnifiedTopology: true});
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
} );

app.get('/about', (req, res) => {
    res.render('pages/about');
} );
app.get('/login', (req, res) => {
    res.render('pages/login');
} );



app.listen(port, () => console.info('Server listening on 8080'));	// server listening on port 8080    // server listening on port 8080
 