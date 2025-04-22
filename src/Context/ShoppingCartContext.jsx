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

   // const addToCart = (product) => {
   //    setCartItems((prev) => [...prev, product]);
   // };
   const addToCart = (product, quantity = 1) => {
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
         setCartItems((prev) =>
            prev.map((item) =>
               item.id === product.id
                  ? {
                       ...item,
                       quantity: item.quantity + quantity,
                    }
                  : item
            )
         );
      } else {
         setCartItems((prev) => [
            ...prev,
            {
               ...product,
               quantity: quantity,
            },
         ]);
      }
   };

   const removeItem = (id) => {
      const cart = cartItems.filter((item) => item.id !== id);
      setCartItems(cart);
   };
   useEffect(() => {
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
   }, [cartItems]);

   const totalPrice = cartItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
   );
   return (
      <ShoppingCartContext.Provider
         value={{
            cartModalOpen,
            cartItems,
            setCartModalOpen,
            handleOpenShoppingCart,
            addToCart,
            removeItem,
            totalPrice,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => useContext(ShoppingCartContext);
