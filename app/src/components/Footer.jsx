"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-8 pb-4">

        {/* Top Glass Card */}

        <div className="mb-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 lg:p-6">

          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">

            {/* Column 1 */}

            <div>

              {/* Logo */}

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl overflow-hidden">

                  <Image
                    src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783057515/IMG-20260702-WA0015.jpg_nvarxn.jpg"
                    alt="Mini Marvels"
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-bold">

                    Mini Marvels

                  </h3>

                  <p className="text-pink-300 text-sm">

                    Pediatric Clinic

                  </p>

                </div>

              </div>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">

                Compassionate pediatric healthcare dedicated to nurturing
                every child's healthy growth with expert medical care,
                modern treatments and a warm family-friendly environment.

              </p>

            </div>

            {/* Quick Links Starts Below */}            {/* Quick Links */}

            <div>

              <h4 className="text-lg font-bold text-white">

                Quick Links

              </h4>

              <div className="mt-4 flex flex-col gap-2">

                <Link
                  href="/"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  Home
                </Link>

                <Link
                  href="#about"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  About Us
                </Link>

                <Link
                  href="#services"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  Services
                </Link>

                <Link
                  href="#parents"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  For Parents
                </Link>
                
                <Link
                  href="blog"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  Blog
                </Link>

                <Link
                  href="gallery"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  Gallery
                </Link>
                <Link
                  href="#appointment"
                  className="group flex items-center text-slate-300 transition-all duration-300 hover:text-pink-400"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-pink-400 transition-all duration-300 group-hover:scale-150"></span>
                  Appointment
                </Link>

              </div>

            </div>

{/* Our Services */}

<div>

  <h4 className="text-lg font-bold text-white">
    Our Services
  </h4>

  <div className="mt-6 flex flex-col gap-4">

    <Link
      href="/services/child-checkups"
      className="group flex items-center text-slate-300 transition-all duration-300 hover:text-cyan-400"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150"></span>
      Child Checkups
    </Link>

    <Link
      href="/services/growth-monitoring"
      className="group flex items-center text-slate-300 transition-all duration-300 hover:text-cyan-400"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150"></span>
      Growth Monitoring
    </Link>

    <Link
      href="/services/newborn-care"
      className="group flex items-center text-slate-300 transition-all duration-300 hover:text-cyan-400"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150"></span>
      Newborn Care
    </Link>

    <Link
      href="/services/nutrition-advice"
      className="group flex items-center text-slate-300 transition-all duration-300 hover:text-cyan-400"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150"></span>
      Nutrition Advice
    </Link>

    <Link
      href="/services/vaccination"
      className="group flex items-center text-slate-300 transition-all duration-300 hover:text-cyan-400"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150"></span>
      Vaccination
    </Link>

  </div>

</div>

           {/* Contact */}

            <div>

              <h4 className="text-lg font-bold text-white">

                Contact Us

              </h4>

              <div className="mt-4 space-y-3">

                <div className="group flex items-start gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500/20 text-pink-300 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">

                    <Phone size={18} />

                  </div>

                  <div>

                    <p className="text-sm text-slate-400">

                      Phone

                    </p>

                    <a
                      href="tel:+919716383830"
                      className="transition-colors duration-300 hover:text-pink-400"
                    >
                      +919716383830
                    </a>

                  </div>

                </div>

                <div className="group flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">

                    <Mail size={18} />

                  </div>

                  <div>

                    <p className="text-sm text-slate-400">

                      Email

                    </p>

                    <a
                      href="mailto:ksana103@gmail.com"
                      className="transition-colors duration-300 hover:text-cyan-400"
                    >
                      ksana103@gmail.com
                    </a>

                  </div>

                </div>

                <div className="group flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-300 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">

                    <MapPin size={18} />

                  </div>

                  <div>

                    <p className="text-sm text-slate-400">

                      Address

                    </p>

                    <p className="leading-7 text-slate-300">

                      Galshaheed,
                      <br />
                      Moradabad, Uttar Pradesh

                    </p>

                  </div>

                </div>

                <div className="group flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">

                    <Clock size={18} />

                  </div>

                  <div>

                    <p className="text-sm text-slate-400">

                      Timings

                    </p>

                    <p className="leading-7 text-slate-300">

                      Mon – Sat
                      <br />
                      9:00 AM – 8:00 PM

                    </p>

                  </div>

                </div>

              </div>

              {/* Social Icons */}

              <div className="mt-5">

                <h5 className="text-lg font-semibold">

                  Follow Us

                </h5>

                <div className="mt-3 flex gap-3">

                  <a
                    href="https://www.instagram.com/dr.minimarvels?igsh=MXYxM3BpZDRqNWhhNA=="
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
                  >
                    <FaInstagram size={20} />
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href="https://wa.me/919716383830"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
                  >
                    <MessageCircle size={20} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer Starts Below */}        {/* Bottom Footer */}

        <div className="border-t border-white/10 pt-4">

          <div className="flex flex-col items-center justify-between gap-2 text-center lg:flex-row">

            {/* Copyright */}

            <p className="text-sm text-slate-400">

              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">

                Mini Marvels Pediatric Clinic

              </span>
              . All Rights Reserved.

            </p>

            {/* Links */}

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

              <Link
                href="/privacy-policy"
                className="text-slate-400 transition-colors duration-300 hover:text-pink-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-slate-400 transition-colors duration-300 hover:text-pink-400"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

          {/* Bottom Line */}

          <div className="mt-3 text-center">

           <p className="text-sm text-slate-500">

              Designed with
              <span className="mx-1 text-pink-400">♥</span>
              for healthier and happier little smiles.

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}