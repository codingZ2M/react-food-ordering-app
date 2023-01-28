
import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai";
import { Link } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom'
import {foodCategories} from '../features/models/foodCategorySlice';

import {auth, signOut} from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/models/userSlice'

const NavBar = () => {
  const navigate = useNavigate();
  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const menuItems = useSelector(foodCategories);

  const user = useSelector(selectUser);

  const handleAuth = () => {
    if (user){
       signOut(auth).then( ()=> {
           navigate('/')
       }).catch((error)=> {
           alert(error.message);
       })
   }
   console.log(user)
}

  return (
    <NavBarContainer>
        <Link to ={'/'}>
          <span className='text-lg text-white font-medium'>CZ2M Foods</span>
        </Link>
      <div>
          <div className='hidden sm:flex gap-4 text-base text-white'>
           { 
            menuItems && menuItems.map ( (foodCategory, index) => (
               <Link key ={index} to= {`/productCategory/${menuItems[index]}`} >
                    {foodCategory}
               </Link>
          ) )
        }
        <Link to="/bestSellingCollections">Collections</Link>
        </div>
    </div>

    <div className='flex gap-4'>
      <SignOut className='pr-16'>
         <img src={user.photoURL} alt="User" className="rounded-full w-[40px] height=[40px]" />
        <SignOutBox>
            <span onClick={handleAuth} className="" >Sign Out</span>
        </SignOutBox>
      </SignOut>
      <button className='text-sm  text-white py-1 cursor-pointer'>Order</button>
      
       <Link to = "#" onClick={() => setCloseButtonOpen(true)}>
          <AiOutlineMenu className='text-white w-6 h-6'/>
      </Link>
    </div>


    <SidebarMenu className = {closeButtonOpen === true ? 'scale-100 opacity-80 overflow-y-scroll scrollbar-hide' : 'scale-0'}>
        <CloseButtonWrapper >
            <span className='text-lg mt-0 cursor-pointer' 
                  onClick={() => setCloseButtonOpen(false)}>
                  <AiOutlineClose className='text-white w-6 h-6 '/>
             </span>
        </CloseButtonWrapper>
        
        { menuItems && menuItems.map ( (foodCategory, index) =>(
               <li><Link key ={index} to={`/productCategory/${menuItems[index]}`}>{foodCategory}</Link></li>
          ) )}  
        <Link to="/bestSellingCollections">Collections</Link>
      </SidebarMenu>
      
  </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = tw.div`
  bg-[#EA4871] fixed flex items-center justify-between top-0 py-2 left-0 right-0 px-6 z-[50] w-full 
`;

const SidebarMenu = tw.div`
  fixed top-0 bottom-0 right-0 pt-0  list-none bg-[#EA4871] text-white w-60 z-100
  flex flex-col text-start pl-10 gap-4 text-base ease-in-out duration-500 pb-6
`;
const CloseButtonWrapper = tw.div`
  flex flex-row-reverse item-center justify-items-end mt-16 pr-4
`;

const SignOut = tw.div`
    flex absolute top-0 right-14 cursor-pointer group
`;
const SignOutBox = tw.div`
    absolute top-8 right-6 bg-[#EA4871] text-white 
    rounded-sm w-20 h-8 flex items-center justify-center text-base 
    opacity-0 group-hover:opacity-100 text-sm 
`;  