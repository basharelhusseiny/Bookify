import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useModal } from "../../Context/ModalContext";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import BookRating from "../common/BookRating";
import { useWishlist } from "../../Context/WishlistModalContext";
import toast from "react-hot-toast";

const BookCards = ({ books }) => {
   const { handleOpenModal } = useModal();
   const { handleOpenShoppingCart, addToCart } = useShoppingCart();
   const { handleOpenWishlist, addToWishList, isInWishlist } = useWishlist();
   return (
      <div className="flex gap-5">
         {books.map((book) => (
            <div key={book.id}>
               <div className="w-[200px] border-r border-gray-300 pr-5">
                  <Link
                     to={`bookpage/${book.id}`}
                     className="block img w-full h-[250px] rounded-2xl overflow-hidden"
                  >
                     <img
                        src={`/images/books/${book.image}`}
                        alt="book"
                        className="w-full h-full"
                     />
                  </Link>
                  <Link
                     to={`bookpage/${book.id}`}
                     className="text-ellipsis line-clamp-1 font-semibold my-2 hover:text-rose-500 cursor-pointer duration-200"
                     title={book.title}
                  >
                     {book.title}
                  </Link>
                  <BookRating rate={book.rating} reviews={book.reviews} />
                  <p className="text-sm my-2 text-gray-700">{book.author}</p>
                  <p className="text-rose-500 text-xl font-semibold">
                     ${book.price}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                     <div className="cart">
                        <button
                           onClick={() => {
                              addToCart(book);
                              handleOpenShoppingCart();
                           }}
                           className="capitalize text-sm p-2 bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white cursor-pointer font-semibold rounded-full duration-200"
                        >
                           add to cart
                        </button>
                     </div>
                     <div className="flex items-center">
                        <IoEyeOutline
                           onClick={() => handleOpenModal(book)}
                           className="bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white cursor-pointer ml-1 w-[35px] h-[35px] rounded-full p-2  duration-200"
                        />
                        <IoHeartOutline
                           onClick={() => {
                              isInWishlist(book)
                                 ? toast.error(
                                      `You already love ${book.title}! 📚`
                                   )
                                 : (addToWishList(book), handleOpenWishlist());
                           }}
                           className="bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white cursor-pointer ml-1 w-[35px] h-[35px] rounded-full p-2  duration-200"
                        />
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default BookCards;
