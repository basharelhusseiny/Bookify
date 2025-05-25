import React from "react";

const RightSide = ({ explore, ourService, categories }) => {
   return (
      <div className="grid grid-cols-3 gap-5">
         <div>
            <h5 className="text-white font-medium capitalize mb-3">explore</h5>
            <div>
               {explore.map((link) => {
                  return (
                     <a
                        key={link.id}
                        href="#"
                        className="block text-zinc-400 text-sm py-1 hover:text-rose-500 hover:pl-2 duration-300"
                     >
                        {link.title}
                     </a>
                  );
               })}
            </div>
         </div>
         <div>
            <h5 className="text-white font-medium capitalize mb-3">
               our Service
            </h5>
            <div>
               {ourService.map((link) => {
                  return (
                     <a
                        key={link.id}
                        href="#"
                        className="block capitalize text-zinc-400 text-sm py-1 hover:text-rose-500 hover:pl-2 duration-300"
                     >
                        {link.title}
                     </a>
                  );
               })}
            </div>
         </div>
         <div>
            <h5 className="text-white font-medium capitalize mb-3">
               categories
            </h5>
            <div>
               {categories.map((link) => {
                  return (
                     <a
                        key={link.id}
                        href="#"
                        className="block capitalize text-zinc-400 text-sm py-1 hover:text-rose-500 hover:pl-2 duration-300"
                     >
                        {link.title}
                     </a>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default RightSide;
