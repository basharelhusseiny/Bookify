import React from "react";

const CloseButton = ({ onClick, backgroundColor }) => {
   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: backgroundColor }}
         className="group flex items-center justify-center relative cursor-pointer w-[33px] h-[33px] rounded-full"
      >
         <span className="absolute block h-[2px] w-[18px] bg-black rounded-sm rotate-45 group-hover:rotate-0 duration-300"></span>
         <span className="absolute block h-[2px] w-[18px] bg-black rounded-sm -rotate-45 group-hover:rotate-0 duration-300"></span>
      </button>
   );
};

export default React.memo(CloseButton);
