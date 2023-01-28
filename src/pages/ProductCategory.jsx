import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Product from '../components/products/Product'
import allProducts from '../data/allProducts';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/models/userSlice'
import  { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ProductCategory = () => {
  const {category} = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect( () => {
    if (!user) {
        navigate(`/signin`)
     }
     else {
            const products = allProducts.filter((product)=> product.category === category)
           setProducts(products);
           console.log(products);
        } 
    },  [category] )

  return (
    <div>
        {
       user ? 
        (<NavBar/>)
        :
        <></>
      }
          <h3 className='flex items-center justify-center text-xl sm:text-3xl mt-16 sm:mt-20 pl-8 '>
              {category}
          </h3>
          <ProductsGrid >
            {
                products.length < 1 && 
                <span className='flex justify-center items-center text-2xl'>Not Available Now!</span> 
            }
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

export default ProductCategory;

const ProductsGrid = tw.div`
  mt-4 sm:mt-12 mb-20
  flex items-center justify-center px-8 grid grid-cols-1 gap-2 sm:gap-6 
  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
`;