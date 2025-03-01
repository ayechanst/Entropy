"use client";
import { supabase } from "@/app/lib/supabaseClient";
import { fetchGroups } from "./fetchGroups";
import { useSession } from "next-auth/react";

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
};

export const fetchGroupName = async (groupId: string) => {
  const { data, error } = await supabase
    .from("groups")
    .select("name, id")
    .eq("id", groupId);

  if (error) {
    console.log("Error fetching groups:", error);
    return [];
  } else {
    console.log("data", data);
  }
  return data?.map((entry) => entry.name);
};
