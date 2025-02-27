"use client";
import {
  signIn,
  signOut,
  useSession,
} from "next-auth/react";

export const AuthButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          className="btn btn-primary m-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="btn btn-primary m-2"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
};
