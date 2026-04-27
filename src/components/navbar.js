import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-20 bg-base-100/80 backdrop-blur">
      <div className="max-w-5xl mx-auto w-full h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold font-Poppins text-lg lg:text-xl">
          Dimas Yoga
        </h1>

        <div className="flex gap-3 items-center">
          <div className="hidden lg:flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </div>

          <div className="lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            {isOpen && (
              <ul className="absolute right-0 mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-50">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
