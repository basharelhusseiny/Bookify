import OrderDetails from "../components/CheckoutPage/OrderDetails";
import BillingDetails from "../components/CheckoutPage/BillingDetails";
import PageHeader from "../components/common/PageHeader";

const Checkout = () => {
   return (
      <div className="mt-[68px] mb-12">
         <PageHeader title={"checkout"} />
         <div className="container mx-auto px-5">
            <div className="flex max-md:flex-col gap-10 mt-14 max-sm:mt-12">
               <div className="flex-[55%]">
                  <BillingDetails />
               </div>
               <div className="flex-[45%]">
                  <OrderDetails />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
