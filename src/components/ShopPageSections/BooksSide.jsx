import { Link } from "react-router";
import { books } from "../../data/books";
import BookRating from "../common/BookRating";
import { CiShoppingBasket } from "react-icons/ci";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { useModal } from "../../Context/ModalContext";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { useState } from "react";
import Pagination from "./Pagination";
import SortBooks from "./SortBooks";
import { useWishlist } from "../../Context/WishlistModalContext";
import toast from "react-hot-toast";

const BooksSide = () => {
   const { handleOpenModal } = useModal();
   const { handleOpenShoppingCart, addToCart } = useShoppingCart();
   const { isInWishlist, addToWishList, handleOpenWishlist } = useWishlist();

   const [currentPage, setCurrentPage] = useState(1);
   const [sortItem, setSortItem] = useState("recommended");

   // Pageination
   const booksPerPage = 6;
   const pages = Math.ceil(books.length / booksPerPage);
   const startIndex = (currentPage - 1) * booksPerPage;
   const endIndex = currentPage * booksPerPage;

   // Sort Books
   const sortedBookList =
      sortItem === "low"
         ? books.sort((a, b) => a.price - b.price)
         : sortItem === "high"
         ? books.sort((a, b) => b.price - a.price)
         : books.sort((a, b) => b.rating - a.rating);

   // Data After Sort and Slice
   const sortedBooks = sortedBookList.slice(startIndex, endIndex);

   return (
      <div>
         <div className="flex justify-end border-b-2 border-gray-300 pb-2">
            <SortBooks setSortItem={setSortItem} bookLength={books.length} />
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-8 border-b-2 border-gray-300 pb-7">
            {sortedBooks.map((product) => {
               return (
                  <div key={product.id} className="group">
                     <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                        <img
                           src={`/images/books/${product.image}`}
                           alt={product.title}
                           className="w-full h-full"
                           loading="lazy"
                        />
                        <div className="absolute flex flex-col p-2 justify-end items-end z-10 w-full h-full bg-black/20 translate-x-full group-hover:translate-x-0 bottom-0 right-0 over duration-700">
                           <IoHeartOutline
                              onClick={() => {
                                 isInWishlist(product)
                                    ? toast.error(
                                         `You already love ${product.title}! 📚`
                                      )
                                    : (addToWishList(product),
                                      handleOpenWishlist());
                              }}
                              className="bg-white text-rose-500 w-[40px] h-[40px] rounded-full p-2 m-1 cursor-pointer hover:bg-rose-500 hover:text-white duration-200"
                           />
                           <IoEyeOutline
                              onClick={() => handleOpenModal(product)}
                              className="bg-white text-rose-500 w-[40px] h-[40px] rounded-full p-2 m-1 cursor-pointer hover:bg-rose-500 hover:text-white duration-200"
                           />
                           <CiShoppingBasket
                              onClick={() => {
                                 addToCart(product);
                                 handleOpenShoppingCart();
                              }}
                              className="bg-white text-rose-500 w-[40px] h-[40px] rounded-full p-2 m-1 cursor-pointer hover:bg-rose-500 hover:text-white duration-200"
                           />
                        </div>
                     </div>
                     <Link
                        to={`/shop/bookpage/${product.id}`}
                        className="block w-fit capitalize font-semibold py-3 hover:text-rose-500 duration-200"
                     >
                        {product.title}
                     </Link>
                     <BookRating
                        rate={product.rating}
                        reviews={product.reviews}
                     />
                     <p className="text-sm text-gray-500 py-1">
                        {product.author}
                     </p>
                     <p className="text-xl font-semibold text-rose-500">
                        ${product.price}
                     </p>
                  </div>
               );
            })}
         </div>
         <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />
      </div>
   );
};

export default BooksSide;
