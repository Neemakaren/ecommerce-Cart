import React from 'react'
import { useSelector} from 'react-redux'
import { AiOutlineShopping } from 'react-icons/ai'

 
const Navbar = () => {
  const {amount} = useSelector((state) => state.cart)
  
  
  
  return (
    <div className="main-container">
    <div className="navbar-container">
      <p className="logo">
        logo
      </p>

      <button type="button" className="cart-icon" >
          <AiOutlineShopping  />
        <span className="cart-item-qty">{amount}</span>
      </button>
    </div>
    </div>
  )
}

export default Navbar