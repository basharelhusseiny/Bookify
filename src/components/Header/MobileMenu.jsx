import { CiShoppingBasket } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CloseButton from "../common/CloseButton";
import Logo from "./Logo";
import { IoHeartOutline } from "react-icons/io5";
import { useWishlist } from "../../Context/WishlistModalContext";

const MobileMenu = ({ isMobMenuOpen, setIsMobMenuOpen, navLinks }) => {
   const { handleOpenShoppingCart, cartItems } = useShoppingCart();
   const { handleOpenWishlist, wishlistBooks } = useWishlist();

   return (
      <div>
         {/* Header from Mobile */}
         <div className="hidden max-md:flex items-center justify-between">
            <div
               onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
               className="text-[25px] hover:cursor-pointer"
            >
               {isMobMenuOpen ? <CloseButton /> : <RiMenu2Fill />}
            </div>
            <Logo />
            <div className="flex items-center gap-1">
               <div className="relative cursor-pointer">
                  <IoHeartOutline
                     onClick={() => handleOpenWishlist()}
                     className="text-[28px]"
                  />
                  <span
                     className={`${
                        wishlistBooks.length === 0 ? "hidden" : "flex"
                     } absolute items-center justify-center w-[14px] h-[14px] bg-rose-500 rounded-full -top-[6px] -right-[5px] text-[10px] font-semibold text-white`}
                  >
                     {wishlistBooks.length}
                  </span>
               </div>
               <div className="relative cursor-pointer">
                  <CiShoppingBasket
                     onClick={() => handleOpenShoppingCart()}
                     className="text-3xl"
                  />
                  <span
                     className={`${
                        cartItems.length === 0 ? "hidden" : "flex"
                     } absolute items-center justify-center w-[14px] h-[14px] bg-rose-500 rounded-full -top-1 -right-[5px] text-[10px] font-semibold text-white`}
                  >
                     {cartItems.length}
                  </span>
               </div>
            </div>
         </div>
         {/* Content For Menu */}
         <div
            className={`${
               isMobMenuOpen
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-full opacity-0"
            } absolute z-50 bg-white top-full left-0 w-full h-screen p-5 duration-500 ease-in-out`}
         >
            <div>
               <div className="flex flex-col">
                  {navLinks.map((link) => {
                     return (
                        <NavLink
                           onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                           key={link.id}
                           to={link.path}
                           className="block py-3 capitalize font-semibold border-b border-b-rose-200 hover:text-rose-500"
                        >
                           {link.link}
                        </NavLink>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MobileMenu;
