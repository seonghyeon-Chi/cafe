const { user } = require('../../models')
const token = require('../function/token')

module.exports = async (req, res, next) => {
  const phoneNumber = req.body.phone_number
  const isUser = await user.findOne({
    where: { phone_number: phoneNumber }
  })
  if (isUser) {
    req.session.userId = isUser.dataValues.id
    req.session.save(err => {
      if (err) {
        next(err)
      }
    });
    try {
      const accessToken = await token.sign(req.session.userId)
      res.cookie('userId', req.session.userId)
      res.cookie('token', accessToken)
      res.status(200).send({message: '로그인 성공'})
    } catch (err) {
      console.error(err)
      next(err)
    }
  } 
  else {
    try {
      const userinfo = await user.create({
        phone_number: phoneNumber
      })
      req.session.userId = userinfo.dataValues.id
      req.session.save(err => {
        if (err) {
          next(err)
        }
      });
      try {
        const accessToken = await token.sign(req.session.userId)
        res.cookie('userId', req.session.userId)
        res.cookie('token', accessToken)
        res.status(200).send({message: '회원가입 성공'})
      } catch (err) {
        console.error(err)
        next(err)
      }
    }
    catch (err) {
      console.error(err)
      res.status(400).json({ message: '로그인 실패' })
    }
  }
}