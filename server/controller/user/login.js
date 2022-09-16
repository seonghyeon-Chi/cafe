const { user } = require('../../models')

module.exports = async (req, res) => {
  const phoneNumber = req.body.phone_number
  const isUser = await user.findOne({
    where: { phone_number: phoneNumber }
  })
  if (isUser) {
    req.session.userId = isUser.dataValues.id
    req.session.save(err => {
      if (err) {
          console.log(err);
      }
    });
    res.cookie('userId', req.session.userId)
    // console.log(req.session)
    console.log('로그인 성공')
    res.status(200).send({message: '로그인 성공'})
  } 
  else {
    try {
      const userinfo = await user.create({
        phone_number: phoneNumber
      })
      req.session.userId = userinfo.dataValues.id
      req.session.save(err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
      });
      res.cookie('userId', req.session.userId)
      console.log(req.session.userId)
      res.status(201).json({ message: '회원가입 성공'})
    }
    catch (err) {
      console.log(err)
      res.status(400).json({ message: '로그인 실패' })
    }
  }
}