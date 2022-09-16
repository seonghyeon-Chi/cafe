const { sequelize } = require('./models')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const https = require('https')
const fs = require('fs')
const session = require('express-session');
// const MemoryStore = require('memorystore')(session);
// const MySQLStore = require('express-mysql-session')(session);
const fileStore = require('session-file-store')(session)
require('dotenv').config()

const controller = require('./controller')

const app = express()

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new fileStore(),
  // new MemoryStore({ checkPeriod: 1000 * 60 * 5 }),
  cookie: {
    path: '/',
    httpOnly: true,
    // expires : new Date(Date.now() + (60 * 30))
    secure: true
  }
}))


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ['https://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT' ,'OPTIONS', 'DELETE']
}))

app.post('/login', controller.login)
app.get('/logout', controller.logout)
app.get('/item', controller.item)
app.post('/order', controller.order)
app.post('/payment', controller.payment)


const options = {
  key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
  cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8')
};

let server = https.createServer(options, app).listen(4000, function() {
  console.log('https 구동')
});


// server= app.listen(4000, function(){ 
//     console.log('Server is running...');
// });

module.exports = server