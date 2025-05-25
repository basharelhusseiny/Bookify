import { motion } from "framer-motion";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const EmptyCart = ({ styleH, StyleP, StyleL }) => {
   const { setCartModalOpen } = useShoppingCart();
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="flex flex-col items-center justify-center py-14 text-center text-gray-700 px-5"
      >
         <BsCartX size={100} className="text-rose-400 mb-7" />
         <h2 className={`${styleH} font-semibold mb-2`}>
            Oops! Nothing in your cart yet.
         </h2>
         <p className={`${StyleP} mb-6 text-gray-500`}>
            Looks like you haven’t added anything yet.
         </p>
         <Link
            to="/shop"
            onClick={() => setCartModalOpen(false)}
            className={`${StyleL} bg-rose-500 capitalize text-white rounded-full font-medium hover:bg-rose-700 duration-300`}
         >
            Let’s find something!
         </Link>
      </motion.div>
   );
};

export default EmptyCart;
