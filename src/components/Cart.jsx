function Cart({ quantity, handleBasketVisible }) {
  return (
    <div onClick={handleBasketVisible} className="cart blue accent-4 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
