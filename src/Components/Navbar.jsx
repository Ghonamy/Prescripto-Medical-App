import { useState } from "react";
import Logo from "../Assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu_Icon from "../Assets/menu_icon.svg";
import User_Image from "../Assets/upload_area.png";
import Dropdown_Icon from "../Assets/dropdown_icon.svg";
import Cross_Icon from "../Assets/cross_icon.png";
const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  return (
    <nav>
      <div className="container mx-auto py-3 px-5 md:px-10 lg:px-20">
        <div className="flex justify-between items-center mb-4">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Prescripto Logo"
              className="w-[170px] md:w-[200px] h-[40px]"
            />
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 cursor-pointer uppercase text-[16px] font-medium">
            <Link
              to={"/"}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname === "/" ? "text-[var(--primary-color)]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to={"/doctors"}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname.startsWith("/doctors")
                  ? "text-[var(--primary-color)]"
                  : ""
              }`}
            >
              All Doctors
            </Link>
            <Link
              to={"/about"}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname === "/about"
                  ? "text-[var(--primary-color)]"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname === "/contact"
                  ? "text-[var(--primary-color)]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center gap-4">
            {token ? (
              <div className="flex items-center gap-3 cursor-pointer group relative">
                <img
                  className="w-[35px] h-[35px] rounded-full"
                  src={User_Image}
                  alt="User_Image"
                />
                <img
                  className="w-[10px] h-[10px]"
                  src={Dropdown_Icon}
                  alt="Dropdown_Icon"
                />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="bg-stone-100 flex flex-col gap-4 rounded p-4 min-w-48">
                    <p
                      onClick={() => navigate("/my-profile")}
                      className="hover:text-[#000] duration-300"
                    >
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate("/my-appointments")}
                      className="hover:text-[#000] duration-300"
                    >
                      My Appointments
                    </p>
                    <p
                      onClick={() => setToken(false)}
                      className="hover:text-[#000] duration-300"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/SignUp")}
                className="hidden md:block bg-[var(--primary-color)] border-2 px-6 py-3 text-[#FFF] text-[15px] rounded-full duration-300 hover:bg-[#5f5fff]"
              >
                Create Account
              </button>
            )}
          </div>
          <img
            onClick={() => setShowMenu(true)}
            className="w-[30px] h-[30px] md:hidden"
            src={Menu_Icon}
            alt="Menu Icon"
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "w-0 h-0"
          } md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-between items-center px-5 py-5">
            <img
              src={Logo}
              alt="Prescripto Logo"
              className="w-[170px] md:w-[200px] h-[40px]"
            />
            <img
              onClick={() => setShowMenu(false)}
              className="w-[30px] h-[30px]"
              src={Cross_Icon}
              alt="Cross Icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-8 cursor-pointer uppercase text-[22px] font-medium md:hidden mt-20">
            <Link
              to={"/"}
              onClick={() => setShowMenu(false)}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname === "/" ? "text-[var(--primary-color)]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to={"/doctors"}
              onClick={() => setShowMenu(false)}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname.startsWith("/doctors")
                  ? "text-[var(--primary-color)]"
                  : ""
              }`}
            >
              All Doctors
            </Link>
            <Link
              to={"/about"}
              onClick={() => setShowMenu(false)}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname === "/about"
                  ? "text-[var(--primary-color)]"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setShowMenu(false)}
              className={`hover:text-[var(--primary-color)] duration-300 ${
                location.pathname === "/contact"
                  ? "text-[var(--primary-color)]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </ul>
        </div>
        <hr className="border-0 bg-[#b8b8b8] h-[1px]" />
      </div>
    </nav>
  );
};

export default Navbar;
