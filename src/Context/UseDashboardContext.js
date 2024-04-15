"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const useDashboardContext = createContext();
export function UseDashboardContextProvider({ children }) {
  return (
    <useDashboardContext.Provider value={{}}>
      {children}
    </useDashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(useDashboardContext);
}
