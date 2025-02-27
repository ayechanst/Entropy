"use client";
import { supabase } from "@/app/lib/supabaseClient";

// needs groupId
export const fetchUsers = async (groupId: string) => {
  const { data, error } = await supabase
    .from("group_members")
    .select("email")
    .eq("group_id", groupId);
  if (error) {
    console.log("Error fetching groups:", error);
    return [];
  }
  return data?.map((entry: any) => entry.email) ?? [];
};
