import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import Search from "./components/Search";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <main className="flex flex-col items-center min-h-screen p-20">
          <Image src={"/LEETGPT.png"} alt="logo" width={200} height={200} />
          <h1 className="text-4xl font-semibold">
            {" "}
            <span className="font-mono ">Leet</span> GPT
          </h1>
          <Search />
        </main>
      ) : (
        <div className=" flex flex-col justify-center items-center h-screen">
          <h1 className=" text-5xl">Sign In To Continue</h1>
          <Image
            src={"/LEETGPT.png"}
            alt="logo"
            width={200}
            height={200}
            className=" py-6"
          />
          <h1 className="text-4xl font-semibold">
            <span className="font-mono ">Leet</span>
            GPT
          </h1>
          <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
          >
            <button className="max-w-sm px-4 py-2 mt-4 font-bold text-white bg-green-500 border-b-4 border-green-700 rounded w hover:bg-green-400 hover:border-green-500">
              Sign In
            </button>
          </Link>
          {/* Button to sigin */}
        </div>
      )}
    </>
  );
}
