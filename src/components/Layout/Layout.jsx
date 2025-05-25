import { lazy } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../common/ScrollToTop";

const ViewModal = lazy(() => import("../ViewModal/ViewModal"));
const ShoppingCartModal = lazy(() =>
   import("../ShoppingCart/ShoppingCartModal")
);
const WishlistModal = lazy(() => import("../Wishlist/WishlistModal"));

const Layout = () => {
   return (
      <div className="min-h-screen flex flex-col">
         <ScrollToTop />
         <Header />
         <main className="flex-grow">
            <Outlet />
         </main>
         <Footer />
         <ViewModal />
         <ShoppingCartModal />
         <WishlistModal />
      </div>
   );
};

export default Layout;
