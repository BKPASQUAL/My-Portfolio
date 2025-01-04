import React from "react";

function MyServices() {
  return (
    <div className="px-72 py-28">
      <div className="flex flex-col w-full h-screen ">
        <div className="w-full h-2/3 flex ">
          <div className="w-1/4  bg-black gap-3">ds</div>
          <div className="w-3/4  bg-blue-gray-200 gap-3">
            <div className="h-1/2 flex">
              <div className="w-2/3 bg-blue-gray-400 "> A</div>
              <div className="w-1/3 bg-brown-700"> B</div>
            </div>
            <div className="h-1/2 flex ">
              <div className="w-1/3 bg-deep-orange-900"></div>
              <div className="w-2/3 bg-blue-900"></div>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-full flex ">
        <div className="w-3/4 bg-amber-200 h-full"> dede</div>
        <div className="w-1/4 bg-black h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
