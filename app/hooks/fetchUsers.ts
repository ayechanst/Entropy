"use client";
import { supabase } from "@/app/lib/supabaseClient";
import { fetchGroups } from "./fetchGroups";
import { useSession } from "next-auth/react";

// needs groupId
// no work
export const fetchUsers = async (groupId: string) => {
  const { data, error } = await supabase
    .from("group_members")
    .select("email, group_id")
    .eq("group_id", groupId);

  if (error) {
    console.log("Error fetching groups:", error);
    return [];
  }

  return data?.map((entry) => entry.email) ?? [];

  // return (
  //   data?.map((entry) => ({
  //     email: entry.email,
  //   })) ?? []
  // );

  // const { data: session } = useSession();
  // const groups = await fetchGroups(
  //   session?.user?.email ?? ""
  // );
  // console.log("groups: ", groups);
  // const group = groups.find((g) => g.id === groupId);

  // if (group) {
  //   return group.users;
  // } else {
  //   console.log("group not found");
  //   return [];
  // }
};
