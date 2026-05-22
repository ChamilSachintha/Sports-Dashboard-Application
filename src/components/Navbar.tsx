import { useState } from "react";
import Logo from "../assets/Logo.png";
import SearchIcon from "../assets/Search.svg";
import NotificationIcon from "../assets/Notification.svg";
import ProfileIcon from "../assets/Profile.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: string[] = [
    "Home",
    "Live Matches",
    "News",
    "Scores",
    "Profile",
  ];

  return (
    <nav className="bg-[#1d283b] border-b border-slate-800 text-slate-100 sticky top-0 z-50">
      <div className="w-full mx-32 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Nav Items */}
          <div className="flex items-center space-x-8">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="SportZone Logo"
                className="w-7 h-7 object-contain"
              />

              <span className="text-md font-medium tracking-wider text-white">
                SportZone
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Action Icons & Sign In */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 hover:bg-slate-800 rounded-lg transition">
              <img src={SearchIcon} alt="Search" className="w-5 h-5" />
            </button>

            {/* Notification */}
            <button className="p-2 hover:bg-slate-800 rounded-lg transition relative">
              <img
                src={NotificationIcon}
                alt="Notification"
                className="w-5 h-5"
              />

              {/* red dot */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <button className="p-2 hover:bg-slate-800 rounded-lg transition">
              <img src={ProfileIcon} alt="Profile" className="w-5 h-5" />
            </button>

            {/* Sign In */}
            <button className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer">
              Sign In
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3 px-3">
            <div className="flex space-x-6 text-slate-400">
              <button className="hover:text-emerald-400">Search</button>
              <button className="hover:text-emerald-400">Alerts</button>
              <button className="hover:text-emerald-400">Settings</button>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm text-center">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
