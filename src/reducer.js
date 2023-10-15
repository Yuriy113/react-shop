export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: action.payload || [],
        loading: false,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.mainId !== action.payload.id),
      };
    case 'BASKET_VISIBLE':
      return {
        ...state,
        isBasketVisible: !state.isBasketVisible,
      };
    case 'INCREMENT_ITEM':
      const incrementedOrder = state.order.map((item) => {
        return item.mainId === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
      return {
        ...state,
        order: incrementedOrder,
      };
    case 'DECREMENT_ITEM':
      const decrementedOrder = state.order.map((item) => {
        return item.mainId === action.payload.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      });
      const filteredOrder = decrementedOrder.filter((item) => item.quantity > 0);
      return {
        ...state,
        order: filteredOrder,
      };
    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === action.payload.mainId,
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: action.payload.displayName,
      };
    }
    default:
      return state;
  }
};
