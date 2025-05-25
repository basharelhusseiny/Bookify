const SortBooks = ({ setSortItem, bookLength }) => {
   return (
      <div className="flex items-center">
         <div className="pr-2 border-r-2 border-gray-300 text-[13px] text-gray-500 max-sm:hidden">
            {bookLength} Books Found
         </div>
         <select
            onChange={(e) => setSortItem(e.target.value)}
            className="outline-none ml-2 py-2 text-gray-800 text-[15px]"
         >
            <option value="recommended" className="bg-white">
               Recommended
            </option>
            <option value="low" className="bg-white">
               Price - Low to High
            </option>
            <option value="high" className="bg-white">
               Price - High to Low
            </option>
         </select>
      </div>
   );
};

export default SortBooks;
