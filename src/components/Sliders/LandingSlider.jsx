import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const LandingSlider = () => {
   const [slider, setSlider] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setSlider((prev) => (prev === 1 ? 0 : 1));
      }, 5000);
      return () => clearInterval(interval);
   }, []);

   return (
      <section className="landing-slider relative h-[calc(100vh-108px)] overflow-hidden">
         <div className="absolute flex items-center gap-[6px] z-30 bottom-[60px] left-1/2 -translate-x-1/2 max-md:my-5">
            <button
               onClick={() => {
                  setSlider(0);
               }}
               aria-label="Go to first slide"
               className={`previous ${
                  slider === 0
                     ? "border-6 border-rose-400 bg-white"
                     : "animate-pulse"
               } bg-gray-400 w-4 h-4 rounded-full cursor-pointer hover:border-6 hover:border-rose-500 `}
            ></button>
            <button
               onClick={() => {
                  setSlider(1);
               }}
               aria-label="Go to second slide"
               className={`next ${
                  slider === 1
                     ? "border-6 border-[#c7ad75] bg-white"
                     : "animate-pulse"
               }  bg-gray-400 w-4 h-4 rounded-full cursor-pointer hover:border-6 `}
            ></button>
         </div>
         <div
            style={{ transform: `translateX(${-slider * 100}vw)` }}
            className="slider-wrapper min-w-full h-full flex duration-500 ease-in-out"
         >
            {/* Slide Oneeeeeeeeeeee */}
            <div className="slide-one relative h-full w-screen min-w-full bg-rose-100 overflow-hidden bg-[url(/images/backgrounnd.png)] bg-no-repeat bg-cover">
               <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2">
                     {/* Images */}
                     <div className="img relative text-center h-[calc(100vh-108px)] max-md:hidden">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
                           <img
                              src="/images/blob-haikei.svg"
                              alt="back"
                              className="w-[90%] max-sm:w-[600px]"
                           />
                           <motion.img
                              initial={{ opacity: 0, width: "50%" }}
                              whileInView={{ opacity: 1, width: "75%" }}
                              transition={{ duration: 1 }}
                              src="/images/rev_home8_6.png"
                              alt="image"
                              className="absolute z-20 w-[75%] -top-[65px] left-[10px] max-sm:-top-[40px] max-sm:w-[300px]"
                           />
                           <motion.img
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1, scale: "1.3px" }}
                              transition={{ duration: 2 }}
                              src="/images/rev_homde8_2.png"
                              alt="image"
                              className="absolute w-[11%] -top-[35px] left-[400px]"
                           />
                           <motion.img
                              initial={{ opacity: 0, x: -100 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1.5 }}
                              src="/images/rev_home666_12.png"
                              alt="image"
                              className="absolute top-[370px] left-[30px]  max-sm:top-[250px]"
                           />
                           <motion.img
                              initial={{ opacity: 0, y: -100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1.3 }}
                              src="/images/rev_home8_7.png"
                              alt="image"
                              className="absolute -top-[110px] max-sm:-top-[220px] "
                           />
                        </div>
                     </div>
                     {/* Text */}
                     <div className="relative w-full h-[calc(100vh-108px)] z-20 max-sm:-mt-[20px] ">
                        <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                           <motion.p
                              initial={{ opacity: 0, y: -70 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                              className="uppercase text-rose-500 mb-1"
                           >
                              best bookshelf in town
                           </motion.p>
                           <motion.div
                              initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              className="relative"
                           >
                              <img
                                 src="/images/revslider_vector.png"
                                 className="absolute left-[70px] top-[60px] -z-10"
                                 alt=""
                              />
                              <h3 className="text-[54px] max-md:text-[45px] capitalize font-bold tracking-wide">
                                 the best books of 20
                                 <span className="text-rose-500">25</span>
                              </h3>
                           </motion.div>
                           <motion.p
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              className="text-lg text-gray-700 capitalize mb-9  px-4"
                           >
                              limited time only. while supplies last!
                           </motion.p>
                           <motion.button
                              initial={{ opacity: 0, y: 70 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.9 }}
                              className=" bg-white capitalize rounded-full text-lg cursor-pointer hover:bg-black hover:text-white duration-300"
                           >
                              <Link
                                 to="/shop"
                                 className="flex py-3 px-8 items-center gap-3"
                              >
                                 shop now
                                 <FaArrowCircleRight className="animate-pulse text-rose-500" />
                              </Link>
                           </motion.button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Second Slideeeeeeeeeeeeeeeeeeeee */}
            <div className="slide-two relative h-full w-screen min-w-full bg-rose-100 overflow-hidden bg-[url(/images/blob-haikei.png)] bg-no-repeat bg-cover ">
               <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2">
                     {/* Images */}
                     <div className="img relative text-center h-[calc(100vh-108px)] max-md:hidden">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
                           <motion.img
                              initial={{ opacity: 0, width: "50%" }}
                              whileInView={{ opacity: 1, width: "90%" }}
                              transition={{ duration: 1 }}
                              src="/images/rev_home8.png"
                              alt="back"
                              className="w-[90%] max-sm:w-[600px]"
                           />
                           <img
                              src="/images/rev_homde8_2.png"
                              alt="image"
                              className="absolute -z-5 w-[11%] -top-[35px] left-[400px]"
                           />
                           <img
                              src="/images/rev_home666_12.png"
                              alt="image"
                              className="absolute top-[400px] left-[30px]  max-sm:top-[250px]"
                           />
                           <img
                              src="/images/rev_home8_7.png"
                              alt="image"
                              className="absolute -z-10 -top-[20px] max-sm:-top-[220px] "
                           />
                        </div>
                     </div>
                     {/* Text */}
                     <div className="relative w-full h-[calc(100vh-108px)] z-20 max-sm:-mt-[20px] ">
                        <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                           <motion.p
                              initial={{ opacity: 0, y: -70 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                              className="uppercase text-rose-500 mb-1"
                           >
                              best bookshelf in town
                           </motion.p>
                           <motion.div
                              initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              className="relative"
                           >
                              <img
                                 src="/images/revslider_vector.png"
                                 className="absolute left-[70px] top-[60px] -z-10"
                                 alt=""
                              />
                              <h3 className="text-[54px] max-lg:text-[45px] max-sm:text-[40px] capitalize font-bold tracking-wide  max-md:text-[50px]">
                                 fiction classics for fall{" "}
                                 <span className="text-rose-500">&</span> winter
                                 reading
                              </h3>
                           </motion.div>
                           <motion.p
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              className="text-lg text-gray-700 capitalize mb-9  px-4"
                           >
                              limited time only. while supplies last!
                           </motion.p>
                           <motion.button
                              initial={{ opacity: 0, y: 70 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.9 }}
                              className=" bg-black text-white capitalize  rounded-full text-lg cursor-pointer hover:bg-white hover:text-black duration-300"
                           >
                              <Link
                                 to="/shop"
                                 className="flex py-3 px-8 items-center gap-3"
                              >
                                 shop now
                                 <FaArrowCircleRight className="animate-pulse text-rose-500" />
                              </Link>
                           </motion.button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default LandingSlider;
