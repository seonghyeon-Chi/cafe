

module.exports = async (req, res) => {
  try {
    if (req.session.userId) {
      console.log(req.session.userId)
      await req.session.destroy((err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('로그아웃 성공')
          res.clearCookie()
          res.status(200).json({message: '로그아웃 성공'})
        }
      })
    }
  }
  catch (err) {
    console.log(err)
    res.status(400).json({ message: '로그아웃 실패' })
  }
}