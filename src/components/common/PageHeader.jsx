import React from "react";
import { Link } from "react-router";

const PageHeader = ({ title }) => {
   return (
      <div className="bg-rose-100 py-16 max-sm:py-12">
         <h1 className="text-center text-5xl max-sm:text-4xl uppercase font-extralight">
            {title}
         </h1>
         <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center mt-5 gap-1 text-sm text-gray-700">
               <li>
                  <Link
                     to="/"
                     className="block transition-colors hover:text-rose-500 uppercase"
                  >
                     Home
                  </Link>
               </li>
               <li className="rtl:rotate-180">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="size-4"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                     />
                  </svg>
               </li>
               <li>
                  <Link
                     to={`/${title.trim().toLowerCase().replace(/\s+/g, "")}`}
                     className="block transition-colors text-rose-500 uppercase"
                  >
                     {title}
                  </Link>
               </li>
            </ol>
         </nav>
      </div>
   );
};

export default React.memo(PageHeader);
