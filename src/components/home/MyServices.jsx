import React from "react";

function MyServices() {
  return (
    <div className="px-72 py-28">
      <div className="flex flex-col w-full h-screen gap-3">
        {/* First Section */}
        <div className="w-full h-2/3 flex gap-3">
          <div className="w-1/4 bg-black">ds</div>
          <div className="w-3/4  flex flex-col gap-3">
            <div className="h-1/2 flex gap-3">
              <div className="w-2/3 bg-blue-gray-400">reA</div>
              <div className="w-1/3 bg-brown-700">B</div>
            </div>
            <div className="h-1/2 flex gap-3">
              <div className="w-1/3 bg-deep-orange-900"></div>
              <div className="w-2/3 bg-blue-900"></div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="h-1/3 w-full flex gap-3">
          <div className="w-3/4 bg-amber-200 h-full">dede</div>
          <div className="w-1/4 bg-black h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
