'use client'

import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col sm:block md:hidden items-center space-y-1 pt-4 cursor-pointer"
      onClick={toggleMenu}
    >
      {/* Bar 1 */}
      <div
        className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
          isOpen ? "transform rotate-45 translate-y-2" : ""
        }`}
      ></div>
      {/* Bar 2 */}
      <div
        className={`h-1 w-8 bg-white rounded transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      {/* Bar 3 */}
      <div
        className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
          isOpen ? "transform -rotate-45 -translate-y-2" : ""
        }`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
