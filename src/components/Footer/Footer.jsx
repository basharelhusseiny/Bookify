import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Footer = () => {
   const explore = [
      { id: 1, title: "About us" },
      { id: 2, title: "Sitemap" },
      { id: 3, title: "Bookmarks" },
      { id: 4, title: "Sign in/Join" },
   ];
   const ourService = [
      { id: 1, title: "help center" },
      { id: 2, title: "Returns" },
      { id: 3, title: "product recalls" },
      { id: 4, title: "accessibility" },
      { id: 5, title: "contact us" },
      { id: 6, title: "store pickup" },
   ];
   const categories = [
      { id: 1, title: "action" },
      { id: 2, title: "comedy" },
      { id: 3, title: "drama" },
      { id: 4, title: "horror" },
      { id: 5, title: "kids" },
   ];
   return (
      <footer className="bg-zinc-900 mt-12">
         <div className="py-16 border-b-2 border-zinc-700">
            <div className="container mx-auto px-5 ">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <LeftSide />
                  <RightSide
                     explore={explore}
                     ourService={ourService}
                     categories={categories}
                  />
               </div>
            </div>
         </div>
         <div>
            <div className="container mx-auto px-5 py-8 flex max-md:flex-col items-center justify-between">
               <p className="text-white max-sm:text-sm max-md:mb-4">
                  Copyright © 2025
                  <span className="text-rose-500"> Bookify</span>. All rights
                  reserved.
               </p>
               <img src="/images/footer_img.png" alt="footer image" />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
