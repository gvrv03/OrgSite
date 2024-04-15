"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  return (
    <useStoreContext.Provider value={{}}>{children}</useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
