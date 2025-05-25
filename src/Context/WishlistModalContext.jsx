import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
   const initalWishlistBooks = localStorage.getItem("wishlistBooks")
      ? JSON.parse(localStorage.getItem("wishlistBooks"))
      : [];

   const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
   const [wishlistBooks, setWishlistBooks] = useState(initalWishlistBooks);

   const handleOpenWishlist = () => {
      setWishlistModalOpen(true);
   };

   const addToWishList = (book) => {
      const existingItem = wishlistBooks.some((item) => item.id === book.id);
      const today = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = today.toLocaleDateString("en-US", options);

      if (!existingItem) {
         setWishlistBooks((prev) => [
            ...prev,
            { ...book, clickedProduct: formattedDate },
         ]);
         toast.success(`${book.title} has been added to your wishlist! ❤️`);
      }
   };

   const isInWishlist = (book) => {
      return wishlistBooks.some((item) => item.id === book.id);
   };

   const removeBook = (id) => {
      const books = wishlistBooks.filter((item) => item.id !== id);
      setWishlistBooks(books);
      toast.error(
         `Removed from wishlist. Hope you found your perfect read! 📖`
      );
   };

   useEffect(() => {
      localStorage.setItem("wishlistBooks", JSON.stringify(wishlistBooks));
   }, [wishlistBooks]);
   return (
      <WishlistContext.Provider
         value={{
            wishlistModalOpen,
            wishlistBooks,
            setWishlistModalOpen,
            setWishlistBooks,
            handleOpenWishlist,
            addToWishList,
            isInWishlist,
            removeBook,
         }}
      >
         {children}
      </WishlistContext.Provider>
   );
};

export default WishlistProvider;
export const useWishlist = () => useContext(WishlistContext);
