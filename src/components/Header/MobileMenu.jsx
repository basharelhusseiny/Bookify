import { CiShoppingBasket } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CloseButton from "../common/CloseButton";
import Logo from "./Logo";

const MobileMenu = ({ isMobMenuOpen, setIsMobMenuOpen, navLinks }) => {
   const { handleOpenShoppingCart } = useShoppingCart();
   return (
      <div>
         {/* Header from Mobile */}
         <div className="hidden max-md:flex items-center justify-between">
            <div
               onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
               className="text-[25px] hover:cursor-pointer">
               {isMobMenuOpen ? <CloseButton /> : <RiMenu2Fill />}
            </div>
            <Logo />
            <CiShoppingBasket
               onClick={() => handleOpenShoppingCart()}
               className="text-3xl"
            />
         </div>
         {/* Content For Menu */}
         <div
            className={`${
               isMobMenuOpen
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-full opacity-0"
            } absolute z-50 bg-white top-full left-0 w-full h-screen p-5 duration-500 ease-in-out`}>
            <div>
               <div className="flex flex-col">
                  {navLinks.map((link) => {
                     return (
                        <NavLink
                           onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                           key={link.id}
                           to={link.path}
                           className="block py-3 capitalize font-semibold border-b border-b-rose-200 hover:text-rose-500">
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
