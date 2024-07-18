import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { FaUser, FaShoppingCart, FaSearch, FaLessThanEqual } from "react-icons/fa";

const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false);
  const handleClick = () => {
    setIsSearchModal(true);
  };
  
  return (
      <div className="h-[5.5rem] bg-secondary ">
      <div className="container text-white mx-auto flex justify-between items-center h-full">
        <div><Logo/></div>
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Home</a></li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Menu</a></li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">About</a></li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Book Table</a></li>
          </ul>
        </nav>
        <div className="flex gap-x-3 items-center">
          <a href="#"><FaUser className="hover:text-primary transition-all"/></a>
          <a href="#"><FaShoppingCart className="hover:text-primary transition-all"/></a>
          <button onClick={handleClick}><FaSearch className="hover:text-primary transition-all"/></button>
          <a href="#"><button className="btn-primary">Order Online</button></a>
          
        </div>
        
      </div>
      {isSearchModal && (<Search setIsSearchModal={setIsSearchModal}/>)}
    </div>
    
  );
};

export default Header