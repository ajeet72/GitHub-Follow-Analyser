import React from "react";

export default function Mainbody() {
  return (
    <div className="flex flex-col items-center h-screen p-4 lg:mt-10">
      <div className="w-full lg:w-2/3 ">
        <div className="text-center font-bold text-2xl pb-6 lg:text-6xl">
          <h1>GitHub Tracker</h1>
        </div>
        <div className="flex flex-col items-center border-2 border-green-500 rounded-md p-2 lg:flex-row">
          <input
            className="w-full text-base px-3 py-2 mb-2 lg:mb-0 lg:mr-2 lg:flex-grow focus:outline-none rounded-md"
            id="username"
            type="text"
            placeholder="Enter username"
          />
          <button className="w-full bg-green-200 hover:bg-green-400 text-lg px-4 py-2 rounded-md lg:w-auto">
            Search
          </button>
        </div>
        <div className="flex flex-col items-center mt-4 space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
          <button className="w-full border-2 border-green-500 rounded-md px-5 py-2 hover:bg-green-300 lg:w-auto lg:justify-between">
            Following
          </button>
          <button className="w-full border-2 border-green-500 rounded-md px-5 py-2 hover:bg-green-300 lg:w-auto lg:justify-between">
            Not Following
          </button>
        </div>
      </div>
    </div>
  );
}
