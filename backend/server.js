const mongoose = require('mongoose')
// const GameModel = require('./models/gameModel')
const express = require('express')
const cors = require('cors')

const router = require('./api/routes')

const app = express()

app.use(express.json())

corsOptions = {
  origin: 'http://127.0.0.1:3001',
  methods: 'GET,PUT,POST',
  allowedHeaders: 'Content-Type,Authorization',
}

app.use(cors(corsOptions))

app.use('/', router)

mongoose.connect(
  'mongodb+srv://hgalla0426:FuRuvmnpd20PA7eq@myfirstcluster0.q1bejuz.mongodb.net/TaHaRa_games_db',
)

app.listen(7077, () => {
  console.log(`Express server running on port ${7077}`)
})

// Checking out mongoose with a test input
// const testSchema = new mongoose.Schema(
//   {
//     test: String,
//   },
//   { collection: 'demo' },
// )

// const testModel = mongoose.model('demo', testSchema)

// testModel.find({}).then((e) => console.log('data fetched', e))

// GameModel.find({ Name: 'Grand Theft Auto V' }).then((data) =>
//   console.log('data fetched', data),
// )
