import { DashNav } from "@/Sample Data/Nav";
import { Toolbar } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const SideDrawer = () => {
  const pathname = usePathname();
  return (
    <>
      <Toolbar sx={{ display: { xs: "none", sm: "block" } }} />
      <div className="px-3 relative h-full">
        <div className="justify-between flex-col flex gap-2   mt-2">
          <button className="py-2 flex mt-2  font-semibold  gap-2 items-center justify-center ont-semibold rounded-full  bg-white">
            <i className="uil uil-plus" />
            <p>Create</p>
          </button>
          {DashNav.map((item, index) => {
            return (
              <button
                key={index}
                className={` ${
                  pathname === item.location
                    ? "text-white bg-blue-950 rounded-sm"
                    : "text-gray-400"
                }  text-left   p-2  items-center flex gap-2  hover:bg-blue-950 hover:rounded-sm hover:text-white text-sm`}
              >
                <span
                  className={`${item.icon} text-white text-base font-bold `}
                />
                <span className="font-semibold   ">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
