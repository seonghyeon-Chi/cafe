const { order } = require('../../models')
const { order_detail } = require('../../models')

module.exports = async (req, res) => {
  const {data, totalPrice, userId} = req.body
  console.log(order, totalPrice, userId)
  try {
    await order.create({
        user_id: userId,
        totalPrice: totalPrice
    }).then(res => {
      data.map(el => {
        order_detail.create({
          item_id: el.id,
          order_id: res.dataValues.id,
          name: el.name,
          count: el.count
        })
      })
    })
    res.status(200).json({message: '성공적으로 주문되었습니다'})
  }
  catch (err) {
    console.log(err)
  }
}