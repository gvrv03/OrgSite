"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";
import LoginModal from "./LoginModal";

const RenderAllModal = () => {
  const { LoginIsOpen, setLoginIsOpen } = useAppStore();
  return (
    <>
      <LoginModal state={LoginIsOpen} setState={setLoginIsOpen} />
    </>
  );
};

export default RenderAllModal;
