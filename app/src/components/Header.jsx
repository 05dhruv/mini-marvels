"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Parents",
      href: "/parents",
    },
    {
      name: "Patient Resources",
      href: "/resources",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-1"
            : "bg-white py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}

<div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg border-4 border-pink-100 overflow-hidden transition-all duration-300 hover:scale-105">

  <Image
    src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783057515/IMG-20260702-WA0015.jpg_nvarxn.jpg"
    alt="Mini Marvels"
    fill
    priority
    className="object-cover"
  />

</div>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-9">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-pink-500 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

                </Link>
              ))}

            </nav>

            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-4">

              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold px-7 py-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Appointment

                <ChevronRight size={18} />

              </Link>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-pink-50 text-pink-600"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Overlay */}

        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        {/* Menu Panel */}

        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top */}

          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

            <Image
              src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783057515/IMG-20260702-WA0015.jpg_nvarxn.jpg"
              alt="Mini Marvels"
              width={65}
              height={65}
              className="object-contain"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center transition hover:bg-pink-500 hover:text-white"
            >
              <X size={22} />
            </button>

          </div>

          {/* Mobile Links */}

          <div className="px-6 py-8 flex flex-col">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-4 text-slate-700 font-semibold border-b border-slate-100 hover:text-pink-500 transition"
              >
                {item.name}

                <ChevronRight size={18} />
              </Link>
            ))}

            <Link
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="mt-8 w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white text-center font-semibold py-3 transition-all duration-300"
            >
              Book Appointment
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}