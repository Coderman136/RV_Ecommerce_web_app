import React from 'react'
import './HomeScreen.css'
import Product from '../components/Product'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getProducts as listProducts} from '../redux/actions/productActions'

function HomeScreen() {

 const dispatch = useDispatch()

 const getProducts = useSelector(state => state.getProducts)
 
 const {products, loading, error} = getProducts

 useEffect(() => {
  dispatch(listProducts())
 }, [dispatch])

 return (
  <div className="homescreen">
   <h2 className="homescreen_title">Latest Products</h2>
   <div className="homescreen_products">
   {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
            key={product._id}
            name={product.name}
            productId = {product._id}
            description = {product.name}
            price = {product.price}
            imageUrl = {product.imageUrl}
            />
          ))
        )}
   </div>
  </div>
 )
}

export default HomeScreen
