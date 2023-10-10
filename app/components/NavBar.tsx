"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  //  console.log(session?.user);
  
  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <span className="loading loading-ring loading-xs"></span>}
      {status === "authenticated" && 
        <div>{session.user!.name}
        <Link href="/api/auth/signout" className="ml-3 bg-red-500 p-5 rounded-md text-white">Sign out</Link>
        </div>
      }
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
