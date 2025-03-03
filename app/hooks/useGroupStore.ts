import { create } from "zustand";
import {
  fetchGroupName,
  fetchUsers,
} from "@/app/hooks/fetchGroupInfo";

interface GroupState {
  users: string[];
  groupName: string | null;
  groupId: string | null;
  fetchGroupUsers: (groupId: string) => Promise<void>;
  fetchGroupName: (groupId: string) => Promise<void>;
}

export const useGroupStore = create<GroupState>((set) => ({
  users: [],
  groupName: null,
  groupId: null,
  fetchGroupUsers: async (groupId) => {
    const users: string[] = await fetchUsers(groupId);
    set({ users });
  },
  fetchGroupName: async (groupId) => {
    const groupName: any = await fetchGroupName(groupId);
    set({ groupName });
  },
}));
