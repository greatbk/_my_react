import * as M from '../mongodb'

const connectDB = (db: M.MongoDB) => {
  console.log('db', db)
}

const connectTest = () => {
  M.connectAndUseDB(connectDB, 'ch07')
}

connectTest()
