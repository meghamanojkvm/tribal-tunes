import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useUser();
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 hover:text-gray-800 text-amber-900">
          <button
            className="font-bold text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Tribal Tunes
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-12">
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/instruments");
                }}
              >
                Instruments
              </button>
            </li>
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/aboutUs");
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-sm font-semibold text-gray-800 hover:text-amber-800"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Contact
              </button>
            </li>
            {user.current ?(<li>
            <button
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-amber-800"
              onClick={() => {
                navigate("/addinstrument");
                setMenuOpen(false);
              }}
            >
              Add Instrument
            </button>
          </li>): null }
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {user.current ? (
              <button
                type="button"
                onClick={() => {
                  console.log(user);
                  user.logout();
                }}
              >
                Logout
              </button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 px-4 pt-4 pb-2">
          <li>
            <button
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-amber-800"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-amber-800"
              onClick={() => {
                navigate("/instruments");
                setMenuOpen(false);
              }}
            >
              Instruments
            </button>
          </li>
          <li>
            <button
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-amber-800"
              onClick={() => {
                navigate("/aboutUs");
                setMenuOpen(false);
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-amber-800"
              onClick={() => {
                navigate("#");
                setMenuOpen(false);
              }}
            >
              Contact
            </button>
          </li>

          {user.current ?(<button
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-amber-800"
              onClick={() => {
                navigate("/addinstrument");
                setMenuOpen(false);
              }}
            >
              Add/Update Instrument
            </button>): null }
          <li>
            <div className="rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {user.current ? (
                <button
                  type="button"
                  onClick={() => {
                    console.log(user);
                    user.logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
