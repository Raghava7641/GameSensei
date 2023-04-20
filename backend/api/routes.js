const express = require('express')
const GameModel = require('../models/gameModel')
const axios = require('axios')
const NodeCache = require('node-cache')

const router = express.Router()

const gameCache = new NodeCache()

router.get('/', async (req, res) => {
  // check if cache exists
  const cachedResponse = gameCache.get('homeGames')

  if (cachedResponse) {
    return res.status(200).send(cachedResponse)
  }

  const homeResponse = await GameModel.find({
    Year_of_Release: {
      $gt: 2010,
    },
  })
    .sort({ NA_Sales: -1 })
    .limit(6)

  const updatedHomeResponse = await appendImages(homeResponse)

  // set cache
  gameCache.set('homeGames', updatedHomeResponse, 45000)

  res.status(200).send(updatedHomeResponse)
})

router.get('/home', async (req, res) => {
  // check if cache exists
  const cachedResponse = gameCache.get('games')

  if (cachedResponse) {
    return res.status(200).send(cachedResponse)
  }

  const response = await GameModel.find({}).sort({ Critic_Score: -1 }).limit(20)
  const updatedResponse = await appendGameThumbnail(response)

  // set cache
  gameCache.set('games', updatedResponse, 45000)

  res.status(200).send(updatedResponse)
})

// router.get('/test', (req, res) => {
//   res.send('Hello World')
// })

const appendGameThumbnail = async (dbResponse) => {
  const updatedResponse = await Promise.all(
    dbResponse.map(
      async ({ _id, Name, Platform, Year_of_Release, Genre, Critic_Score }) => {
        imageLink = 'No Image Available!'

        if (Name.trim()) {
          const { data } = await axios.get(
            'http://www.gamespot.com/api/games',
            {
              params: {
                api_key: '502f699ca28dbbc8f9a6a081596739b63ec93507',
                format: 'json',
                field_list: 'name,image',
                filter: `name:${Name}`,
              },
            },
          )

          if (data?.results.length > 0) {
            if (data.results[0]?.image?.square_tiny) {
              imageLink = data.results[0].image.square_tiny
            }
          }
        }

        return {
          _id,
          Name,
          Platform,
          Year_of_Release,
          Genre,
          Critic_Score,
          imageLink,
        }
      },
    ),
  )

  return updatedResponse
}

const appendImages = async (dbResponse) => {
  const updatedResponse = await Promise.all(
    dbResponse.map(async ({ _id, Name }) => {
      imageLink = 'No Image Available!'

      if (Name.trim()) {
        const { data } = await axios.get('http://www.gamespot.com/api/games', {
          params: {
            api_key: '502f699ca28dbbc8f9a6a081596739b63ec93507',
            format: 'json',
            field_list: 'name,image',
            filter: `name:${Name}`,
          },
        })

        if (data?.results.length > 0) {
          if (data.results[0]?.image?.original) {
            imageLink = data.results[0].image.original
          }
        }
      }

      return {
        _id,
        imageLink,
      }
    }),
  )

  return updatedResponse
}

module.exports = router
