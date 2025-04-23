import { Link } from "react-router";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import CartTable from "../components/ShoppingCart/CartTable";
import MobileCartTable from "../components/ShoppingCart/MobileCartTable";
import OrderSummary from "../components/ShoppingCart/CartSummary";
import EmptyCart from "../components/ShoppingCart/EmptyCart";

const ShoppingCartPage = () => {
   const { cartItems, removeItem, totalPrice } = useShoppingCart();
   return (
      <div className="mt-[68px]">
         <div className="bg-rose-100 py-16">
            <h1 className="text-center text-5xl max-sm:text-3xl uppercase font-extralight">
               Shopping cart
            </h1>
         </div>
         <div className="container mx-auto px-5">
            {cartItems.length === 0 ? (
               <EmptyCart
                  styleH={"text-3xl"}
                  StyleP={"text-lg"}
                  StyleL={"px-7 py-3 text-lg"}
               />
            ) : (
               <div className="flex max-lg:flex-col mt-16 gap-16">
                  <CartTable cartItems={cartItems} removeItem={removeItem} />
                  <MobileCartTable
                     cartItems={cartItems}
                     removeItem={removeItem}
                  />
                  <OrderSummary totalPrice={totalPrice} />
               </div>
            )}
         </div>
      </div>
   );
};

export default ShoppingCartPage;
