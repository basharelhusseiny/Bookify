import { NavLink } from "react-router";

const Navbar = ({ navLinks }) => {
   return (
      <nav>
         <div className="flex items-center gap-4 lg:gap-10">
            {navLinks.map((link) => {
               return (
                  <NavLink
                     key={link.id}
                     to={link.path}
                     className="block text-[18px] capitalize font-semibold hover:text-rose-500 duration-200">
                     {link.link}
                  </NavLink>
               );
            })}
         </div>
      </nav>
   );
};

export default Navbar;
