"use client";
import { useSession } from "next-auth/react";
import { AuthButton } from "./AuthButton";
import Link from "next/link";

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
              <Link
                href="/newGroup"
                className="btn btn-primary"
              >
                Create New Group
              </Link>
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
