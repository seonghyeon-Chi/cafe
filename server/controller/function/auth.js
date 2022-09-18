const jwt = require('./token')
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  checkToken: async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      console.log('토큰 없음')
      return res.json({message: '토큰이 없습니다'})
    }

    const user = await jwt.verify(token)

    if (user === TOKEN_EXPIRED) {
      console.log('토큰 만료')
      return res.json({message: '토큰 유효기간이 만료되었습니다'})
    }
    if (user === TOKEN_INVALID) {
      console.log('토큰 유효하지 않음')
      return res.json({message: '유효하지 않는 토큰입니다'})
    }
    next();
  }
}
