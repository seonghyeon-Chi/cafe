const { item } = require('../../models')

module.exports = async (req, res) => {
  const { itemname, price, image } = req.body
  console.log(phoneNumber)
  const [iteminfo, created] = await item.findOrCreate({
    where: {
      name: itemname,
    },
    defaults: {
      name: itemname,
      price: price,
      image: image
    }
  })
  if (!created) {
    res.status(403).send({message: 'already exist item'})
  } else {
    res.status(201).send('ok')
  }
}