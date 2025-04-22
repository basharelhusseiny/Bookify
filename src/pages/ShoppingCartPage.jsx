import { Link } from "react-router";
import CloseButton from "../components/common/CloseButton";
import { IoClose } from "react-icons/io5";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const ShoppingCartPage = () => {
   const { cartItems, removeItem, totalPrice } = useShoppingCart();

   return (
      <div className="mt-[68px]">
         <div className="bg-rose-100 py-17">
            <h1 className="text-center  text-5xl max-sm:text-3xl uppercase font-extralight">
               Shopping cart
            </h1>
         </div>
         <div className="container mx-auto px-5">
            <div className="flex max-lg:flex-col mt-17 gap-15">
               {/* Table.................. */}
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
                           <tr
                              key={product.id}
                              className="border-b-2 border-gray-200"
                           >
                              <td className="py-3 w-[50px]">
                                 <CloseButton
                                    onClick={() => removeItem(product.id)}
                                 />
                              </td>
                              <td className="py-3 pr-3 w-[180px]">
                                 <img
                                    src={`/images/books/${product.image}`}
                                    className="w-[130px] h-[130px] object-contain"
                                    alt="photo"
                                 />
                              </td>
                              <td className="py-3 pr-7 w-[220px]">
                                 <p className="font-bold pb-2">
                                    {product.title}
                                 </p>
                                 <p>
                                    <span className="text-sm font-medium">
                                       Author:{" "}
                                    </span>
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
                                 $
                                 {(product.price * product.quantity).toFixed(2)}
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
               {/* Mobilee */}
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
                              <p className="font-semibold text-lg mr-5">
                                 {product.title}
                              </p>
                              <p className="text-lg">
                                 <span className="font-medium">Author: </span>
                                 <span className="text-gray-500">
                                    {product.author}
                                 </span>
                              </p>
                              <p className="flex items-center justify-between">
                                 <span className="capitalize font-semibold text-lg">
                                    price
                                 </span>
                                 <span className="text-lg text-rose-500">
                                    ${product.price}
                                 </span>
                              </p>
                              <p className="flex items-center justify-between">
                                 <span className="capitalize font-semibold text-lg">
                                    quantity
                                 </span>
                                 <span className="text-gray-500">
                                    x{product.quantity}
                                 </span>
                              </p>
                              <p className="flex items-center justify-between">
                                 <span className="capitalize font-semibold text-lg">
                                    subtotal
                                 </span>
                                 <span className="text-lg text-rose-500 font-medium">
                                    $4555
                                 </span>
                              </p>
                           </div>
                        </div>
                     );
                  })}
               </div>
               {/* Order Summary .................. */}
               <div className="flex-[30%] max-md:mb-[70px]">
                  <div className="border-2 border-gray-300 p-7 rounded-lg">
                     <h5 className="capitalize font-semibold text-3xl mb-5">
                        cart totals
                     </h5>
                     <p className="flex items-center justify-between border-b border-gray-300 pb-3 mb-6">
                        <span className="capitalize text-lg font-medium">
                           subtotal
                        </span>
                        <span className="text-rose-500 text-lg font-medium">
                           $ {totalPrice.toFixed(2)}
                        </span>
                     </p>
                     <p className="flex items-center justify-between mb-8">
                        <span className="capitalize text-xl font-medium">
                           total
                        </span>
                        <span className="text-rose-500 text-2xl font-semibold">
                           $ {totalPrice.toFixed(2)}
                        </span>
                     </p>
                     <Link
                        to="/checkout"
                        className="block text-center capitalize font-semibold bg-rose-500 text-white py-3 px-10 rounded-full mx-auto cursor-pointer hover:bg-rose-700 duration-300"
                     >
                        proceed to checkout
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShoppingCartPage;
