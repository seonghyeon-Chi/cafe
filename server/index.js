const { sequelize } = require('./models')
const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()

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

const http = require('http'); 
let server = http.createServer(function(request,response){ 
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end('Hello node.js!!');
});

server.listen(8080, function(){ 
    console.log('Server is running...');
});

