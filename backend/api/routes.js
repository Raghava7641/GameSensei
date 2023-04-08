const express = require('express')
const GameModel = require('../models/gameModel')

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await GameModel.find({ Name: 'Grand Theft Auto V' })

  res.send(response)
})

module.exports = router
