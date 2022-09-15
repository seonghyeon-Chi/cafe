const { item } = require('../../models')

module.exports = async (req, res) => {
  const iteminfo = await item.findAll()
  res.status(201).json({iteminfo: iteminfo})
}