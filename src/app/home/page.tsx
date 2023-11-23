"use client"
import { NavBar } from "@/components/NavBar";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import axios from "axios";



export default function home() {

  return (
    <section className="w-full flex-center flex-col">
      <div>
        <NavBar />
        <h1 className="head_text text-center">
          Football Finder
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center flex">
            Find your favorite football players and statistics
          </span>
        </h1>
        <div className="relative">
          <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
          <input
            type="text"
            className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none"
            placeholder="Search..."
          ></input>
          <span className="absolute top-4 right-5 border-l pl-4">
            <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
          </span>
        </div>
      </div>
    </section>
  );
};
