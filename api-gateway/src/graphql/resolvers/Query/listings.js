
import ListingsService from '#root/adapters/ListingsService'

const listingsResolver = async () => {
  const data = await ListingsService.fetchAllListings()
  return data.listings
}

export default listingsResolver
