import { useEffect } from "react";
import { HashLoader } from "react-spinners";

const MainLoader = () => {
   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflow = "auto";
      };
   }, []);
   return (
      <div className="fixed z-[55] w-full h-screen bg-black/90 flex items-center justify-center">
         <HashLoader color="#ff2056" size={100} />
      </div>
   );
};

export default MainLoader;
