import { useState } from "react";

const QuantitySelector = () => {
   const [quantity, setQuantity] = useState(1);

   return (
      <div className="flex border-2 border-gray-300 w-fit rounded-full overflow-hidden">
         <button
            disabled={quantity <= 1}
            onClick={() => setQuantity((prev) => prev - 1)}
            className="block py-1 px-3 cursor-pointer text-xl hover:bg-rose-500 hover:text-white duration-300"
         >
            -
         </button>
         <input
            type="number"
            name="quantity"
            id="qty"
            className="no-spinner outline-0 w-[50px] bg-gray-100 text-center"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
         />
         <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="block py-[5px] px-3 cursor-pointer text-xl hover:bg-rose-500 hover:text-white duration-300"
         >
            +
         </button>
      </div>
   );
};

export default QuantitySelector;
