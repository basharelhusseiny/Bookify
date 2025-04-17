import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const BookRating = ({ rate, reviews }) => {
   return (
      <div className="flex text-yellow-500 gap-[1px]">
         {rate >=1 ? <FaStar /> :rate >=0.5 ? <FaStarHalfAlt /> :<FaRegStar className="text-gray-500"/>}
         {rate >=2 ? <FaStar /> :rate >=1.5 ? <FaStarHalfAlt /> :<FaRegStar className="text-gray-500"/>}
         {rate >=3 ? <FaStar /> :rate >=2.5 ? <FaStarHalfAlt /> :<FaRegStar className="text-gray-500"/>}
         {rate >=4 ? <FaStar /> :rate >=3.5 ? <FaStarHalfAlt /> :<FaRegStar className="text-gray-500"/>}
         {rate >=5 ? <FaStar /> :rate >=4.5 ? <FaStarHalfAlt /> :<FaRegStar className="text-gray-500"/>}
         <span className="text-gray-500 text-sm ml-2">({reviews})</span>
      </div>
   );
};

export default BookRating;
