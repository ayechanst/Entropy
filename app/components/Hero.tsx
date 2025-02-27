"use client";
import { useSession } from "next-auth/react";
import { AuthButton } from "./AuthButton";
import UserGroups from "./UserGroups";

export const Hero = () => {
  const { data: session } = useSession();
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold m-5">
            Entropy
          </h1>
          {session ? (
            <div className="flex flex-col">
              <UserGroups />
              <AuthButton />
            </div>
          ) : (
            <>
              <AuthButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
