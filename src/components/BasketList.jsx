import React, { useContext } from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from '../context';

function BasketList() {
  const { order, handleBasketVisible } = useContext(ShopContext);
  const totalPrice = order.reduce((sum, item) => sum + item.price.regularPrice * item.quantity, 0);

  return (
    <div className="basket">
      <ul className="collection with-header ">
        <li className="collection-item active">
          <i onClick={handleBasketVisible} className="close-basket material-icons">
            close
          </i>
          <h4>Мои товары:</h4>
        </li>
        {order.map((elem) => {
          return <BasketItem key={elem.displayName} elem={elem} />;
        })}
        <li className="collection-item active">
          <div>Общая сумма: {totalPrice}</div>
        </li>
      </ul>
    </div>
  );
}

export default BasketList;
