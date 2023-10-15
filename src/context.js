import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketVisible: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };
  value.removeBasketItem = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: { id: itemId },
    });
  };
  value.handleBasketVisible = () => {
    dispatch({
      type: 'BASKET_VISIBLE',
    });
  };
  value.incrementOrder = (itemId) => {
    dispatch({
      type: 'INCREMENT_ITEM',
      payload: { id: itemId },
    });
  };
  value.decrementOrder = (itemId) => {
    dispatch({
      type: 'DECREMENT_ITEM',
      payload: { id: itemId },
    });
  };
  value.addToCart = (good) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: good,
    });
  };
  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
