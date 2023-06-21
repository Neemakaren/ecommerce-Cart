import { useDispatch } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({id, title, price, img, amount}) => {
    const dispatch = useDispatch()

  return (
    <div className='main-container'>
        <div className="cart">
        <div className="image-container">
            <img src={img} alt="" className='image-1'/>
        </div>
       <div className="desc">
        <div className="details">
            <h4 className='details-heading'>{title}</h4>
            <p className='details-paragraph'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Officia, culpa molestias. 
                Totam quam autem dolor rerum porro quibusdam
                 recusandae libero culpa perspiciatis esse 
                 aperiam quis nostrum sint, obcaecati ipsam laudantium?</p>
            <div className="buttons">
                <div className="price">${price}</div>
            <div className="quantity">
              <h3>Quantity:{amount}</h3>
              <p className="quantity-desc">
                <button 
                onClick={() => {
                  if (amount === 1) {
                    dispatch(removeItem(id));
                    return;
                  }
                  dispatch(decrease(id))
                }}>
                <span className="minus"
                ><AiOutlineMinus /></span>
                </button>
                <span className="num">{amount}</span>
                <button 
                    onClick={() => {
                        dispatch(increase(id))
                    }}>
                <span className="plus"><AiOutlinePlus /></span>
                </button>
              </p>
            </div>
            </div>
            </div>
       </div>
        </div>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
    </div>
  )
}

export default CartItem