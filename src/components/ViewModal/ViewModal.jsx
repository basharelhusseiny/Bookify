import { useEffect, useState } from "react";
import { useModal } from "../../Context/ModalContext";
import CloseButton from "../common/CloseButton";
import BookRating from "../common/BookRating";
import ViewCartBtn from "./ViewCartBtn";
import QuantitySelector from "../common/QuantitySelector";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../Context/WishlistModalContext";
import toast from "react-hot-toast";

const ViewModal = () => {
   const { isModalOpen, selectedBook, setIsModalOpen } = useModal();
   const { isInWishlist, addToWishList, handleOpenWishlist } = useWishlist();
   const [localQty, setLocalQty] = useState(1);

   // Prevent scrolling when opening the Modal
   useEffect(() => {
      isModalOpen
         ? (document.body.style.overflow = "hidden")
         : (document.body.style.overflow = "auto");
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isModalOpen]);

   return (
      <div
         onClick={() => setIsModalOpen(false)}
         className={`${
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
         } fixed top-0 left-0 w-full h-screen bg-gray-800/60 z-50 duration-500 `}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={`${
               isModalOpen ? "scale-100 delay-300" : "scale-0"
            } absolute w-[80%] h-[80%] md:w-[55%] md:h-[90%] lg:w-[900px] lg:h-[400px] bg-white top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 duration-600`}
         >
            <div className="flex flex-col lg:flex-row h-full overflow-auto custom-scrollbar">
               {/* Image */}
               <div className="flex-1">
                  <div className="flex justify-center items-center h-full bg-rose-50">
                     <img
                        src={`/images/books/${selectedBook?.image}`}
                        alt="Book Image"
                        className="my-7 w-[310px] h-[310px] object-contain"
                     />
                  </div>
               </div>
               {/* Div for Text */}
               <div className="relative flex-1 lg:overflow-auto custom-scrollbar p-5">
                  <div className="fixed right-4 top-4 ">
                     <CloseButton
                        onClick={() => setIsModalOpen(false)}
                        backgroundColor={"#fff1f2"}
                     />
                  </div>
                  <h3 className="text-3xl font-semibold mb-2 mr-7">
                     {selectedBook?.title}
                  </h3>
                  <BookRating
                     rate={selectedBook?.rating}
                     reviews={selectedBook?.reviews}
                  />
                  <p className="text-2xl text-rose-500 font-semibold my-2">
                     ${selectedBook?.price}
                  </p>
                  <p className="text-sm tracking-wide text-gray-600 leading-[22px]">
                     {selectedBook?.summary}
                  </p>
                  <div className="flex max-sm:flex-col max-sm:items-start items-center my-5">
                     <QuantitySelector
                        quantity={localQty}
                        setQuantity={setLocalQty}
                     />
                     <div className="flex max-sm:mt-3">
                        <ViewCartBtn
                           selectedBook={selectedBook}
                           localQty={localQty}
                        />
                        <button
                           onClick={() => {
                              isInWishlist(selectedBook)
                                 ? toast.error(
                                      `You already love ${selectedBook.title}! 📚`
                                   )
                                 : (setIsModalOpen(false),
                                   addToWishList(selectedBook),
                                   handleOpenWishlist());
                           }}
                           className="cursor-pointer h-[40px] max-md:px-3 bg-white border-2 border-gray-300 hover:bg-rose-500 rounded-xl text-gray-800 hover:text-white px-5 duration-300"
                        >
                           <FaHeart className="text-xl animate-pulse" />
                        </button>
                     </div>
                  </div>
                  <h4 className="capitalize text-[15px] mb-1">
                     <span className="font-medium">author : </span>
                     <span className="text-rose-500 text-sm">
                        {selectedBook?.author}
                     </span>
                  </h4>
                  <h4 className="capitalize text-[15px]">
                     <span className="font-medium">published : </span>
                     <span className="text-rose-500 text-sm">
                        {selectedBook?.PublicationDate}
                     </span>
                  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ViewModal;
