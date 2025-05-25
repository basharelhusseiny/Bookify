import { useState } from "react";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const OrderDetails = () => {
   const { cartItems, totalPrice } = useShoppingCart();
   const [selectedOption, setSelectedOption] = useState(null);

   return (
      <div className="border-2 border-gray-300 p-7 rounded-xl">
         <h3 className="capitalize text-2xl font-semibold">Your order</h3>
         <div className="flex justify-between items-center mt-7 text-lg capitalize font-medium border-b-2 border-gray-300 pb-5">
            <p>product</p>
            <p>subtotal</p>
         </div>
         <div>
            {cartItems.map((book) => (
               <div
                  key={book.id}
                  className="py-4 border-b-2 border-gray-300 last:border-0"
               >
                  <div className="flex items-center justify-between">
                     <p className="text-[17px]">{book.title}</p>
                     <p className="text-[18px] font-light">
                        ${book.price * book.quantity}
                     </p>
                  </div>
                  <div className="mb-4 mt-1">
                     <span className="text-[14px] text-rose-500">
                        {book.quantity}x
                     </span>
                     <span className="text-sm"> ${book.price}</span>
                  </div>
                  <div>
                     <span className="capitalize">author: </span>
                     <span className="text-gray-500 text-[15px]">
                        {book.author}
                     </span>
                  </div>
               </div>
            ))}
         </div>

         <div className="capitalize border-t-2 border-gray-300 py-4 flex justify-between items-center">
            <p>subtotal</p>
            <p>${totalPrice}</p>
         </div>
         <div className="capitalize border-y-2 border-gray-300 py-5 flex justify-between items-center text-xl font-semibold">
            <p>total</p>
            <p>${totalPrice}</p>
         </div>

         <div className="py-5 space-y-[10px]">
            {/* First Option */}
            <div
               onClick={() => setSelectedOption("bank")}
               className="bg-gray-100 p-4 cursor-pointer"
            >
               <div className="flex items-center gap-1.5">
                  <input
                     type="radio"
                     name="payment"
                     checked={selectedOption === "bank"}
                     readOnly
                     className="accent-rose-500"
                  />
                  <label className="text-lg font-medium">
                     Direct bank transfer
                  </label>
               </div>
               <div
                  style={{
                     maxHeight: selectedOption === "bank" ? "200px" : "0",
                     opacity: selectedOption === "bank" ? 1 : 0,
                     overflow: "hidden",
                     transition: "all 0.5s ease",
                  }}
               >
                  <p className="pt-3 pl-5 text-sm text-gray-600">
                     Make your payment directly into our bank account. Please
                     use your Order ID as the payment reference. Your order will
                     not be shipped until the funds have cleared in our account.
                  </p>
               </div>
            </div>
            {/* Second Option */}
            <div
               onClick={() => setSelectedOption("check")}
               className="bg-gray-100 p-4 cursor-pointer"
            >
               <div className="flex items-center gap-1.5">
                  <input
                     type="radio"
                     name="payment"
                     checked={selectedOption === "check"}
                     readOnly
                     className="accent-rose-500"
                  />
                  <label className="text-lg font-medium">Check payments</label>
               </div>
               <div
                  style={{
                     maxHeight: selectedOption === "check" ? "200px" : "0",
                     opacity: selectedOption === "check" ? 1 : 0,
                     overflow: "hidden",
                     transition: "all 0.5s ease",
                  }}
               >
                  <p className="pt-3 pl-5 text-sm text-gray-600">
                     Send a check to our office address.
                  </p>
               </div>
            </div>
            {/* Third Option */}
            <div
               onClick={() => setSelectedOption("cash")}
               className="bg-gray-100 p-4 cursor-pointer"
            >
               <div className="flex items-center gap-1.5">
                  <input
                     type="radio"
                     name="payment"
                     checked={selectedOption === "cash"}
                     readOnly
                     className="accent-rose-500"
                  />
                  <label className="text-lg font-medium">
                     Cash on delivery
                  </label>
               </div>
               <div
                  style={{
                     maxHeight: selectedOption === "cash" ? "200px" : "0",
                     opacity: selectedOption === "cash" ? 1 : 0,
                     overflow: "hidden",
                     transition: "all 0.5s ease",
                  }}
               >
                  <p className="pt-3 pl-5 text-sm text-gray-600">
                     Pay with cash upon delivery.
                  </p>
               </div>
            </div>
         </div>
         <div>
            <p className="text-[15px] px-1 text-gray-600">
               Your personal data will be used to process your order, support
               your experience throughout this website, and for other purposes
               described in our Privacy policy.
            </p>
            <button className="w-full max-auto py-[9px] rounded-full mt-5 cursor-pointer text-lg font-semibold text-white capitalize bg-rose-500 hover:bg-rose-700 duration-300">
               place order
            </button>
         </div>
      </div>
   );
};

export default OrderDetails;
