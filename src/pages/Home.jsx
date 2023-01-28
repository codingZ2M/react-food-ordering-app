import React from 'react'
import tw from "tailwind-styled-components"
import foodCategories from '../data/foodCategories';
import Product from '../components/Product';
import  { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='fixed flex items-center justify-end top-0 py-4 left-0 right-0 px-6 z-[50] w-full '>
        <button className='mr-2 bg-[#EA4871] px-4 text-sm border-none
                             text-white py-1 rounded cursor-pointer'
                 onClick={ ()=>  navigate('/signin') } 
            >
              Sign In
          </button>
      </div>
      <ModelsContainer>
          {
            foodCategories.map( (foodCategory, index) => (
              <Product key = {index}
                      foodCategory = {foodCategory}
                      collections ="Collections"
                      shop = "Shop"
              />
                              )) 
          }
      </ModelsContainer>
   </>
  )
}

export default Home

const ModelsContainer = tw.div`
    w-screen h-screen 
`;