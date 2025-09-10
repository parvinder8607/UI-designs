import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full p-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BlogVilla</div>
        <nav>
          <ul className="flex gap-4">
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
