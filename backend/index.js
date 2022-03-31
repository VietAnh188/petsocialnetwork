const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

const authRoute = require('./routes/auth')
const feedPostRoute = require('./routes/feedPost')
const userRoute = require('./routes/user')

dotenv.config()

mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('Connected to MongoDB')
    }
)

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('common'))

app.use('/api/auth', authRoute)
app.use('/api/feedPosts', feedPostRoute)
app.use('/api/users', userRoute)

const PORT = 1808

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
