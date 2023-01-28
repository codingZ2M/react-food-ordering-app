import React from 'react'
import tw from "tailwind-styled-components"
import Fade from 'react-reveal/Fade';
import {IoChevronDown} from "react-icons/io5";
import { Link } from 'react-router-dom';

const Product = ({ foodCategory, collections, shop }) => {
    
  return (
    <ProductCategoryWrapper>
      
      <img src={`${foodCategory.image}`} className='object-cover w-screen h-screen' />
      
      <CategoryDetails>
      <Fade top>
            <h1 className='text-[36px] m-auto font-bold text-white'>{foodCategory.category_type}</h1>
            <p className='m-auto pt-1 text-[20px] text-white cursor-pointer'>
              {foodCategory.description}
            </p>
      </Fade>
      </CategoryDetails>

    <div className='flex flex-col items-center justify-center'>
      <Buttons>
      <Fade top>
           <Link to="/bestSellingCollections"><CollectionsButton> {collections}</CollectionsButton></Link>
           <ShopButton> {shop} </ShopButton>
                                         
       </Fade> 
       </Buttons>
       <DownArrowIcon/>
    </div>   

    </ProductCategoryWrapper>
  )
}

export default Product;

const ProductCategoryWrapper = tw.div`
  relative flex flex-col  items-center w-screen h-screen justify-center
`;

const CategoryDetails = tw.div`
    absolute top-20 flex flex-col justify-center items-center
`;

const Buttons = tw.div`
    absolute bottom-24 flex flex-col sm:flex-row gap-[20px] 
`;

const CollectionsButton =tw.div`
  bg-[#EA4871] text-white h-[45px] w-[340px] sm:w-[240px] 
  flex justify-center items-center opacity-80 cursor-pointer uppercase
  text-[13px] font-bold tracking-wide rounded-[50px]
`;

const ShopButton = tw(CollectionsButton)`
  bg-[#ffffff] opacity-70 text-[#101010]
`;

const DownArrowIcon = tw(IoChevronDown)`
absolute bottom-8 w-[22px] h-[22px] animate-bounce text-white
       
`;