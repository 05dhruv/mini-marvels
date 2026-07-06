"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9FC] pt-32 lg:pt-40">

    
      {/* Small Decorations */}

      <div className="absolute top-24 left-10 w-4 h-4 rounded-full bg-pink-300"></div>

      <div className="absolute top-44 left-1/3 w-3 h-3 rounded-full bg-yellow-300"></div>

      <div className="absolute bottom-32 left-24 w-5 h-5 rounded-full bg-violet-200"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 min-h-[88vh]">

          {/* LEFT CONTENT */}

          <div className="relative z-10 order-2 lg:order-1">

            {/* Top Label */}

            <span className="inline-flex items-center rounded-full bg-pink-100 text-pink-600 px-5 py-2 text-sm font-semibold shadow-sm">

              Caring For Every Little Smile

            </span>

            {/* Heading */}

            <h1 className="mt-7 text-[42px] sm:text-[55px] lg:text-[68px] leading-[1.08] font-extrabold tracking-tight text-slate-900">

              Big Care for

              <span className="block text-pink-500">
                Little Ones
              </span>

            </h1>

            {/* Yellow Underline */}

            <div className="mt-4 w-32 h-[6px] rounded-full bg-yellow-400"></div>

            {/* Paragraph */}

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">

              Compassionate pediatric care for newborns, infants,
              children and adolescents in a warm, welcoming and
              child-friendly environment.

            </p>

            {/* Features */}

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-xl">

                  💗

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">

                    Child-Centered

                  </h4>

                  <p className="text-sm text-slate-500">

                    Care

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl">

                  🛡️

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">

                    Trusted By

                  </h4>

                  <p className="text-sm text-slate-500">

                    Parents

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-xl">

                  🌸

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">

                    Growing Healthy

                  </h4>

                  <p className="text-sm text-slate-500">

                    Together

                  </p>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link
                href="#appointment"
                className="inline-flex items-center justify-center rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 transition-all duration-300 hover:shadow-xl"
              >
                Book Appointment

                <ArrowRight className="ml-2" size={18} />

              </Link>

              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-xl border-2 border-pink-200 bg-white hover:border-pink-500 text-slate-700 font-semibold px-8 py-4 transition-all duration-300"
              >
                <Play
                  size={18}
                  className="mr-2 fill-pink-500 text-pink-500"
                />

                Watch Our Video

              </Link>

            </div>

          </div>          {/* RIGHT IMAGE */}

          <div className="relative order-1 lg:order-2 flex items-center justify-center">

            {/* Main Curved Background */}

            <div className="relative w-full max-w-[620px] h-[420px] sm:h-[500px] lg:h-[620px]">

              {/* White Curved Shape */}

              <div
                className="absolute inset-0 bg-white shadow-2xl overflow-hidden"
                style={{
                  borderRadius: "180px 40px 180px 40px",
                }}
              >

                {/* Image */}

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783244917/20531c6b3edb190ec105bacb81d3c049_uq20hp.jpg"
                  alt="Mini Marvels Pediatric Doctor"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Soft Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-pink-100/10 via-transparent to-white/10"></div>

              </div>

              {/* Pink Circle */}

              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-pink-200 blur-xl opacity-70"></div>

              {/* Yellow Circle */}

              <div className="absolute bottom-8 -right-8 w-24 h-24 rounded-full bg-yellow-100 blur-xl opacity-80"></div>

            </div>

            {/* Floating Cloud */}

            <div className="hidden lg:block absolute top-4 left-6">

              <svg
                width="95"
                height="55"
                viewBox="0 0 95 55"
                fill="none"
              >
                <path
                  d="M20 42H73C83 42 90 36 90 28C90 20 84 14 75 14C73 6 66 1 58 1C50 1 43 6 41 13C38 11 34 10 30 10C20 10 12 17 12 26C5 28 1 33 1 39C1 47 9 53 20 53H73"
                  stroke="#B9E7FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>

            {/* Heart */}

            <div className="hidden lg:flex absolute top-52 -left-6 text-pink-400 text-5xl rotate-12">

              ♡

            </div>

            {/* Yellow Star */}

            <div className="hidden lg:flex absolute top-36 right-8 text-4xl">

              ⭐

            </div>

            {/* Purple Star */}

            <div className="hidden lg:flex absolute top-16 right-28 text-3xl">

              ✦

            </div>

            {/* Small Decorative Lines */}

            <div className="hidden xl:flex absolute bottom-40 left-0">

              <div className="flex flex-col gap-2 rotate-12">

                <span className="w-10 h-1 rounded-full bg-teal-400"></span>

                <span className="w-6 h-1 rounded-full bg-teal-400"></span>

                <span className="w-8 h-1 rounded-full bg-teal-400"></span>

              </div>

            </div>

          </div>        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-50 via-pink-50/50 to-transparent pointer-events-none"></div>

      {/* Bottom Curve */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>

      </div>

      {/* Floating Decorations */}

      <div className="hidden lg:block absolute top-20 right-[8%]">

        <div className="w-4 h-4 rounded-full bg-yellow-300 animate-pulse"></div>

      </div>

      <div className="hidden lg:block absolute top-1/2 left-[6%]">

        <div className="w-5 h-5 rounded-full bg-pink-300 animate-pulse"></div>

      </div>

      <div className="hidden xl:block absolute bottom-40 right-[12%]">

        <div className="w-4 h-4 rounded-full bg-violet-300 animate-pulse"></div>

      </div>

      <div className="hidden xl:block absolute bottom-60 left-[45%]">

        <div className="w-3 h-3 rounded-full bg-pink-400"></div>

      </div>

      {/* Left Cloud */}

      <div className="hidden xl:block absolute bottom-40 left-20">

        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
        >
          <path
            d="M20 45H90C103 45 112 37 112 27C112 17 103 9 92 9C90 3 83 0 75 0C66 0 59 5 57 12C54 10 49 9 44 9C31 9 20 19 20 31C9 32 2 38 2 45C2 53 10 59 20 59H90"
            stroke="#C8EFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

      {/* Right Cloud */}

      <div className="hidden xl:block absolute top-32 left-[52%]">

        <svg
          width="90"
          height="45"
          viewBox="0 0 90 45"
          fill="none"
        >
          <path
            d="M18 33H67C76 33 84 27 84 20C84 13 77 7 68 7C66 2 60 0 54 0C47 0 42 4 40 8C37 7 33 6 29 6C19 6 10 13 10 22C4 24 1 28 1 33C1 39 8 44 18 44H67"
            stroke="#BFE8FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

    </section>
  );
}