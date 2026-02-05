"use client";

import { SUPER_DATA } from "@/data/superData";
import { SuperSectionKey, SuperUserData } from "@/data/types";
import { createContext, useContext } from "react";

export type SuperDataByUser = Record<string, SuperUserData>;

const SuperDataContext = createContext<SuperDataByUser | null>(null);

type SuperDataProviderProps = {
  children: React.ReactNode;
  data?: SuperDataByUser;
};

export function SuperDataProvider({
  children,
  data = SUPER_DATA,
}: SuperDataProviderProps) {
  return (
    <SuperDataContext.Provider value={data}>
      {children}
    </SuperDataContext.Provider>
  );
}

export function useSuperData<T extends SuperSectionKey>(
  username: string,
  usage: T,
) {
  const data = useContext(SuperDataContext);

  if (!data) {
    throw new Error("useSuperData must be used within SuperDataProvider");
  }

  return data[username]?.[usage] ?? null;
}
