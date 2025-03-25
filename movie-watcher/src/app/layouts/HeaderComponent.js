
import React from "react";
import SearchBar from "../components/SearchBar";
import BurgerMenu from "../components/BurgerMenu";
import "./headerBackground.scss"

const HeaderComponent = () => {
  return (
    <div id="header" className="bg-black flex justify-between items-center p-2 mt-5 pl-3">
      
      
      {/* Background Stars */}
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>


      <div className="flex md:justify-between w-full flex-col md:flex-row justify-center">
        <h1 className="font-extrabold text-white text-2xl md:text-3xl lg:text-4xl xlg:text-6xl pt-2 pb-2 text-center md:text-left ml-3 italic">
          Choosie
        </h1>

        <div className="md:ml-auto w-full md:w-auto flex justify-center z-50">
         <SearchBar />
        </div>
      </div>
      <div className="md:hidden">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default HeaderComponent;
