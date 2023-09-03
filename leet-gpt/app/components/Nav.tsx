import Link from "next/link";
import SignOut from "./sign-out";

export default function Nav() {
  return (
    <>
      <nav className=" w-full  bg-green-600">
        <div className="container px-4 py-2 w-full">
          <div className="flex items-center justify-between text-white/90">
            <h3 className="flex-col text-xl ">
              <Link href="/">LeetGPT</Link>
            </h3>
            <ul className="flex space-x-4">
              <li>
                <Link href="/pages/about" className="hover:text-white/40">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pages/resources" className="hover:text-white/40">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/pages/study-plan" className="hover:text-white/40">
                  Study Plan
                </Link>{" "}
              </li>
              <SignOut />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
