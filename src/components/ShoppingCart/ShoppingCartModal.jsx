import { useEffect } from "react";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CloseButton from "../common/CloseButton";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";
import EmptyCart from "./EmptyCart";

const ShoppingCartModal = () => {
   const {
      cartModalOpen,
      setCartModalOpen,
      cartItems,
      removeItem,
      totalPrice,
   } = useShoppingCart();
   useEffect(() => {
      cartModalOpen
         ? (document.body.style.overflow = "hidden")
         : (document.body.style.overflow = "auto");
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [cartModalOpen]);

   return (
      <div
         onClick={() => setCartModalOpen(false)}
         className={`${
            cartModalOpen ? "translate-x-0" : "translate-x-full"
         } fixed w-full h-screen top-0 left-0 z-50 bg-gray-800/50 ease-in-out duration-800`}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 bg-white w-[350px] max-sm:w-[300px] h-screen"
         >
            <div>
               {/* Header for Modal */}
               <div className="modal-header flex items-center justify-between px-7 py-[13px] bg-rose-100/90">
                  <h5 className="font-medium capitalize tracking-wide">cart</h5>
                  <CloseButton
                     onClick={() => setCartModalOpen(false)}
                     backgroundColor={"white"}
                  />
               </div>
               {/* body for Modal */}
               {cartItems.length === 0 ? (
                  <EmptyCart
                     styleH={"text-lg"}
                     StyleP={"px-5"}
                     StyleL={"px-5 py-2"}
                  />
               ) : (
                  <>
                     <div className="overflow-auto h-[calc(100vh-240px)]">
                        {cartItems.map((product) => {
                           return (
                              <div
                                 key={product.id}
                                 className="flex relative items-start p-3 border-b-2 border-gray-200 hover:bg-gray-100 duration-300"
                              >
                                 <IoClose
                                    onClick={() => removeItem(product.id)}
                                    className="absolute text-lg right-4 top-4 text-gray-500 cursor-pointer hover:text-rose-500 duration-500"
                                 />
                                 {/* Image */}
                                 <div className=" w-[80px] h-[80px] overflow-hidden rounded-[35px]">
                                    <img
                                       src={`/images/books/${product.image}`}
                                       alt="img"
                                       className=" w-full h-full object-contain"
                                    />
                                 </div>
                                 {/* Text */}
                                 <div>
                                    <p className="text-sm font-semibold pt-2">
                                       {product.title}
                                    </p>
                                    <p className="text-sm py-[1px]">
                                       <span className="font-medium">
                                          Author:{" "}
                                       </span>
                                       <span className="text-gray-600">
                                          {product.author}
                                       </span>
                                    </p>
                                    <p className="text-sm font-medium text-rose-500">
                                       <span className="text-gray-500">
                                          {product.quantity}x{" "}
                                       </span>
                                       <span className="text-base">
                                          ${product.price}
                                       </span>
                                    </p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                     {/* Footer for modal */}
                     <div className="absolute bg-white pb-10 bottom-0 left-0 w-full">
                        <div className="mx-7 border-t-2 border-gray-200">
                           <div className="flex items-center justify-between py-4">
                              <p className="text-lg font-semibold">
                                 Subtotal:{" "}
                              </p>
                              <p className="text-rose-500 font-semibold text-lg">
                                 $ {totalPrice.toFixed(2)}
                              </p>
                           </div>
                           <Link
                              to="/shoppingcart"
                              onClick={() => setCartModalOpen(false)}
                              className="block text-center w-full px-15 py-[6px] mx-auto uppercase  text-[15px] text-black bg-gray-200 hover:bg-gray-300 font-semibold rounded-full cursor-pointer mb-3 duration-300"
                           >
                              view cart
                           </Link>
                           <Link
                              to="/checkout"
                              onClick={() => setCartModalOpen(false)}
                              className="block text-center w-full px-15 py-[6px] mx-auto uppercase bg-rose-500 hover:bg-rose-700 text-[15px] text-white font-semibold rounded-full cursor-pointer duration-300"
                           >
                              checkout
                           </Link>
                        </div>
                     </div>{" "}
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default ShoppingCartModal;
