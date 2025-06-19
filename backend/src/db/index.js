import mongoose from 'mongoose'

const connectDb = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected!!", connection.connection.host)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDb