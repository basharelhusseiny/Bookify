import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const initalCartItems = localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [];

   const [cartModalOpen, setCartModalOpen] = useState(false);
   const [cartItems, setCartItems] = useState(initalCartItems);

   const handleOpenShoppingCart = () => {
      setCartModalOpen(true);
   };

   const addToCart = (item) => {
      setCartItems((prev) => [...prev, item]);
   };

   const removeItem = (id) => {
      const cart = cartItems.filter((item) => item.id !== id);
      setCartItems(cart);
   };
   useEffect(() => {
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
   }, [cartItems]);

   return (
      <ShoppingCartContext.Provider
         value={{
            cartModalOpen,
            cartItems,
            setCartModalOpen,
            handleOpenShoppingCart,
            addToCart,
            removeItem,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => useContext(ShoppingCartContext);
