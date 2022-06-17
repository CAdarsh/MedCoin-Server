const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')
const { emailExistsExcludingMyself } = require('../../middleware/emailer')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const handlePermission = async (req, res) => {
  try {
    req = req.body
    const id = await isIDGood(req.userId)
    // const doesEmailExists = await emailExistsExcludingMyself(id, req.email)
    if (req.action == 'grant') {
      const user = await User.updateOne(
        { _id: req.userId },
        { $push: { approvedList: req.hospitalID } }
      )
      res.send('Hospital Added')
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { handlePermission }
