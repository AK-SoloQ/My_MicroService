import got from 'got'

const USER_SERVICE_URI = 'http://users-service:7101'

export default class UsersService {
  static async createUser ({ email, password }) {
    try {
      const data = await got.post(`${USER_SERVICE_URI}/users`, {
        json: {
          email, password
        }
      }).json()
      return data
    } catch (error) {
      console.log('---->', error)
    }
  }
}
