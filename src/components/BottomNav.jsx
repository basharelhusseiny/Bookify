import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

const BottomNav = () => {
   return (
      <div className="fixed z-49 bottom-0 left-0 w-full bg-gray-100 hidden max-md:block">
         <div className="grid grid-cols-4 text-center">
            <div className="border-r border-r-gray-400 py-2 cursor-pointer">
               <IoIosSearch  className="w-full text-xl "/>
               <p className="font-semibold">Search</p>
            </div>
            <div className="border-r border-r-gray-400 py-2 cursor-pointer">
               <IoHomeOutline  className="w-full text-xl "/>
               <p className="font-semibold">Shop</p>
            </div>
            <div className="border-r border-r-gray-400 py-2 cursor-pointer">
               <IoHeartOutline className="w-full text-xl "/>
               <p className="font-semibold">Wishlist</p>
            </div>
            <div className="py-2">
               <FiUser  className="w-full text-xl cursor-pointer "/>
               <p className="font-semibold">Account</p>
            </div>
         </div>
      </div>
   );
};

export default BottomNav;
