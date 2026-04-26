import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 flex justify-between items-center relative">
      <div className="ml-2">
        <h1 className="font-extrabold font-Poppins lg:text-xl">Dimas Yoga</h1>
      </div>

      <div className="mr-2 flex gap-3 items-center">
        <div className="hidden lg:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {isOpen && (
            <ul className="absolute right-2 mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-1">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
