import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <h1 className="h1-bold">Home</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Home;
