import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Authors from "./pages/Authors";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BottomNav from "./components/BottomNav";
import ModalProvider from "./Context/ModalContext";
import BookPage from "./pages/SingleBookPage";
import ViewModal from "./components/ViewModal/ViewModal";
import ShoppingCartModal from "./components/ShoppingCart/ShoppingCartModal";
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <BrowserRouter>
         <ModalProvider>
            <ShoppingCartProvider>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/authors" element={<Authors />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/bookpage/:id" element={<BookPage />} />
                  <Route path="/shop/bookpage/:id" element={<BookPage />} />
                  <Route path="/shoppingcart" element={<ShoppingCartPage />} />
                  <Route path="/checkout" element={<Checkout />} />
               </Routes>
               <ViewModal />
               <ShoppingCartModal />
               {/* <Footer /> */}
               <BottomNav />
            </ShoppingCartProvider>
         </ModalProvider>
      </BrowserRouter>
   );
}

export default App;
