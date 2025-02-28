"use client";
import { supabase } from "@/app/lib/supabaseClient";

// only use for UserGroups.tsx
export const fetchGroups = async (userEmail: string) => {
  const { data, error } = await supabase
    .from("group_members") // from the group_members table
    .select("group_id, groups(name), email") // select these
    .eq("email", userEmail); // only if the email matches userEmail

  if (error) {
    console.log("Error fetching groups:", error);
    return [];
  }

  return (
    data?.map((entry: any) => ({
      id: entry.group_id,
      name: entry.groups.name,
      users: entry.email,
    })) ?? []
  );
};
