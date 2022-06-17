const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AssetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: String
    },
    title: {
      type: String
    },
    desc: {
      type: String
    },
    remarks: {
      type: String
    },
    age: {
      type: String
    },
    sex: {
      type: String
    },
    diagnosedAs: {
      type: Number
    },
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    accessList: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    link: String
  },
  {
    versionKey: false,
    timestamps: true
  }
)
AssetSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Asset', AssetSchema)
