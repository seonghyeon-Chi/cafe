const jwt = require('jsonwebtoken'),
secretKey = require('../../config/secretkey').secretKey
option = require('../../config/secretkey').option
TOKEN_EXPIRED = -3;
TOKEN_INVALID = -2;

module.exports = {
  sign: async (ide) => {
    const payload = {
      identifier: ide
    };
    const AccessToken = jwt.sign(payload, secretKey, option)
    return AccessToken
  },
  verify: async (token) => {
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey);
    }
    catch (err) {
      if (err.message === 'jwt expired') {
        return TOKEN_EXPIRED;
      } else if (err.message === 'invalid token') {
        return TOKEN_INVALID;
      } else {
        return TOKEN_INVALID;
      }
    }
    return decoded;
  }
}