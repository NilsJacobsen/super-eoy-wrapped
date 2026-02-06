"use client";

import { SUPER_DATA } from "@/data/superData";
import {
  SuperSectionKey,
  SuperUserData,
  SuperUserSelection,
} from "@/data/types";
import { createContext, useContext, useMemo, useState } from "react";

export type SuperDataByUser = Record<string, SuperUserData>;

type SuperDataContextValue = {
  data: SuperDataByUser;
  selectedUser: SuperUserSelection;
  setSelectedUser: (selection: SuperUserSelection) => void;
};

const SuperDataContext = createContext<SuperDataContextValue | null>(null);

type SuperDataProviderProps = {
  children: React.ReactNode;
  data?: SuperDataByUser;
  initialUser?: SuperUserSelection;
  userColors?: Record<string, string>;
};

export function SuperDataProvider({
  children,
  data = SUPER_DATA,
  initialUser,
  userColors = {},
}: SuperDataProviderProps) {
  const defaultUsername = useMemo(() => Object.keys(data)[0], [data]);
  const [selectedUser, setSelectedUser] = useState<SuperUserSelection>(() => ({
    username: initialUser?.username ?? defaultUsername ?? "anton",
    color:
      initialUser?.color ??
      userColors[defaultUsername ?? "anton"] ??
      "#CE6BD6",
  }));

  return (
    <SuperDataContext.Provider value={{ data, selectedUser, setSelectedUser }}>
      {children}
    </SuperDataContext.Provider>
  );
}

export function useSuperData<T extends SuperSectionKey>(
  username: string | undefined,
  usage: T,
) {
  const context = useContext(SuperDataContext);

  if (!context) {
    throw new Error("useSuperData must be used within SuperDataProvider");
  }

  const resolvedUsername = username ?? context.selectedUser.username;
  return context.data[resolvedUsername]?.[usage] ?? null;
}

export function useSelectedUser() {
  const context = useContext(SuperDataContext);

  if (!context) {
    throw new Error("useSelectedUser must be used within SuperDataProvider");
  }

  return {
    selectedUser: context.selectedUser,
    setSelectedUser: context.setSelectedUser,
  };
}
