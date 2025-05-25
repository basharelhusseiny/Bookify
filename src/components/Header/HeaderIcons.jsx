import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { useWishlist } from "../../Context/WishlistModalContext";
const HeaderIcons = () => {
   const { handleOpenShoppingCart, cartItems } = useShoppingCart();
   const { handleOpenWishlist, wishlistBooks } = useWishlist();

   return (
      <div className="flex items-center">
         <IoIosSearch className="border-r border-r-gray-200 m-1 pr-2 text-[30px] cursor-pointer hover:text-rose-500 duration-200" />
         <div className="relative border-r border-r-gray-200 m-1 pr-2 cursor-pointer">
            <IoHeartOutline
               onClick={() => handleOpenWishlist()}
               className="text-[23px] hover:text-rose-500 duration-200"
            />
            <span
               className={`${
                  wishlistBooks.length === 0 ? "hidden" : "flex"
               } absolute items-center justify-center w-[14px] h-[14px] bg-rose-500 rounded-full -top-[5px] right-[2px] text-[10px] font-semibold text-white`}
            >
               {wishlistBooks.length}
            </span>
         </div>
         <div className="relative border-r border-r-gray-200 m-1 pr-2 cursor-pointer">
            <CiShoppingBasket
               onClick={() => handleOpenShoppingCart()}
               className="text-[24px] hover:text-rose-500 duration-200"
            />
            <span
               className={`${
                  cartItems.length === 0 ? "hidden" : "flex"
               } absolute items-center justify-center w-[14px] h-[14px] bg-rose-500 rounded-full -top-1 right-[2px] text-[10px] font-semibold text-white`}
            >
               {cartItems.length}
            </span>
         </div>
         <FiUser className=" m-1 text-[23px] cursor-pointer hover:text-rose-500 duration-200" />
      </div>
   );
};

export default HeaderIcons;
