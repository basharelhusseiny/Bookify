import { books } from "../../data/books";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router";

const RecomendedBook = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-10">
         {books.slice(1, 7).map((product) => {
            return (
               <div key={product.id} className="flex">
                  <img
                     src={`/images/books/${product.image}`}
                     className="w-[150px] h-[200px] rounded-xl mr-5"
                     alt={product.title}
                     loading="lazy"
                  />
                  <div className="flex flex-col justify-between">
                     <div>
                        <h4
                           className="text-[17px] font-semibold mb-2 mt-1 text-ellipsis line-clamp-1"
                           title={product.title}
                        >
                           {product.title}
                        </h4>
                        <p className="text-[13px] text-gray-600 text-ellipsis line-clamp-5">
                           {product.summary}
                        </p>
                     </div>
                     <Link
                        to={`/shop/bookpage/${product.id}`}
                        className="flex items-center w-fit capitalize text-sm font-medium hover:text-rose-500 duration-300"
                     >
                        <p>view more</p>
                        <IoIosArrowForward className="w-[25px] text-rose-500 animate-pulse" />
                     </Link>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default RecomendedBook;
