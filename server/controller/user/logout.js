

module.exports = async (req, res, next) => {
  try {
    if (req.session.userId) {
      await req.session.destroy((err) => {
        if (err) {
          next(err)
        } else {
          res.clearCookie()
          res.status(200).json({message: '로그아웃 성공'})
        }
      })
    } else {
      res.status(204).json({message: '식별자가 없습니다'})
    }
  }
  catch (err) {
    console.error(err)
    res.status(400).json({ message: '로그아웃 실패' })
  }
}