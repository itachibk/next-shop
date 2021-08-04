import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        )

        console.log('MongoDB connected success!')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB