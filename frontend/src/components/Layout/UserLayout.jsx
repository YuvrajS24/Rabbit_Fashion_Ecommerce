import React,  { useEffect, useRef } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/slices/cartSlice";





const UserLayout = () => {

 
const dispatch = useDispatch()
const {user, guestId } = useSelector((state) => state.auth )
const cart = useSelector((state) => state.cart.cart)
const hasFetched = useRef(false);
const userId = user?._id
const cartCount = cart?.products?.length ?? 0 


useEffect(()=> {


if (hasFetched.current) return 
if(cartCount> 0 ) return 


if(userId) {

hasFetched.current = true
dispatch(fetchCart({userId}))

} else if (guestId) {

hasFetched.current = true
dispatch(fetchCart({guestId}))

}

}, [dispatch, userId, guestId, cartCount])





return (
   
    <>

      {/* header*/ }
      <Header/>

      {/* Main Content*/}
        
        <main>
          <Outlet/>
        </main>
       
      {/* Footer*/}

      <Footer/>

    </>




  )
}

export default UserLayout
