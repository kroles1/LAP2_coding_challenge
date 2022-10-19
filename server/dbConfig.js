const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION ? process.env.DB_CONNECTION : "mongodb://127.0.0.1:27017/telegraph";

const dbName = process.env.DB_NAME

const init = async () => {
  let client = await MongoClient.connect(connectionUrl)
  console.log('connected to database!', dbName)
  return client.db(dbName)
}


module.exports = { init };