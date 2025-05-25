import { useParams } from "react-router";
import { useRef, useState } from "react";
import { books } from "../data/books";
import { FaHeart } from "react-icons/fa";
import BookRating from "../components/common/BookRating";
import ViewCartBtn from "../components/ViewModal/ViewCartBtn";
import QuantitySelector from "../components/common/QuantitySelector";
import { useWishlist } from "../Context/WishlistModalContext";
import toast from "react-hot-toast";

const SingleBookPage = () => {
   const { id } = useParams();
   const mainImg = useRef(null);
   const [animate, setAnimate] = useState(false);
   const [activeImg, setActiveImg] = useState(false);
   const [localQty, setLocalQty] = useState(1);
   const { handleOpenWishlist, addToWishList, isInWishlist } = useWishlist();

   const bookData = books.find((book) => book.id === +id);

   const changeImg = (imgSrc) => {
      setAnimate(true);
      mainImg.current.src = imgSrc;
      setTimeout(() => setAnimate(false), 300);
   };

   if (!bookData) {
      return (
         <div className="m-[150px] text-4xl max-sm:text-xl font-light uppercase text-center text-red-500">
            Book not found
         </div>
      );
   }
   return (
      <div className="my-[110px]">
         <div className="container mx-auto px-5">
            <div className="flex max-md:flex-col gap-10">
               {/* Half of the pictures */}
               <div className="img flex-1">
                  <div className="flex justify-center items-center bg-rose-50 rounded-lg">
                     <img
                        src={`/images/books/${bookData.image}`}
                        ref={mainImg}
                        alt="book"
                        className={`my-7 w-[350px] h-[350px] object-contain ${
                           animate ? "scale-80" : "scale-100"
                        } duration-300`}
                     />
                  </div>
                  <div className="mt-6">
                     <button
                        onClick={() => {
                           changeImg(`/images/books/${bookData.image}`);
                           setActiveImg(false);
                        }}
                        className={`${
                           activeImg ? "border-gray-300" : "border-rose-300"
                        } w-[100px] h-[100px] border-2 rounded-lg py-3 mr-3 cursor-pointer duration-300`}
                     >
                        <img
                           src={`/images/books/${bookData.image}`}
                           alt="book"
                           className="w-full h-full object-contain"
                        />
                     </button>
                     <button
                        onClick={() => {
                           changeImg("/images/book3.png");
                           setActiveImg(true);
                        }}
                        className={`${
                           activeImg ? "border-rose-300" : "border-gray-300"
                        } w-[100px] h-[100px] border-2 rounded-lg py-3 mr-3 cursor-pointer duration-300`}
                     >
                        <img
                           src="/images/book3.png"
                           alt="book"
                           className="w-full h-full object-contain"
                        />
                     </button>
                  </div>
               </div>
               {/* Half of the texts */}
               <div className="info flex-1">
                  <h3 className="text-3xl font-semibold mb-5">
                     {bookData?.title}
                  </h3>
                  <BookRating
                     rate={bookData?.rating}
                     reviews={bookData?.reviews}
                  />
                  <p className="text-2xl text-rose-500 font-semibold my-3">
                     ${bookData?.price}
                  </p>
                  <p className="text-sm tracking-wide text-gray-600 leading-[22px]">
                     {bookData?.summary}
                  </p>
                  <div className="flex max-sm:flex-col max-sm:items-start items-center my-5">
                     <QuantitySelector
                        quantity={localQty}
                        setQuantity={setLocalQty}
                     />
                     <div className="flex max-sm:mt-3">
                        <ViewCartBtn bookData={bookData} localQty={localQty} />
                        <button
                           onClick={() => {
                              isInWishlist(bookData)
                                 ? toast.error(
                                      "The book is already in your wishlist!"
                                   )
                                 : (addToWishList(bookData),
                                   handleOpenWishlist());
                           }}
                           className="flex items-center justify-center cursor-pointer h-[40px] max-xl:px-3  bg-white border-2 border-gray-300 hover:bg-rose-500 rounded-xl text-gray-800 hover:text-white px-5 duration-200"
                        >
                           <FaHeart className="text-xl mr-[6px] max-md:mr-[3px] animate-pulse" />
                           <span className="text-[15px] max-md:text-[11px] font-semibold">
                              Add to Wishlist
                           </span>
                        </button>
                     </div>
                  </div>
                  <h4 className="capitalize text-[15px] mb-1">
                     <span className="font-medium">author : </span>
                     <span className="text-rose-500 text-sm">
                        {bookData?.author}
                     </span>
                  </h4>
                  <h4 className="capitalize text-[15px] mb-1">
                     <span className="font-medium">published : </span>
                     <span className="text-rose-500 text-sm">
                        {bookData?.PublicationDate}
                     </span>
                  </h4>
                  <h4 className="capitalize text-[15px] mb-1">
                     <span className="font-medium">print length : </span>
                     <span className="text-rose-500 text-sm">
                        {bookData?.printLength} Pages
                     </span>
                  </h4>
                  <h4 className="capitalize text-[15px] mb-1">
                     <span className="font-medium">language : </span>
                     <span className="text-rose-500 text-sm">
                        {bookData?.language}
                     </span>
                  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleBookPage;
