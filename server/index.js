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

// const option = {
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USERNAME,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// };

// const sessionStore = new MySQLStore(option)

app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: false,
  store: new fileStore(),
  // new MemoryStore({ checkPeriod: 1000 * 60 * 5 }),
  cookie: {
    // path: '/',
    httpOnly: true,
    maxAge: 60 * 30
    // secure: true
  }
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT' ,'OPTIONS', 'DELETE']
}))

app.get('/userinfo', controller.userinfo)
app.post('/login', controller.login)
app.get('/logout', controller.logout)
app.post('/item', controller.item)
app.get('/iteminfo', controller.iteminfo)
app.get('/loginCheck', (req, res) => {
  if (req.session.userId) {
    res.send({loggedIn : true, loginData: req.session.userId})
  } else {
    res.send({loggedIn: false})
  }
})
app.post('/order', controller.order)

// sequelize.sync({ force: false })
// .then(() => {
//     console.log('데이터베이스 연결 성공');
// })
// .catch((err) => {
//     console.error(err);
// });

// https.createServer(
//   {
//     key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
//     cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8')
//   },
//   app.use('/', (req,res) => {
//     res.send('서버 접속 완료')
//   })
// ).listen(3001, () => {
//   console.log('서버 작동')
// })

let server;

server= app.listen(4000, function(){ 
    console.log('Server is running...');
});

module.exports = server