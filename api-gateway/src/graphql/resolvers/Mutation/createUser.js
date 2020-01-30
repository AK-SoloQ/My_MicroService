import UsersService from '#root/adapters/UsersService'

const createUserResolver = async (obj, { email, password }) => {
  const data = await UsersService.createUser({ email, password })
  return data
}

export default createUserResolver
