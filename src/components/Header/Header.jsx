import { useEffect, useState } from "react";
import { useRef } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
   const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
   const [isSticky, setIsSticky] = useState(false);
   const headerRef = useRef();

   const navLinks = [
      { id: 1, link: "home", path: "/" },
      { id: 2, link: "shop", path: "/shop" },
      { id: 3, link: "authors", path: "/authors" },
      { id: 4, link: "blog", path: "/blog" },
      { id: 5, link: "contact", path: "/contact" },
   ];

   useEffect(() => {
      const handleScroll = () => {
         window.scrollY > 50 ? setIsSticky(true) : setIsSticky(false);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   useEffect(() => {
      isMobMenuOpen
         ? (document.body.style.overflow = "hidden")
         : (document.body.style.overflow = "auto");
      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isMobMenuOpen]);

   return (
      <header>
         <TopBar />
         <div
            ref={headerRef}
            className={`fixed z-50 left-0 w-full h-[68px] shadow-lg bg-white duration-300 transition-all ${
               isSticky ? "top-0" : "top-[40px]"
            }`}
         >
            <div className="container mx-auto p-4 ">
               <div className="flex items-center justify-between max-md:hidden">
                  <Logo />
                  <Navbar navLinks={navLinks} />
                  <HeaderIcons />
               </div>
               {/* For Mobile */}
               <MobileMenu
                  isMobMenuOpen={isMobMenuOpen}
                  setIsMobMenuOpen={setIsMobMenuOpen}
                  navLinks={navLinks}
               />
            </div>
         </div>
      </header>
   );
};

export default Header;
