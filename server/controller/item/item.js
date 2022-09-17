const { item } = require('../../models')

module.exports = async (req, res) => {
  try {
    const iteminfo = await item.findAll()
    res.status(200).json({iteminfo: iteminfo})
  } 
  catch (err) {
    console.error(err)
    res.status(404).json({message: '메뉴를 불러오지 못했습니다'})
  }
}