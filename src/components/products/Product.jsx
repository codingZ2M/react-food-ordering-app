import React from 'react'
import tw from "tailwind-styled-components"
import {BsCart2} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Product = ( {product} ) => {
  
  return (
    <ProductContainer>
        <ProductDetails>
            <Link to={`/product/${product.id}`}>
              <img src={product.image}  width={334} height={500}/>
            </Link>
          
            <Details className='flex  items-center justify-center'>
                <span className='w-72 px-4 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>{product.title}</span>
                <span className='text-sm font-semibold'>${product.price}.00</span>
               <div className='flex gap-2'>
                 <CartIcon/>
                 <span className='text-xs cursor-pointer' 
                    onClick=""
                  >ADD TO CART</span>
                  
               </div>
            </Details>
        </ProductDetails>
     
    </ProductContainer>

  )
}

export default Product

const ProductContainer= tw.div`
  flex flex-col items-center justify-center my-2 sm:my-0 
`;

const ProductDetails = tw.div`
  flex flex-col gap-3 items-center justify-center border-2 pt-0 pb-6
`;

const Details = tw.div`
    flex flex-col gap-1 items-center justify-center mt-2
`;

const CartIcon = tw(BsCart2)`
    w-4 h-4 cursor-pointer
`;
