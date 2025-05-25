import React from "react";

const LabelForInput = ({ id, name, required }) => {
   return (
      <label htmlFor={id} className="text-[15px] font-medium">
         <span className="capitalize">{name}</span>
         <span className={`${!required && "text-[12px]"} text-rose-500`}>
            {required ? "*" : "(optional)"}
         </span>
      </label>
   );
};

export default LabelForInput;
