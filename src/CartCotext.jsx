import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const totlalPrice = cartItem.reduce((prevValue, currValue) => {
    return prevValue + currValue
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cartCount,
        totlalPrice,
        cartAdd: (count) => setCartCount(cartCount + count),
        cartSub: () => setCartCount(cartCount === 0 ? null : cartCount - 1),
        insertCartData: (data) => setCartItem(data),
        cartItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
