import { useState } from "react";
import { books } from "../../data/books";
import BookCards from "./BookCards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const BookSlider = () => {
   const [sliderIndex, setSliderIndex] = useState(0);
   const maxIndex = books.length - 3;

   return (
      <section className="book-slider mt-20">
         <div className="container mx-auto px-4 overflow-hidden relative">
            {/* Header of Section */}
            <div className="header flex justify-between items-center">
               <h3 className="capitalize text-4xl max-sm:text-2xl font-semibold">
                  Popular Books
               </h3>
               <div className="flex-1 mx-12 max-sm:mx-4 h-[1px] bg-gray-300"></div>
               <Link
                  to="/shop"
                  className="capitalize text-white bg-rose-500 hover:bg-rose-700 py-2 px-6 max-sm:px-4 rounded-full duration-200"
               >
                  view All
               </Link>
            </div>
            {/* Button For Slider */}
            {sliderIndex > 0 && (
               <button
                  onClick={() => setSliderIndex((prev) => prev - 1)}
                  className="max-sm:hidden absolute z-40 top-1/2 left-[10px] cursor-pointer w-[30px] h-[60px] bg-rose-500 rounded-xl flex justify-center items-center"
               >
                  <FaArrowLeft className="text-white text-xl" />
               </button>
            )}
            {sliderIndex < maxIndex && (
               <button
                  onClick={() => setSliderIndex((prev) => prev + 1)}
                  className="max-sm:hidden absolute z-40 top-1/2 right-[40px] cursor-pointer w-[30px] h-[60px] bg-rose-500 rounded-xl flex justify-center items-center"
               >
                  <FaArrowRight className="text-white text-xl" />
               </button>
            )}
            {/* Book Slider */}
            <motion.div
               drag="x"
               dragConstraints={{ left: -300 * maxIndex, right: 0 }}
               animate={{ x: sliderIndex * -300 }}
               transition={{ type: "spring", stiffness: 200, damping: 20 }}
               className="book-slider-wrapper relative my-13"
            >
               <BookCards books={books} />
            </motion.div>
         </div>
      </section>
   );
};

export default BookSlider;
