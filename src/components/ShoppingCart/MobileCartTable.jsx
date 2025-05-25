import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const MobileCartTable = ({ cartItems, removeItem }) => {
   return (
      <div className="hidden max-md:block">
         {cartItems.map((product) => {
            return (
               <div
                  key={product.id}
                  className="flex items-center relative py-5 border-b-2 border-gray-200 gap-5"
               >
                  <IoClose
                     onClick={() => removeItem(product.id)}
                     className="absolute text-lg right-0 top-6 text-gray-500 cursor-pointer hover:text-rose-500 duration-500"
                  />
                  <Link
                     to={`/bookpage/${product.id}`}
                     className="block w-[90px] h-[130px]"
                  >
                     <img
                        src={`/images/books/${product.image}`}
                        alt={product.title}
                        className="w-full h-full"
                     />
                  </Link>
                  <div className="w-full">
                     <Link
                        to={`/bookpage/${product.id}`}
                        className="block font-semibold text-lg mr-5 hover:text-rose-500 duration-200"
                     >
                        {product.title}
                     </Link>
                     <p className="text-lg">
                        <span className="capitalize font-medium">Author: </span>
                        <span className="text-gray-500 text-[15px]">
                           {product.author}
                        </span>
                     </p>
                     <p className="flex items-center justify-between">
                        <span className="capitalize font-medium">price:</span>
                        <span className="text-rose-500">${product.price}</span>
                     </p>
                     <p className="flex items-center justify-between">
                        <span className="capitalize font-medium">
                           quantity:
                        </span>
                        <span className="text-gray-500">
                           x{product.quantity}
                        </span>
                     </p>
                     <p className="flex items-center justify-between">
                        <span className="capitalize font-medium">
                           subtotal:
                        </span>
                        <span className="text-rose-500 font-medium">
                           ${(product.price * product.quantity).toFixed(2)}
                        </span>
                     </p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default MobileCartTable;
