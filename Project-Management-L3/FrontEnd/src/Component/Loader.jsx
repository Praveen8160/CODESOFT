import React from "react";

function Loader() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dotted rounded-full animate-spin border-blue-500"></div>
      </div>
    </div>
  );
}

export default Loader;
