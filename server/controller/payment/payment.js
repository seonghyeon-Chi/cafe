const { payment } = require('../../models')
const { payment_detail } = require('../../models')
const { order } = require('../../models')
const { order_detail } = require('../../models')

module.exports = async (req, res) => {
  const {userId} = req.body
  try {
    const isOrder = await order.findAll({
      where: {user_id : userId},
      include: { model: order_detail }
    })
    const orderdata = isOrder.map((el) => el.dataValues).map((el) => el.order_details).map((els) => els.map(el => el.dataValues))
    const totalPrice = isOrder.map(el => el.dataValues.totalPrice).reduce((pre,cur)=> pre+cur)
    if (isOrder && userId) {
      try {
        await payment.create({
          user_id: userId,
          totalPrice: totalPrice
        }).then(res => {
          orderdata.flat(Infinity).map(el => {
            payment_detail.create({
              payment_id: res.dataValues.id,
              item_id: el.item_id,
              name: el.name,
              count: el.count
            })
          })
        }).then(res =>{
          order.destroy({
            where: {user_id: userId}
          })
        })
        res.status(200).json({message: '성공적으로 결제되었습니다'})
      }
      catch (err) {
        console.log(err)
      }
    }
  }
  catch (err) {
    console.log(err)
    res.status(400).json({message: '결제에 실패했습니다'})
  }
}