import React from "react";
import { books } from "../../data/books";

const FilterBar = ({ categories }) => {
   const uniqueAuthors = [...new Set(books.map((book) => book.author))];

   return (
      <div className="hidden lg:block">
         {/* Categories */}
         <div className="border-2 border-gray-300 rounded-2xl mb-8 ">
            <h6 className="border-b-2 border-gray-300 py-5 px-7 capitalize font-semibold text-lg">
               genre
            </h6>
            <div className="p-7">
               {categories.map((catName) => {
                  return (
                     <div
                        key={catName.id}
                        className="p-1 text-gray-500 text-[15px]"
                     >
                        <input
                           type="checkbox"
                           name={catName.name}
                           id={catName.name}
                           className="peer accent-black"
                        />
                        <label
                           htmlFor={catName.name}
                           className="peer-checked:text-black pl-2 hover:text-black cursor-pointer duration-200"
                        >
                           {catName.name}
                        </label>
                     </div>
                  );
               })}
            </div>
         </div>
         {/* Authors */}
         <div className="border-2 border-gray-300 rounded-2xl">
            <h6 className="border-b-2 border-gray-300 py-5 px-7 capitalize font-semibold text-lg">
               author
            </h6>
            <div className="p-7">
               {uniqueAuthors.map((author) => {
                  return (
                     <div
                        key={author}
                        className="p-1 text-gray-700 text-[15px]"
                     >
                        <input
                           type="checkbox"
                           name={author}
                           id={author}
                           className="peer accent-black"
                        />
                        <label
                           htmlFor={author}
                           className="peer-checked:text-black pl-2 hover:text-black cursor-pointer duration-200"
                        >
                           {author}
                        </label>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default React.memo(FilterBar);
