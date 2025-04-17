import React from "react";

const authors = () => {
   return (
      <div className="mt-50 container mx-auto flex ">
         {/* First div left */}
         <div className="left-side flex-1">
            <div className="bg-sky-200 h-[100px]">Welcome to our 30 learning portal</div>
            <div className="flex">
               <div className="bg-rose-200 flex-1 h-[100px]">something cool will be here soon</div>
               <div className="bg-purple-200 flex-1 h-[100px]">something cool will be here soon</div>
            </div>
         </div>
         {/* second div right */}
         <div className="right-side flex-1">
            <div className="top-divs flex">
               <div className="one flex-1 bg-red-200 h-[100px]">Div one</div>
               <div className="one flex-1 bg-purple-200 h-[100px]">Div Two</div>
            </div>
            <div className="bottom-divs flex">
               <div className="one flex-1 bg-gray-200 h-[100px]">Div three</div>
               <div className="one flex-1 bg-blue-200 h-[100px]">Div four</div>
            </div>
         </div>
      </div>
   );
};

export default authors;
