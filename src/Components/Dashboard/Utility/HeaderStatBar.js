import React from "react";

const HeaderStatBar = () => {
  return (
    <div className="flex-col border-b pb-5 flex gap-5">
      <div className="flex gap-2">
        <input
          placeholder="Search"
          type="text"
          className=" w-full outline-none border p-2"
        />
        <div className="gap-2  flex">
          <button className="uil uil-sync bg-grayLight h-full px-3" />
          <button className="uil uil-search bg-grayLight h-full px-3" />
          <button className="bg-grayLight h-full px-3 flex gap-2 items-center font-medium ">
            {" "}
            <span className="uil uil-plus" />
            <span>Create</span>{" "}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="  text-sm    px-3  bg-grayLight h-full py-1  flex gap-2 items-center">
            {" "}
            <span className="uil uil-import" />
            <span  >Import</span>{" "}
          </button>
          <button className="  text-sm    px-3  bg-grayLight h-full py-1  flex gap-2 items-center">
            {" "}
            <span className="uil uil-export" />
            <span  >Export</span>{" "}
          </button>
        </div>
        <div className="flex gap-2 items-center" >
          <span className="text-sm text-gray-500 " >Row per Page</span>
          <select className="outline-none bg-grayLight px-3 py-1">
            <option value="">All</option>
            <option value="">5</option>
            <option value="">10</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderStatBar;
