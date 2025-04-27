import { Link } from "react-router";
import CloseButton from "../common/CloseButton";

const CartTable = ({ cartItems, removeItem }) => {
   return (
      <table className="flex-[70%] max-md:hidden">
         <thead className="border-b-2 border-gray-200 capitalize text-[15px]">
            <tr>
               <th></th>
               <th></th>
               <th className="text-start pb-4">product</th>
               <th className="text-start pb-4">price</th>
               <th className="text-start pb-4">Quantity</th>
               <th className="text-start pb-4">subtotal</th>
            </tr>
         </thead>
         <tbody>
            {cartItems.map((product) => {
               return (
                  <tr key={product.id} className="border-b-2 border-gray-200">
                     <td className="py-3 w-[50px]">
                        <CloseButton onClick={() => removeItem(product.id)} />
                     </td>
                     <td className="py-3 pr-3 w-[180px]">
                        <Link to={`/bookpage/${product.id}`}>
                           <img
                              src={`/images/books/${product.image}`}
                              className="w-[130px] h-[130px] object-contain"
                              alt="photo"
                           />
                        </Link>
                     </td>
                     <td className="py-3 pr-7 w-[220px]">
                        <Link
                           to={`/bookpage/${product.id}`}
                           className="font-bold pb-2 hover:text-rose-500 duration-200"
                        >
                           {product.title}
                        </Link>
                        <p>
                           <span className="text-sm font-medium">Author: </span>
                           <span className="text-sm text-gray-500">
                              {product.author}
                           </span>
                        </p>
                     </td>
                     <td className="py-3 font-semibold text-rose-500">
                        ${product.price}
                     </td>
                     <td>x{product.quantity}</td>
                     <td className="py-3 text-rose-500 font-semibold text-lg">
                        ${(product.price * product.quantity).toFixed(2)}
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default CartTable;
