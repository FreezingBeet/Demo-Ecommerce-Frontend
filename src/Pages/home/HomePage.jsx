import axios from 'axios'
import Header from '../../components/Header'
import './HomePage.css'
import { useEffect, useState } from 'react'
import Product from './Product'

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data)
      });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product key={product.id} product={product} loadCart={loadCart} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage