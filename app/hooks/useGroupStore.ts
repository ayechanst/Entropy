import { create } from "zustand";
import { fetchUsers } from "@/app/hooks/fetchUsers";
import { fetchGroups } from "./fetchGroups";

interface GroupState {
  users: string[];
  groupName: string | null;
  groupId: string | null; // already have
  fetchGroupUsers: (groupId: string) => Promise<void>;
  // fetchGroupTasks
}

export const useGroupStore = create<GroupState>((set) => ({
  users: [],
  groupName: null,
  groupId: null,
  fetchGroupUsers: async (groupId) => {
    const users: string[] = await fetchUsers(groupId);
    set({ users });
  },
}));
