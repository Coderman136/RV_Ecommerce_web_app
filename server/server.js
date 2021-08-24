require('dotenv').config()
const connectDB = require('./config/database')
const productRoutes = require('./routes/productRoutes') 
// const cors = require('cors')

connectDB()

const express = require('express')

const app = express()
app.use(express.json())
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

// app.use(cors())

if(process.env.NODE_ENV === 'production') {
 app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server is listening to ${PORT}`))
