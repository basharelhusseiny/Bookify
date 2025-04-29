import { GiSpellBook } from "react-icons/gi";
import { Link } from "react-router";

const Logo = ({textColor}) => {
   return (
      <div className="logo">
         <Link to="/" className={`flex items-center ${textColor}`}>
            <GiSpellBook className="text-3xl mr-2 text-rose-500"/>
            <p className="text-3xl font-semibold">
               Book<span className="text-rose-500">ify</span>
            </p>
         </Link>
      </div>
   );
};

export default Logo;
