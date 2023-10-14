import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import GoodsList from './GoodsList';
import Preloader from './Preloader';
import Cart from './Cart';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  function addToCart(good) {
    const itemIndx = order.findIndex((item) => item.mainId === good.mainId);

    if (itemIndx < 0) {
      const cartItem = {
        ...good,
        quantity: 1,
      };
      setOrder([...order, cartItem]);
    } else {
      const newOrder = order.map((elem) => {
        return elem.mainId === good.mainId
          ? {
              ...elem,
              quantity: elem.quantity + 1,
            }
          : elem;
      });

      setOrder(newOrder);
    }
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList addToCart={addToCart} goods={goods} />}
    </main>
  );
}

export default Shop;
