"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    password: "",
    username: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Sign Up
      <input
        className="p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
      />
      <input
        className="p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
      />
      <button
        className="p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
      >
        Register
      </button>
      <p>
        Already have an account?
        <Link
          className="p-2 border border-gray-600 rounded-lg mb-4 focus:border-gray-600"
          href={"/login"}
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
