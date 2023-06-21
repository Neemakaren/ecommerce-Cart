import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';


const Cart = () => {
  const dispatch = useDispatch(); 
  const { cart, total, amount } = useSelector((state) => state.cart)


  if(amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  
  return (
    <div className='main-container'>
        <h2 className='cart-heading'>Your bag</h2>

        {
          cart.map((item) => {
            return <CartItem key={item.id} {...item}/>
          })
        }

        <h4>total: ${total.toFixed(2)}</h4>

        <button className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >clear cart</button>
        
       
    </div>
  )
}

export default Cart