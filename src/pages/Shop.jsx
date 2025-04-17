import React from "react";
import BookCards from "../components/Sliders/BookCards";
import { books } from "../data/books";

const Shop = () => {
   return (
      <div className="mt-50">
         <div className="flex flex-wrap gap-5">
            {books.map((book) => (
               <div key={book.id}>
                  <BookCards book={book} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Shop;
