"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

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
      dropdown: [
        {
          name: "Newborn Care",
          href: "/services/newborn-care",
        },
        {
          name: "Vaccination",
          href: "/services/vaccination",
        },
        {
          name: "Child Checkups",
          href: "/services/child-checkups",
        },
        {
          name: "Growth Monitoring",
          href: "/services/growth-monitoring",
        },
        {
          name: "Nutrition Advice",
          href: "/services/nutrition-advice",
        },
      ],
    },

    {
      name: "Parents",
      href: "/parents",
    },
    {
      name: "Blog",
      href: "/blog",
    },

        {
      name: "Gallery",
      href: "/gallery",
       dropdown: [
        {
          name: "Images",
          href: "/gallery/images",
        },
        {
          name: "Videos",
          href: "/gallery/videos",
        },
      ]
    },
    {
      name: "Patient Resources",
      href: "/resources",
    },

    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
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

            <div className="relative w-18 h-18 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg border-4 border-pink-100 overflow-hidden transition-all duration-300 hover:scale-105">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783057515/IMG-20260702-WA0015.jpg_nvarxn.jpg"
                alt="Mini Marvels"
                fill
                priority
                 sizes="(max-width:768px) 72px, 96px"
                className="object-cover"
              />

            </div>

            {/* Mobile Contact Info */}

<div className="flex-1 lg:hidden flex flex-col items-center justify-center px-2">

  <a
    href="tel:+919716383830"
    className="text-[14px] sm:text-xs font-semibold text-slate-700 hover:text-pink-500 transition"
  >
    📞 +919716383830
  </a>
      <div className="my-1 h-px w-38 rounded-full bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
  <a
    href="mailto:ksana103@gmail.com"
    className="text-[13px] sm:text-[11px] font-semibold text-slate-700 hover:text-cyan-500 transition truncate"
  >
    ✉ ksana103@gmail.com
  </a>

</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-9">

  {navLinks.map((item) => (

    <div
      key={item.name}
      className="relative group"
    >

      {/* Main Navigation Link */}

      <Link
        href={item.href}
        className="relative flex items-center gap-1 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-pink-500"
      >

        {item.name}

        {item.dropdown && (
          <ChevronDown
            size={16}
            className="transition-transform duration-300 group-hover:rotate-180"
          />
        )}

        <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

      </Link>

      {/* Dropdown */}

      {item.dropdown && (

        <div
          className="
            absolute
            left-1/2
            top-full
            mt-5
            -translate-x-1/2
            w-72
            rounded-2xl
            bg-white
            border
            border-pink-100
            shadow-2xl
            opacity-0
            invisible
            translate-y-4
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all
            duration-300
            overflow-hidden
            z-[9999]
          "
        >

          {item.dropdown.map((service) => (

            <Link
              key={service.name}
              href={service.href}
              className="
                flex
                items-center
                justify-between
                px-6
                py-4
                text-[15px]
                font-medium
                text-slate-700
                hover:bg-pink-50
                hover:text-pink-600
                transition-all
                duration-300
              "
            >

              <span>
                {service.name}
              </span>

              <ChevronRight
                size={17}
                className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
              />

            </Link>

          ))}

        </div>

      )}

    </div>

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
      </header>

      {/* Mobile Menu */}
      <div
  className={`fixed inset-0 z-[999] transition-all duration-300 lg:hidden ${
    isOpen
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none"
  }`}
>
  {/* Overlay */}

  <div
    onClick={() => setIsOpen(false)}
    className="absolute inset-0 z-[999] bg-slate-900/50 backdrop-blur-sm"
  />

  {/* Drawer */}

  <div
    className={`absolute right-0 top-0 h-full w-[82%] max-w-sm z-[1000] bg-white shadow-2xl transition-transform duration-300 ${
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
        className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
      >
        <X size={22} />
      </button>

    </div>

    {/* Mobile Links */}

    <div className="px-6 py-8 flex flex-col">

      {navLinks.map((item) => {

        if (item.dropdown) {

          return (

            <div
              key={item.name}
              className="border-b border-slate-100"
            >

              {/* Services Row */}

<div className="flex items-center justify-between py-4">

  <Link
    href={item.href}
    onClick={() => setIsOpen(false)}
    className="font-semibold text-slate-700 hover:text-pink-500 transition"
  >
    {item.name}
  </Link>

  <button
    type="button"
    onClick={() =>
      setOpenMenu(openMenu === item.name ? null : item.name)
    }
    className="text-pink-500 p-2 rounded-full hover:bg-pink-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-200"
  >

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openMenu === item.name
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

              </div>

              {/* Dropdown Start */}

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openMenu === item.name
                    ? "max-h-96"
                    : "max-h-0"
                }`}
              >                {item.dropdown.map((service) => (

                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenMenu(null);
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      ml-5
                      py-3
                      text-sm
                      text-slate-600
                      hover:text-pink-500
                      hover:bg-pink-50
                      rounded-lg
                      px-3
                      transition-all
                      duration-300
                    "
                  >

                    <span>{service.name}</span>

                    <ChevronRight size={16} />

                  </Link>

                ))}

              </div>

            </div>

          );

        }

        return (

          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="
              flex
              items-center
              justify-between
              py-4
              text-slate-700
              font-semibold
              border-b
              border-slate-100
              hover:text-pink-500
              transition
            "
          >

            {item.name}

            <ChevronRight size={18} />

          </Link>

        );

      })}

      <Link
        href="/appointment"
        onClick={() => setIsOpen(false)}
        className="
          mt-8
          w-full
          rounded-full
          bg-pink-500
          hover:bg-pink-600
          text-white
          text-center
          font-semibold
          py-3
          transition-all
          duration-300
        "
      >
        Book Appointment
      </Link>

    </div>

  </div>

</div>   

    </>
  );
}