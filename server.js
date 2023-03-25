const express = require('express')
const cors = require('cors')
const ServerRouter = require('./routes/ServerRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/server', ServerRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
