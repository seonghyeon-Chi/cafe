const { sequelize } = require('./models')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const https = require('https')
const fs = require('fs')
const session = require('express-session');
const fileStore = require('session-file-store')(session)
const authToken = require('./controller/function/auth').checkToken
require('dotenv').config()

const controller = require('./controller')

const app = express()

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new fileStore(),
  cookie: {
    path: '/',
    httpOnly: true,
    secure: true
  }
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ['https://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'DELETE']
}))

app.post('/login', controller.login)
app.get('/logout', authToken, controller.logout)
app.get('/item', controller.item)
app.post('/order', authToken, controller.order)
app.post('/payment', authToken, controller.payment)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'internal error'
  })
})

const options = {
  key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
  cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8')
};

let server = https.createServer(options, app).listen(4000, function() {
  console.log('https 구동')
});

module.exports = server