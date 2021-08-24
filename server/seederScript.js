require('dotenv').config()

const productsData = require('./data/products')
const connectDB = require('./config/database')
const productModel = require('./models/Product')
const Product = require('./models/Product')

connectDB()

const importData = async() => {
 try{
  await Product.deleteMany({})
  await Product.insertMany(productsData)

  console.log("Data Import success")

  process.exit()
 }catch(error) {
  console.log(`Error with data import: ${error}`);
  process.exit(1)
 }
}

importData()
