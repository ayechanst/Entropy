"use client";
import Link from "next/link";
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
        {/* {session?.user?.name} */}
        <br />
        <button
          className="btn btn-primary m-2"
          onClick={() => signOut()}
        >
          {" "}
          Sign out{" "}
        </button>
      </>
    );
  }
  return (
    <>
      Not Signed in <br />
      <button
        className="btn btn-primary m-2"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
};

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
