import { motion } from "framer-motion";
import { Link } from "react-router";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { useWishlist } from "../../Context/WishlistModalContext";

const EmptyWishlist = () => {
   const { setWishlistModalOpen } = useWishlist();
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="flex flex-col items-center justify-center py-14 text-center text-gray-700 px-5"
      >
         <BsFillHeartbreakFill size={120} className="text-rose-400 mb-7" />
         <h2 className={`text-lg font-semibold mb-2`}>
            Oops! Your wish list is empty.
         </h2>
         <div className={`text-gray-500 mb-6`}>
            <p>Let’s fill it with your favorite books!</p>
         </div>
         <Link
            to="/shop"
            onClick={() => setWishlistModalOpen(false)}
            className={`px-5 max-sm:px-2 py-2 bg-rose-500 capitalize text-white rounded-full font-medium hover:bg-rose-700 duration-300`}
         >
            Start adding your favorite books!
         </Link>
      </motion.div>
   );
};

export default EmptyWishlist;
