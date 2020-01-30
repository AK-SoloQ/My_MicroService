import got from 'got'

const LISTINGS_SERVICE_URI = 'http://listings-service:7100'

export default class ListingsService {
  static async fetchAllListings () {
    try {
      const data = await got.get(`${LISTINGS_SERVICE_URI}/listings`).json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
}
