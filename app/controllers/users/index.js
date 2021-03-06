const { createUser } = require('./createUser')
const { deleteUser } = require('./deleteUser')
const { getUser } = require('./getUser')
const { getUsers } = require('./getUsers')
const { updateUser } = require('./updateUser')
const { handlePermission } = require('./handlePermission')

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  handlePermission
}
