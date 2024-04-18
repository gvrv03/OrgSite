import { useAppStore } from "@/Context/UseStoreContext";
import { DashNav } from "@/Sample Data/Nav";
import { Toolbar } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const SideDrawer = () => {
  const { userDetails } = useAppStore();
  const pathname = usePathname();
  return (
    <>
      <Toolbar sx={{ display: { xs: "none", sm: "block" } }} />
      <div className="px-3 flex flex-col justify-between  py-2 relative h-full bg-secondary md:-mt-1">
        <div className="justify-between flex-col flex gap-2   mt-2">
          {/* <button className="py-2 flex mt-2  font-semibold  gap-2 items-center justify-center ont-semibold rounded-full  bg-white">
            <i className="uil uil-plus" />
            <p>Create</p>
          </button> */}
          {DashNav.map((item, index) => {
            return (
              <button
                key={index}
                className={` ${
                  pathname === item.location
                    ? "text-white rounded-md bg-secondarylight "
                    : "text-gray-400"
                }  text-left   p-2  items-center flex gap-2 hover:rounded-md hover:bg-secondarylight  hover:text-white text-sm`}
              >
                <span
                  className={`${item.icon} text-white text-base font-bold `}
                />
                <span className="font-semibold   ">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="text-white items-center gap-2  justify-between only: bg-secondarylight p-2 rounded-md  flex ">
          {/* <Image src=""  /> */}
          <div className="border p-2 w-10 h-10  rounded-md border-blue-900 grid place-items-center">
            M
          </div>
          <p className="text-white font-semibold text-sm  uppercase">
            {" "}
            {userDetails?.User?.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
