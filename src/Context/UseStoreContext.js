"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  const [userDetails, setuserDetails] = useState({});


  // Modal States
  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  return (
    <useStoreContext.Provider
      value={{
        LoginIsOpen,
        setLoginIsOpen,
        userDetails,
        setuserDetails,
      }}
    >
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
