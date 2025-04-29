import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router";

const TopBar = () => {
   return (
      <div className="bg-slate-800 text-white py-2">
         <div className="container mx-auto px-4">
            <div className="flex justify-between">
               <div className="info flex items-center">
                  <Link
                     to="/shop"
                     className="text-white capitalize md:mr-5 underline hover:text-rose-400 duration-300">
                     find a bookify store
                  </Link>
                  <div className="max-md:hidden flex items-center">
                     <FiPhoneCall className="text-rose-500 mr-2" />
                     <p>+1 840-8415 69</p>
                  </div>
               </div>
               <div className="social flex items-center gap-5">
                  <FaFacebookF className="hover:text-blue-500 duration-200 cursor-pointer" />
                  <FaXTwitter className="hover:text-gray-400 duration-200 cursor-pointer" />
                  <FaInstagram className="hover:text-fuchsia-500 duration-200 cursor-pointer" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopBar;
