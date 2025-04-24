import { Link } from "react-router";

const OrderSummary = ({totalPrice}) => {
   return (
      <div className="flex-[30%] max-md:mb-[70px]">
         <div className="border-2 border-gray-300 p-7 rounded-lg">
            <h5 className="capitalize font-semibold text-3xl mb-5">
               cart totals
            </h5>
            <p className="flex items-center justify-between border-b border-gray-300 pb-3 mb-6">
               <span className="capitalize text-lg font-medium">subtotal</span>
               <span className="text-rose-500 text-lg font-medium">
                  $ {totalPrice.toFixed(2)}
               </span>
            </p>
            <p className="flex items-center justify-between mb-8">
               <span className="capitalize text-2xl font-medium">total</span>
               <span className="text-rose-500 text-2xl font-semibold">
                  $ {totalPrice.toFixed(2)}
               </span>
            </p>
            <Link
               to="/checkout"
               className="block text-center capitalize font-semibold bg-rose-500 text-white py-3 xl:px-10 rounded-full mx-auto cursor-pointer hover:bg-rose-700 duration-300"
            >
               proceed to checkout
            </Link>
         </div>
      </div>
   );
};

export default OrderSummary;
