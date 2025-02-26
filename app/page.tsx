import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Entropy</h1>
          <p className="py-6">Create or join a group</p>
          <div className="flex flex-col">
            <button className="btn btn-primary m-2">
              Login
            </button>
            <button className="btn btn-primary m-2 ">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
