import React from "react";

function Navbar() {
  return (
    <div
      className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex 
    justify-between items-center"
    >
      <div className="logo">Ochi.Design</div>
      <div className="links flex gap-10">
        {["Service", "About Us", "Insight", "Our Work", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg cursor-pointer font-normal 
            ${index === 4 && "ml-48"}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
