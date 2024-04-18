"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";
import SignOutModal from "./SignOutModal";

const RenderAllModal = () => {
  const { signOutIsOpen, setsignOutIsOpen } = useAppStore();
  return (
    <>
      <SignOutModal state={signOutIsOpen} setState={setsignOutIsOpen} />
    </>
  );
};

export default RenderAllModal;
