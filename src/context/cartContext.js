import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, qty) => {
    const isItemFound = cart.some((cartItems) => cartItems.id === item.id);
    if (isItemFound) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.qty += qty;
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, qty: 1 };
      setCart([...cart, newItem]);
    }
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.qty || 0;
  };

  const removeList = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart((items) => {
      if (items.find((item) => item.id === id)?.qty === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const totalPrice = () => {
    return cart.reduce((acc, el) => acc + el.price * el.qty, 0);
  };

  const totalItems = () => {
    return cart.reduce((acc, el) => acc + el.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantityById,
        removeList,
        deleteItem,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
