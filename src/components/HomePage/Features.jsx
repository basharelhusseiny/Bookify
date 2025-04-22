import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiReturnArrow } from "react-icons/gi";

import React from "react";

const Features = () => {
   const featuresData = [
      {
         id: 1,
         title: "Best prices & offers",
         desc: "Orders $50 or more",
         icon: RiDiscountPercentLine,
      },
      {
         id: 2,
         title: "Free delivery",
         desc: "24/7 amazing services",
         icon: TbTruckDelivery,
      },
      {
         id: 3,
         title: "Great daily deal",
         desc: "When you sign up",
         icon: FaRegCalendarCheck,
      },
      {
         id: 4,
         title: "Wide assortment",
         desc: "Mega Discounts",
         icon: HiOutlineShoppingBag,
      },
      {
         id: 5,
         title: "Easy returns",
         desc: "Within 30 days",
         icon: GiReturnArrow,
      }
   ];
   return (
      <section className="features mt-10 pb-10 border-b border-gray-300">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 max-sm:mx-auto" >
               {featuresData.map((feature)=>{
                  return (
                     <div key={feature.id} className="flex items-center ">
                        <div className="bg-rose-500 text-white text-3xl p-4 rounded-full mr-3">
                           <feature.icon/>
                        </div>
                        <div>
                           <h3 className="capitalize font-semibold">{feature.title}</h3>
                           <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   );
};

export default Features;
