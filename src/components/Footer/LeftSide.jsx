import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import Logo from "../Header/Logo";

const LeftSide = () => {
   return (
      <div className="flex max-sm:flex-col gap-10 max-lg:gap-5">
         <div className="flex-1 border-r-2 border-zinc-700 max-sm:border-0 max-sm:mb-6 max-lg:pr-5">
            <div className="mb-6">
               <Logo textColor={"text-white"} />
            </div>
            <p className="text-[15px] text-zinc-400">
               1418 River Drive, Suite 35
            </p>
            <p className="text-[15px] text-zinc-400">Cottonhall, CA 9622</p>
            <a
               href="#"
               className="block w-fit text-zinc-200 uppercase text-sm underline my-5 hover:text-rose-500 duration-200"
            >
               show on map
            </a>
            <div className="flex items-center mt-8 gap-5">
               <FaFacebookF className="text-zinc-400 hover:text-blue-500 duration-200 text-xl cursor-pointer" />
               <FaXTwitter className="text-zinc-400 hover:text-black duration-200 text-xl cursor-pointer" />
               <FaInstagram className="text-zinc-400 hover:text-fuchsia-500 duration-200 text-xl cursor-pointer" />
            </div>
         </div>
         <div className="flex-1">
            <p className="text-white capitalize font-medium text-[17px]">
               need help
            </p>
            <p className="text-2xl max-lg:text-lg text-rose-500 font-semibold mt-3 mb-8 max-sm:mb-5">
               +(84) - 4992 - 7789
            </p>
            <p className="text-zinc-400 text-sm mb-1 max-lg:w-[200px]">
               Monday – Friday: 9:00-20:00
            </p>
            <p className="text-zinc-400 text-sm ">Saturday: 11:00 – 15:00</p>
            <p className="text-zinc-200 mt-6 text-lg max-lg:w-[200px]">
               contact@example.com
            </p>
         </div>
      </div>
   );
};

export default LeftSide;
