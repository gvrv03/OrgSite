"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  const [userDetails, setuserDetails] = useState({});
  // Modal States
  const [signOutIsOpen, setsignOutIsOpen] = useState(false);
  return (
    <useStoreContext.Provider
      value={{
        userDetails,
        setuserDetails,
        signOutIsOpen,
        setsignOutIsOpen,
      }}
    >
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
