import React, {useEffect, useState} from 'react'
import  { useNavigate } from 'react-router-dom'
import Product from '../components/products/Product'
import allProducts from '../data/allProducts';
import tw from "tailwind-styled-components"

import { useSelector } from 'react-redux'
import { selectUser } from '../features/models/userSlice'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';

const BestSellingCollections = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [products, setProducts] = useState([]);

    useEffect (         
        ()=> {
          if (!user) {
             navigate(`/signin`)
          }
          else {
            const products = allProducts.filter((product)=> product.curatedProduct === true)
                setProducts(products);
                console.log(products);
          }
        }, []
       
  );

  return (
    <div>
      {
       user ? 
        (<NavBar/>)
        :
        <></>
      }
      <h3 className='flex items-center justify-center text-xl sm:text-3xl mt-20 pl-8 '>
          Best Selling Collections
      </h3>
      <ProductsGrid >
         {
            products.map( (product) => (
              <Product key={product.id} product = {product}/> 
           ))      
        }
      </ProductsGrid>
      <Footer/>
    </div>
  )
}

export default BestSellingCollections

const ProductsGrid = tw.div`
  mt-0 sm:mt-12 mb-20
  flex items-center justify-center px-8 grid grid-cols-1 gap-2 sm:gap-6 
  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
`;