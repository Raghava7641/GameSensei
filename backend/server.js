const mongoose = require('mongoose')
const GameModel = require('./models/gameModel')

mongoose.connect(
  'mongodb+srv://hgalla0426:FuRuvmnpd20PA7eq@myfirstcluster0.q1bejuz.mongodb.net/TaHaRa_games_db',
)

// Checking out mongoose with a test input
// const testSchema = new mongoose.Schema(
//   {
//     test: String,
//   },
//   { collection: 'demo' },
// )

// const testModel = mongoose.model('demo', testSchema)

// testModel.find({}).then((e) => console.log('data fetched', e))

GameModel.find({ Name: 'Grand Theft Auto V' }).then((data) =>
  console.log('data fetched', data),
)
