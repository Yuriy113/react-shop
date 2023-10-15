import React from 'react';

function BasketItem(props) {
  return (
    <li className="collection-item">
      <div>
        {props.elem.displayName}: {props.elem.price.regularPrice} x {props.elem.quantity} ={' '}
        {props.elem.price.regularPrice * props.elem.quantity}
        <span style={{ paddingLeft: '20px' }}>
          <button onClick={() => props.incrementOrder(props.elem.mainId)}>+</button>
          <button onClick={() => props.decrementOrder(props.elem.mainId)}>-</button>
        </span>
        <span className="secondary-content">
          <i
            onClick={() => props.removeBasketItem(props.elem.mainId)}
            className="delete material-icons"
          >
            delete_forever
          </i>
        </span>
      </div>
    </li>
  );
}

export default BasketItem;
