"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import axios from "axios";


export const NavBar = () => {

  const router = useRouter();
  const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout")
      router.push("/login")
  } catch (error) {
      console.log("Logout failed", error.message);
    }
  }

  const deleteAccount = async () => {
    try {
      await axios.delete("/api/users/delete")
      router.push("/login")
    } catch (error) {
      return console.log("Delete account failed", error.message);
    }
  }

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
      </Link>
      <button onClick={logout} className="p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Sign Out</button>
      <button onClick={deleteAccount}>Delete Account</button>
    </nav>
  );
};
