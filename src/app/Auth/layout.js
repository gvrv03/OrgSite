"use client";
import ResponsiveAppBar from "@/Components/Home/Utility/ResponsiveAppBar";
import { useAppStore } from "@/Context/UseStoreContext";
import { useRouter } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }) => {
  const { userDetails } = useAppStore();
  const router = useRouter();

  if (userDetails?.isLogin) {
    setTimeout(() => {
      router.push("/");
    }, 100);
  }
  return (
    <div>
      <ResponsiveAppBar shadow="shadow-md " position="fixed" />
      {children}
    </div>
  );
};

export default AuthLayout;
