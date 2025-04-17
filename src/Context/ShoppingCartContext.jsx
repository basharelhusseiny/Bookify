import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const [cartModalOpen, setCartModalOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);

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
