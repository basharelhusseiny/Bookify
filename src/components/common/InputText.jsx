import React from "react";

const InputText = ({ id }) => {
   return (
      <input
         type="text"
         name={id}
         id={id}
         className="block w-full border-2 border-gray-300 rounded-full py-[9px] px-4 mt-2  mb-5 outline-0 focus:border-black duration-500"
      />
   );
};

export default InputText;
