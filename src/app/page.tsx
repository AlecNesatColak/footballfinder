import { NavBar } from "../components/NavBar";
import Link from "next/link";

export default function home() {
  return (
    <section className="">
      <div className="">
        <NavBar />
        <h1 className="head_text text-center gap-5 p-10">
          Football Finder
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center flex">
            Find your favorite football players and statistics
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 border-orange-500">
          <div className="p-2 border border-orange-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black outline_btn">
            <Link href={"/login"}>
              Sign In
            </Link>
          </div>
          <div className="p-2 border border-orange-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 black_btn">
            <Link
              className=""
              href={"/signup"}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
