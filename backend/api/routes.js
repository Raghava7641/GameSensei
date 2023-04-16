const express = require('express')
const GameModel = require('../models/gameModel')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await GameModel.find({}).sort({ Critic_Score: -1 }).limit(20)
  const updatedResponse = await appendGameThumbnail(response)

  res.send(updatedResponse)
})

router.get('/test', (req, res) => {
  res.send('Hello World')
})

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

module.exports = router
