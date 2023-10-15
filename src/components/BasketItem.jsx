import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem({ elem }) {
  const { removeBasketItem, incrementOrder, decrementOrder } = useContext(ShopContext);

  return (
    <li className="collection-item">
      <div>
        {elem.displayName}: {elem.price.regularPrice} x {elem.quantity} ={' '}
        {elem.price.regularPrice * elem.quantity}
        <span style={{ paddingLeft: '20px' }}>
          <button onClick={() => incrementOrder(elem.mainId)}>+</button>
          <button onClick={() => decrementOrder(elem.mainId)}>-</button>
        </span>
        <span className="secondary-content">
          <i onClick={() => removeBasketItem(elem.mainId)} className="delete material-icons">
            delete_forever
          </i>
        </span>
      </div>
    </li>
  );
}

export default BasketItem;
