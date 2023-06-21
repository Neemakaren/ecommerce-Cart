import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';



function App() {
  const { cart, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cart])

  useEffect(() => {
    dispatch(getCartItems())
  }, []);

  if(isLoading) {
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  

  return (
    <>
    {isOpen && <Modal />}
     <Navbar />
     <Cart />
    </>
  )
}

export default App
