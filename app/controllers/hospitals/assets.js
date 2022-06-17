const AssetModel = require('../../models/assets')
const UserModel = require('../../models/user')

async function createAsset(req, res) {
  req.body.accessList = [req.body.owner, req.body.author]
  let asset = await new AssetModel(req.body).save()
  //   console.log('Asset Created')
  console.log({ asset })
  //   let updateUser = UserModel.updateOne({ _id: req.body.owner }, { $push: { assets: asset._id } })
  res.send('Asset Created')
  //   res.send('Called')
}

module.exports = { createAsset }
