import mongoose from 'mongoose'
const ConnectionDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DATABASE_LOCAL_USERNAME}:${process.env.DATABASE_LOCAL_PASSWORD}@cluster0.cx0yex7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    `, { dbName: process.env.DB_NAME })
}
module.exports = ConnectionDB