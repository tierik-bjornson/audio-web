// import { createContext, useContext, useState } from "react";

// const CartContext = createContext(undefined);

// export const CartProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItem, setCartItem] = useState([]);

//   const totlalPrice = cartItem.reduce((prevValue, currValue) => {
//     return prevValue + currValue
//   }, 0)

//   return (
//     <CartContext.Provider
//       value={{
//         cartCount,
//         totlalPrice,
//         cartAdd: (count) => setCartCount(cartCount + count),
//         cartSub: () => setCartCount(cartCount === 0 ? null : cartCount - 1),
//         insertCartData: (data) => setCartItem(data),
//         cartItem
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import { InterpreterModeTwoTone } from "@mui/icons-material";
import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  // const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(1);
  
  let foundProduct;
  let index;

  const addToCart = (product, count) => {
    const checkProductInCart = cartItems.find((item) => item.pid === product.pid);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * count);
    setTotalCount((prevTotalcount) => prevTotalcount + count);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.pid === product.pid)
          return {
            ...item,
            count: item.count + count,
          };
        else
          return {
            ...item
          };
        });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product }]);
      product.count = count;
    }
    setCount(1)
  };
  
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.pid === product.pid);
    const newCartItems = cartItems.filter((item) => item.pid !== product.pid);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.count);
    setTotalCount((prevTotalcount) => prevTotalcount - foundProduct.count);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.pid === id);
    index = cartItems.findIndex((product) => product.pid === id);
    // const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([...cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count + 1 }, ...cartItems.slice(index + 1)]);
      // setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalCount((prevTotalcount) => prevTotalcount + 1);
    } else if (value === "dec") {
      if (foundProduct.count > 1) {
        setCartItems([...cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count - 1 }, ...cartItems.slice(index + 1)]);
        // setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalCount((prevTotalcount) => prevTotalcount - 1);
      }
    }
  };

  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decCount = () => {
    setCount((prevCount) => (prevCount === 1 ? prevCount : prevCount - 1));
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        totalCount,
        totalPrice,
        addToCart,
        onRemove,
        toggleCartItemQuanitity,
        incCount,
        decCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);