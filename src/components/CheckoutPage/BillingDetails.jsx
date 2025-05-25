import React from "react";
import InputText from "../common/InputText";
import LabelForInput from "../common/LabelForInput";

const BillingDetails = () => {
   return (
      <div>
         <h3 className="capitalize text-3xl font-semibold">Billing Details</h3>
         <form onSubmit={(e) => e.preventDefault()} className="mt-7">
            <div className="flex items-center gap-7">
               <div className="flex flex-col flex-1">
                  <LabelForInput
                     id={"fname"}
                     name={"first name"}
                     required={true}
                  />
                  <InputText id={"fname"} />
               </div>
               <div className="flex flex-col flex-1">
                  <LabelForInput
                     id={"lname"}
                     name={"last name"}
                     required={true}
                  />
                  <InputText id={"lname"} />
               </div>
            </div>
            <div>
               <LabelForInput
                  id={"companyname"}
                  name={"company name"}
                  required={false}
               />
               <InputText id={"companyname"} />
               <LabelForInput
                  id={"country"}
                  name={"country / region"}
                  required={true}
               />
               <InputText id={"country"} />
               <LabelForInput id={"state"} name={"state"} required={true} />
               <InputText id={"state"} />
               <LabelForInput
                  id={"street"}
                  name={"street address"}
                  required={true}
               />
               <InputText id={"street"} />
               <LabelForInput
                  id={"zipcode"}
                  name={"ZIP code"}
                  required={true}
               />
               <InputText id={"zipcode"} />
               <LabelForInput id={"phone"} name={"phone"} required={true} />
               <InputText id={"phone"} />
               <LabelForInput
                  id={"email"}
                  name={"email address"}
                  required={true}
               />
               <InputText id={"email"} />
            </div>
            <div>
               <h5 className="text-3xl max-sm:text-2xl capitalize font-semibold mt-10">
                  Additional information
               </h5>
               <p className="mt-3 mb-2 text-[15px] text-gray-600">
                  Order notes
                  <span className="text-[13px] text-rose-500">(optional)</span>
               </p>
               <textarea
                  rows={4}
                  name="message"
                  placeholder="Note about your order, e.g.special notes for delivery."
                  className="w-full required:text-red-500 border-2 placeholder:text-sm focus:placeholder:opacity-0 border-gray-300 outline-0 focus:border-black py-3 px-5 rounded-2xl resize-none duration-500"
               ></textarea>
            </div>
         </form>
      </div>
   );
};

export default BillingDetails;
