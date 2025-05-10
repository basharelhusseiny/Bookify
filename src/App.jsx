import { createBrowserRouter, RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ModalProvider from "./Context/ModalContext";
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import WishlistProvider from "./Context/WishlistModalContext";
import MainLoader from "./components/common/MainLoader";

const Shop = lazy(() => import("./pages/Shop"));
const Authors = lazy(() => import("./pages/Authors"));
const AuthorDetails = lazy(() => import("./pages/AuthorDetails"));
const Blog = lazy(() => import("./pages/Blog"));
const SingleBlogPage = lazy(() => import("./pages/SingleBlogPage"));
const Contact = lazy(() => import("./pages/Contact"));
const BookPage = lazy(() => import("./pages/SingleBookPage"));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/authors", element: <Authors /> },
            { path: "/authordetails/:name", element: <AuthorDetails /> },
            { path: "/blog", element: <Blog /> },
            { path: "/singleblogpage/:id", element: <SingleBlogPage /> },
            { path: "/contact", element: <Contact /> },
            { path: "/bookpage/:id", element: <BookPage /> },
            { path: "/shop/bookpage/:id", element: <BookPage /> },
            {
               path: "/authordetails/:name/bookpage/:id",
               element: <BookPage />,
            },
            { path: "/shoppingcart", element: <ShoppingCartPage /> },
            { path: "/checkout", element: <Checkout /> },
         ],
      },
   ]);
   return (
      <ModalProvider>
         <ShoppingCartProvider>
            <WishlistProvider>
               <Suspense fallback={<MainLoader />}>
                  <RouterProvider router={router} />
               </Suspense>
               <Toaster position="top-center" reverseOrder={false} />
            </WishlistProvider>
         </ShoppingCartProvider>
      </ModalProvider>
   );
}

export default App;
