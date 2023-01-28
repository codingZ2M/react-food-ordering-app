import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import allProducts from '../../data/allProducts'
import Product from './Product'
import {AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/models/userSlice'
import  { useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import NavBar from '../NavBar'


const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect( () => {
        if (!user) {
            navigate(`/signin`)
         }
      else {
       const existingProduct = allProducts.find((product)=> product.id == id)
             setProduct(existingProduct);
             console.log(product)
        }
  }, [id])


  return (
    <>
      {
       user ? 
        (<NavBar/>)
        :
        <></>
      }
      <div className='w-full bg-[#FFFFFF] h-full mt-20 mb-0'>
         <div className="mt-6 flex gap-2 sm:gap-20 flex-col sm:flex-row items-center justify-center m-auto bg-white text-black ">
            <div className=''>
                <img src={product.image} className="rounded-lg" width={334} height={500}/>
            </div> 
            <div className='flex flex-col items-start space-y-4 font-verdana p-10 w-full sm:w-1/3 text-justify'>
                <span className='text-xl sm:text-2xl'>{product.title}</span>
                <div className='flex  items-center justify-center gap-1 text-red-600'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiOutlineStar/>
                <span className='text-black text-sm'>(201)</span>
              </div>
              <span className='text-sm'>{product.details}</span>
              <span className='text-xl'>${product.price}.00</span>
              <span>Quanity</span>
              <div className='flex gap-4 items-center justify-center border border-gray-400 w-20 py-1 '>
                <span onClick=""><AiOutlineMinus/></span>                
                <span onClick=""><AiOutlinePlus/></span>
              </div>
              <div className='flex gap-4'>
                <button className='flex items-center justify-center w-40 sm:w-60 text-black bg-white font-medium border-[1px] border-[#000000]  py-2.5
                               hover:bg-black hover:text-white hover:border-white'
                               onClick="" >
                  ADD TO CART
                </button>
                
                <button className='flex items-center justify-center w-40 sm:w-60 text-white bg-black font-medium border-[1px] border-[#fff]  py-2.5
                               hover:bg-white hover:text-black hover:border-black'>
                  BUY NOW
                </button>
              </div>
          </div>
      </div> 

            {/* Similar Products Container  */}
      <div className='mt-2 sm:mt-20 mb-12 w-full flex flex-col items-center justify-center'>
        <h2 className='flex justify-start items-start text-xl sm:text-2xl mt-6 sm:mt-12'> Similar Produts </h2>
        <div className='my-6 sm:my-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            allProducts.map((product) => (
              <Product key={product.id} product = {product}/> 
            ))
          }
        </div>
      </div> 
      <Footer/>
    </div>
  </>
  )
}

export default ProductDetails