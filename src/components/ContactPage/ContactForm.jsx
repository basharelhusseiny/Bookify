import React from "react";

const ContactForm = () => {
   return (
      <div>
         <h4 className="capitalize font-semibold text-2xl mb-3">
            We would love to hear from you.
         </h4>
         <p className="text-[15px] text-gray-500 mb-8">
            Your email address will not be published. Required fields are marked
            *
         </p>
         <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
         >
            <input
               type="text"
               name="name"
               placeholder="Name*"
               className="required:text-red-500 border-2 placeholder:text-sm focus:placeholder:opacity-0 border-gray-300 outline-0 focus:border-black py-3 px-5 rounded-full duration-500"
            />
            <input
               type="email"
               name="email"
               placeholder="Email*"
               className="required:text-red-500 border-2 placeholder:text-sm focus:placeholder:opacity-0 border-gray-300 outline-0 focus:border-black py-3 px-5 rounded-full duration-500"
            />
            <textarea
               rows={4}
               name="message"
               placeholder="Message"
               className="required:text-red-500 border-2 placeholder:text-sm focus:placeholder:opacity-0 border-gray-300 outline-0 focus:border-black py-3 px-5 rounded-2xl resize-none duration-500"
            ></textarea>
            <div className="p-1 text-gray-500 flex items-center">
               <input
                  type="checkbox"
                  name="Save"
                  id="Save"
                  className="peer accent-black mb-[2px]"
               />
               <label
                  htmlFor="Save"
                  className="peer-checked:text-black text-sm pl-2 hover:text-black cursor-pointer duration-300"
               >
                  Save my name, email, and website in this browser for the next
                  time I comment.
               </label>
            </div>
            <button className="text-white bg-rose-500 cursor-pointer hover:bg-rose-700 w-fit mx-auto px-10 py-3 rounded-full capitalize font-semibold duration-300">
               submit
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
