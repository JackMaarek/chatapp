require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbConnect = require('./services/mongodb.serv');
const path = require('path');
const mainRouter = require('./routes/main.router');
const app = express();
const cors = require('cors');
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

//=> Body parser
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

//=> Cookie parser
app.use(cookieParser());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//=> Routes
app.use('/', mainRouter);


dbConnect()
.then( db =>{
  app.listen(process.env.PORT || 8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
  console.log('Mongodb is up')
} )
.catch( err => console.log(`Error Mongo ${err}`))
