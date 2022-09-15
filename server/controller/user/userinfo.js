const { user } = require('../../models')

module.exports = async (req, res) => {
  console.log(req.session)
  const userinfo = req.session.userinfo

  await user.findOne({
    where: { phone_number: userinfo }
  }).then((data) => {
    res.status(200).json({userinfo: data})
  })
}