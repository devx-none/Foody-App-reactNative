import React, { createContext, useState, FC } from 'react';



const defaultState = {
  cartItems: [],
  setCartItems: () => {},
  getTotalItems: () => 0,
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
};

export const CartContext = createContext(defaultState);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem) => {
    console.log(clickedItem);
    setCartItems(prev => {
      //1. is item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }
      //First time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item._id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, []),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getTotalItems,
        handleAddToCart,
        handleRemoveFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;