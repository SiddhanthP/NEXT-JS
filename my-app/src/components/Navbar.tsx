"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <div className="bg-gray-800 shadow-md w-full fixed top-0 left-0 z-50">
      <ul className="flex justify-between items-center p-5 text-white container mx-auto">
        <div>
          <Link href="/">
            <li className="text-2xl font-bold hover:text-blue-400 transition duration-300 list-none cursor-pointer">Home</li>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/dashboard">
            <li className="text-xl hover:text-blue-400 transition duration-300 list-none cursor-pointer">Dashboard</li>
          </Link>
          {!session ? (
            <>
              <Link href="/login">
                <li className="text-xl hover:text-blue-400 transition duration-300 list-none cursor-pointer">Login</li>
              </Link>
              <Link href="/signup">
                <li className="text-xl hover:text-blue-400 transition duration-300 list-none cursor-pointer">Register</li>
              </Link>
            </>
          ) : (
            <>
              <span className="text-xl">{session.user?.email}</span>
              <li className="list-none cursor-pointer">
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-full text-white font-semibold"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
