import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import GoodsList from './GoodsList';
import Preloader from './Preloader';
import Cart from './Cart';
import BasketList from './BasketList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketVisible, setBasketVisible] = useState(false);

  function incrementOrder(id) {
    const newOrder = order.map((item) => {
      return item.mainId === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item;
    });

    setOrder(newOrder);
  }

  function decrementOrder(id) {
    const newOrder = order.map((item) => {
      return item.mainId === id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item;
    });

    const filteredOrder = newOrder.filter((item) => item.quantity > 0);

    setOrder(filteredOrder);
  }

  function handleBasketVisible() {
    setBasketVisible(!isBasketVisible);
  }

  function removeBasketItem(id) {
    const newOrder = order.filter((item) => item.mainId !== id);
    setOrder(newOrder);
  }

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
      <Cart quantity={order.length} handleBasketVisible={handleBasketVisible} />
      {loading ? <Preloader /> : <GoodsList addToCart={addToCart} goods={goods} />}
      {isBasketVisible ? (
        <BasketList
          order={order}
          removeBasketItem={removeBasketItem}
          handleBasketVisible={handleBasketVisible}
          incrementOrder={incrementOrder}
          decrementOrder={decrementOrder}
        />
      ) : null}
    </main>
  );
}

export default Shop;
