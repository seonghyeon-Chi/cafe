

module.exports = async (req, res) => {
  try {
    if (req.session.userId) {
      await req.session.destroy((err) => {
        if (err) {
          console.log(err)
          res.status(500).send(err)
        } else {
          console.log('로그아웃 성공')
          res.clearCookie()
          res.status(200).json({message: '로그아웃 성공'})
        }
      })
    } else {
      res.status(404).json({message: '식별자가 없습니다'})
    }
  }
  catch (err) {
    console.log(err)
    res.status(400).json({ message: '로그아웃 실패' })
  }
}