const Pageination = ({ pages, currentPage, setCurrentPage }) => {
   return (
      <div className="text-center my-7">
         <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="disabled:cursor-not-allowed bg-gray-200 px-4 py-1 rounded-full mx-2 hover:text-white hover:bg-rose-500 cursor-pointer duration-300"
         >
            <p className="flex items-center ">
               <span>Previous</span>
            </p>
         </button>
         {Array(pages)
            .fill()
            .map((_, index) => {
               return (
                  <button
                     onClick={() => setCurrentPage(index + 1)}
                     key={index}
                     className={`${
                        currentPage === index + 1 && "bg-rose-500 text-white"
                     } w-[35px] h-[35px] text-lg rounded-full m-1 cursor-pointer hover:bg-rose-500 hover:text-white duration-300`}
                  >
                     {index + 1}
                  </button>
               );
            })}
         <button
            disabled={currentPage === pages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="disabled:cursor-not-allowed bg-gray-200 px-4 py-1 rounded-full mx-2 hover:text-white hover:bg-rose-500 cursor-pointer duration-300"
         >
            <p className="flex items-center">
               <span>Next</span>
            </p>
         </button>
      </div>
   );
};

export default Pageination;
