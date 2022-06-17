const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AssetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    accessList: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
  },
  {
    versionKey: false,
    timestamps: true
  }
)
AssetSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Asset', AssetSchema)
