import Reac, {useEffect} from 'react'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import BestSellingCollections from './pages/BestSellingCollections';

import {auth, onAuthStateChanged} from './firebase'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/models/userSlice'
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './components/products/ProductDetails';

const App = () => {

  const dispatch = useDispatch();

  useEffect (  ()=> {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          // logged in
          dispatch(login({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          }))
        } else if (!user){
          dispatch(logout)

        }
    }  )
}, [] );


  return (
    <div className=''>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/signin" element={<Signin/>} />  
          <Route  path="/bestSellingCollections" element={<BestSellingCollections/>} />  
          <Route path="/productCategory/:category" element={<ProductCategory/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </div>
  )
}

export default App