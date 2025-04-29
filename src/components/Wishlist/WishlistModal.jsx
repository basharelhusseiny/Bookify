import { useEffect } from "react";
import { useWishlist } from "../../Context/WishlistModalContext";
import CloseButton from "../common/CloseButton";
import { Link } from "react-router";
import { IoClose } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import EmptyWishlist from "./EmptyWishlist";

const WishlistModal = () => {
   const {
      wishlistModalOpen,
      setWishlistModalOpen,
      wishlistBooks,
      removeBook,
   } = useWishlist();
   const { handleOpenShoppingCart, addToCart } = useShoppingCart();

   useEffect(() => {
      wishlistModalOpen
         ? (document.body.style.overflow = "hidden")
         : (document.body.style.overflow = "auto");
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [wishlistModalOpen]);
   return (
      <div
         onClick={() => setWishlistModalOpen(false)}
         className={`${
            wishlistModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
         } fixed top-0 left-0 w-full h-screen bg-gray-800/60 z-50 duration-500 `}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={`${
               wishlistModalOpen ? "scale-100 delay-300" : "scale-0"
            } absolute w-[90%] md:w-[400px] lg:w-[450px] h-[85dvh] bg-white top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 duration-600`}
         >
            <div className="relative">
               {/* Header for Modal */}
               <div className="flex items-center justify-between px-5 py-3 bg-gray-800 text-white">
                  <h3 className="text-lg font-semibold tracking-wide">
                     Wishlist
                  </h3>
                  <div
                     onClick={() => setWishlistModalOpen(false)}
                     className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
                  >
                     <CloseButton />
                  </div>
               </div>
               {/* Body */}
               {wishlistBooks.length === 0 ? (
                  <EmptyWishlist />
               ) : (
                  <div className="custom-scrollbar overflow-y-auto h-[calc(85dvh-101px)]">
                     {wishlistBooks.map((product) => {
                        return (
                           <div
                              key={product.id}
                              className="flex items-center px-5 py-3 border-b-2 border-gray-200 last:border-b-0"
                           >
                              <IoClose
                                 onClick={() => removeBook(product.id)}
                                 className="text-lg mr-3 hover:text-rose-500 cursor-pointer duration-200"
                              />
                              <Link
                                 to={`/bookpage/${product.id}`}
                                 onClick={() => setWishlistModalOpen(false)}
                                 className="flex min-w-[85px] h-[130px] overflow-hidden  bg-gray-100"
                              >
                                 <img
                                    src={`/images/books/${product.image}`}
                                    alt={product.title}
                                    className="w-full h-full object-cover object-center"
                                 />
                              </Link>
                              <div className="mx-3">
                                 <Link
                                    to={`/bookpage/${product.id}`}
                                    onClick={() => setWishlistModalOpen(false)}
                                    className="font-semibold hover:text-rose-500 duration-200"
                                 >
                                    {product.title}
                                 </Link>
                                 <p className="font-semibold text-rose-500 py-1">
                                    ${product.price}
                                 </p>
                                 <p className="pb-1">
                                    <span className="font-medium text-[15px]">
                                       Author:{" "}
                                    </span>
                                    <span className="text-sm text-gray-600 ">
                                       {product.author}
                                    </span>
                                 </p>
                                 <p className="text-gray-500 text-[14px]">
                                    {product.clickedProduct}
                                 </p>
                                 <button
                                    onClick={() => {
                                       handleOpenShoppingCart();
                                       setWishlistModalOpen(false);
                                       addToCart(product);
                                    }}
                                    className="flex items-center justify-center mt-2 font-medium bg-rose-500 text-white px-4 py-[5px] max-sm:px-2 max-sm:py-1 rounded-full cursor-pointer hover:bg-rose-700 duration-300"
                                 >
                                    <FaShoppingBasket className="" />
                                    <span className="block pl-2 text-[15px]">
                                       Add to cart
                                    </span>
                                 </button>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               )}
               {/* Footer */}
               <div className="flex items-center justify-center fixed bottom-0 w-full bg-rose-300 px-5 py-3 ">
                  <Link
                     onClick={() => setWishlistModalOpen(false)}
                     className="block uppercase max-md:text-[11px] text-[15px] underline hover:text-rose-600 dura"
                  >
                     continue shopping
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WishlistModal;
