import { FaShoppingBasket } from "react-icons/fa";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { useModal } from "../../Context/ModalContext";

const ViewCartBtn = ({ selectedBook, bookData, localQty }) => {
   const { handleOpenShoppingCart, addToCart } = useShoppingCart();
   const { setIsModalOpen } = useModal();

   return (
      <button
         onClick={() => {
            setIsModalOpen(false);
            handleOpenShoppingCart();
            addToCart(selectedBook || bookData, localQty);
         }}
         className="flex items-center justify-center cursor-pointer max-sm:mx-0 max-sm:mr-3 mx-3 h-[40px] bg-rose-500 hover:bg-rose-700 rounded-xl text-white px-5 duration-200"
      >
         <FaShoppingBasket className="text-xl mr-[6px] animate-pulse" />
         <span className="text-[15px] font-semibold">Add to cart</span>
      </button>
   );
};

export default ViewCartBtn;
