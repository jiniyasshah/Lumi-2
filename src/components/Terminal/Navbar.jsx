import React from "react";
import colorsData from "../../data/colors.json";
const Navbar = () => {
  return (
    <div className="flex justify-start h-[35px] w-full rounded-t-lg bg-[#38353f]">
      {colorsData.colors.map((color, index) => (
        <div
          key={index}
          className="mt-[9px] ml-[9px] h-[17px] w-[17px] rounded-full"
          style={{ backgroundColor: color.key }}
        ></div>
      ))}
    </div>
  );
};

export default Navbar;
