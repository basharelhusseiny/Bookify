import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const BookHighlights = () => {
   return (
      <section className="book-highlights my-15">
         <div className="container mx-auto px-4">
            <div className="highlights grid md:grid-cols-8 gap-7 overflow-hidden">
               <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="group md:col-span-2 h-[450px] rounded-2xl overflow-hidden relative text-center">
                  <img
                     src="/images/h1_banner1.jpg"
                     className="min-w-full min-h-full hover:scale-115 duration-300"
                     alt="img"
                  />
                  <div className="absolute z-10 bottom-[50px] left-1/2 -translate-x-1/2">
                     <p className="underline-hover w-fit mx-auto uppercase font-semibold  text-sm">
                        get extra
                     </p>
                     <h4 className="capitalize text-rose-500 text-2xl font-semibold my-3 max-w-[250px]">
                        Up To 15% off
                     </h4>
                     <Link
                        to="/shop"
                        className="capitalize w-fit mx-auto flex items-center font-semibold cursor-pointer hover:text-rose-500 duration-200">
                        <p>Shop Now</p>
                        <FaArrowRight className="animate-pulse ml-2" />
                     </Link>
                  </div>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, scale:0.5 }}
                  whileInView={{ opacity: 1, scale:1 }}
                  transition={{ duration: 1 }}
                  className="group md:col-span-4 h-[450px] rounded-2xl overflow-hidden relative text-center">
                  <img
                     src="/images/h2_banner2.jpg"
                     className="min-w-full min-h-full hover:scale-115 duration-300"
                     alt="img"
                  />
                  <div className="absolute z-2 top-[50px] left-1/2 -translate-x-1/2">
                     <p className="underline-hover w-fit mx-auto uppercase font-semibold text-sm">
                        what hot in august
                     </p>
                     <h4 className="capitalize text-rose-500 text-2xl font-semibold my-3">
                        The Fiction You Need to Read in 2025
                     </h4>
                     <Link
                        to="/shop"
                        className="capitalize w-fit mx-auto flex items-center font-semibold cursor-pointer hover:text-rose-500 duration-200">
                        <p>Shop Now</p>
                        <FaArrowRight className="animate-pulse ml-2" />
                     </Link>
                  </div>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="group md:col-span-2 h-[450px] rounded-2xl overflow-hidden relative text-center">
                  <img
                     src="/images/h3_banner3.jpg"
                     className="min-w-full min-h-full hover:scale-115 duration-300"
                     alt="img"
                  />
                  <div className="absolute z-10 top-[50px] left-1/2 -translate-x-1/2">
                     <p className="underline-hover w-fit mx-auto uppercase font-semibold text-sm">
                        summer’s pick
                     </p>
                     <h4 className="capitalize text-rose-500 text-2xl font-semibold my-3 max-w-[270px]">
                        best kids books
                     </h4>
                     <Link
                        to="/shop"
                        className="capitalize w-fit mx-auto flex items-center font-semibold cursor-pointer hover:text-rose-500 duration-200">
                        <p>Shop Now</p>
                        <FaArrowRight className="animate-pulse ml-2" />
                     </Link>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default BookHighlights;
