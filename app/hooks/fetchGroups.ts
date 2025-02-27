"use client";
import { supabase } from "@/app/lib/supabaseClient";

export const fetchGroups = async (userEmail: string) => {
  const { data, error } = await supabase
    .from("group_members")
    .select("group_id, groups(name)")
    .eq("email", userEmail);

  if (error) {
    console.log("Error fetching groups:", error);
    return [];
  }

  return (
    data?.map((entry: any) => ({
      id: entry.group_id,
      name: entry.groups.name,
    })) ?? []
  );
};
