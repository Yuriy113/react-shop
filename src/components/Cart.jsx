import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart({ quantity }) {
  const { handleBasketVisible } = useContext(ShopContext);

  return (
    <div onClick={handleBasketVisible} className="cart blue accent-4 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
