import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(1);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, count: quantity }];
      }
    });

    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
    setTotalCount((prevCount) => prevCount + quantity);
    setCount(1);
  };

  const onRemove = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    
    const removedItem = cartItems.find((item) => item.id === productId);
    if (removedItem) {
      setTotalPrice((prevPrice) => prevPrice - removedItem.price * removedItem.count);
      setTotalCount((prevCount) => prevCount - removedItem.count);
    }
  };

  const toggleCartItemQuantity = (id, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              count: value === "inc" ? item.count + 1 : Math.max(1, item.count - 1),
            }
          : item
      )
    );

    const product = cartItems.find((item) => item.id === id);
    if (product) {
      if (value === "inc") {
        setTotalPrice((prevPrice) => prevPrice + product.price);
        setTotalCount((prevCount) => prevCount + 1);
      } else if (value === "dec" && product.count > 1) {
        setTotalPrice((prevPrice) => prevPrice - product.price);
        setTotalCount((prevCount) => prevCount - 1);
      }
    }
  };

  const incCount = () => setCount((prev) => prev + 1);
  const decCount = () => setCount((prev) => Math.max(1, prev - 1));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        totalCount,
        totalPrice,
        addToCart,
        onRemove,
        toggleCartItemQuantity,
        incCount,
        decCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
