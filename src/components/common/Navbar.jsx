import React from "react";
import logo from "../../assets/images/bk.jpg";

function Navbar() {
  return (
    <div className="h-20 bg-slate-200 fixed top-0 left-0 w-full shadow-md z-50 bg-bgcolour flex justify-between items-center px-8">
      <div className="w-1/3 flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 rounded-full object-cover p-1"
        />
        <h1 className="font-bold text-2xl ">Bawantha Pasqual</h1>
      </div>
      <div className="hidden lg:flex space-x-6 w-1/3 justify-center font-semibold text-lg">
        {[
          "About",
          "Skills",
          "Projects",
          "Work",
          "Education",
          "Certificates",
        ].map((link) => (
          <p
            key={link}
            className="relative group cursor-pointer hover:text-navy"
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-navy transition-all duration-300 group-hover:w-full"></span>
          </p>
        ))}
      </div>
      <div className="flex gap-x-4 w-1/3 justify-end font-semibold text-lg">
        {["Linkdin", "GitHub", "Resume"].map((link) => (
          <p key={link} className="cursor-pointer hover:text-navy"> {link}</p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
