import { IoClose } from "react-icons/io5";

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
                  <div className="w-[90px] h-[130px]">
                     <img
                        src={`/images/books/${product.image}`}
                        alt=""
                        className="w-full h-full"
                     />
                  </div>
                  <div className="w-full">
                     <p className="font-semibold mr-5">
                        {product.title}
                     </p>
                     <p className="text-lg">
                        <span className="font-medium">Author: </span>
                        <span className="text-gray-500 text-[15px]">{product.author}</span>
                     </p>
                     <p className="flex items-center justify-between">
                        <span className="capitalize font-semibold">
                           price
                        </span>
                        <span className="text-rose-500">
                           ${product.price}
                        </span>
                     </p>
                     <p className="flex items-center justify-between">
                        <span className="capitalize font-semibold">
                           quantity
                        </span>
                        <span className="text-gray-500">
                           x{product.quantity}
                        </span>
                     </p>
                     <p className="flex items-center justify-between">
                        <span className="capitalize font-semibold">
                           subtotal
                        </span>
                        <span className="text-rose-500 font-semibold">
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
