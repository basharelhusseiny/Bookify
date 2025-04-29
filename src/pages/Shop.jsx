import PageHeader from "../components/common/PageHeader";
import BooksSide from "../components/ShopPageSections/BooksSide";
import FilterBar from "../components/ShopPageSections/FilterBar";
import RecommendedBook from "../components/ShopPageSections/RecommendedBook";

const Shop = () => {
   const categories = [
      { id: 1, name: "Action & Adventure" },
      { id: 2, name: "Activity Books" },
      { id: 3, name: "Animals" },
      { id: 4, name: "Anthologies" },
      { id: 5, name: "Arts & Literature" },
      { id: 6, name: "Cars & Trucks" },
      { id: 7, name: "Classics" },
      { id: 8, name: "Contemporary" },
      { id: 9, name: "Cultural" },
      { id: 10, name: "European" },
      { id: 11, name: "Foreign Language" },
      { id: 12, name: "Genre Fiction" },
      { id: 13, name: "Historical" },
   ];
   return (
      <div className="mt-[68px] mb-20">
         <PageHeader title={"Shop"} />
         <div className="container mx-auto px-5">
            <RecommendedBook />
            <div className="flex lg:gap-10 mt-20">
               <div className="lg:flex-[25%]">
                  <FilterBar categories={categories} />
               </div>
               <div className="lg:flex-[75%]">
                  <BooksSide />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Shop;
