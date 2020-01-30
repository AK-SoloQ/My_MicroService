import { Listing } from '#root/db/models'

const setupRoutes = app => {
  app.get('/listings', async (req, res, next) => {
    const listings = await Listing.findAll()
    res.json({ listings })
  })
}

export default setupRoutes
