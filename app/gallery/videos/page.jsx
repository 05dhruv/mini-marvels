"use client";

import Script from "next/script";
import Link from "next/link";
import {
  ChevronRight,
  Play,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
export default function GalleryVideosPage() {
  return (
    <>
      {/* Elfsight Script */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <main className="overflow-hidden bg-[#FFF9FC]">

        {/* ================= BACKGROUND DECORATIONS ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -top-32 -left-28 h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl" />

          <div className="absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-sky-200/40 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-[260px] w-[260px] rounded-full bg-pink-100/70 blur-3xl" />

        </div>

        {/* ================= HERO SECTION ================= */}

        <section className="relative pt-28 lg:pt-32 pb-10">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500">

              <Link
                href="/"
                className="transition hover:text-pink-600"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link
                href="/gallery"
                className="transition hover:text-pink-600"
              >
                Gallery
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-semibold text-pink-600">
                Videos
              </span>

            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}

              <div>

                <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-6 py-3 text-sm font-semibold tracking-wide text-pink-600">

                  <FaInstagram className="h-5 w-5" />

                  INSTAGRAM VIDEO GALLERY

                </span>

                <h1 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">

                  Watch Our

                  <span className="block mt-2 text-pink-500">

                    Child Care Journey

                  </span>

                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

                  Stay connected with Mini Marvels through our latest
                  Instagram videos featuring child care tips,
                  vaccination awareness, parenting guidance,
                  healthy growth advice and memorable clinic moments.

                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href="https://www.instagram.com/dr.minimarvels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-[0_18px_40px_rgba(236,72,153,.35)]"
                  >

                    <FaInstagram className="h-5 w-5" />

                    Follow Instagram

                  </a>

                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-pink-200 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-pink-500 hover:text-pink-600"
                  >

                    Book Appointment

                    <ArrowRight className="h-5 w-5" />

                  </Link>

                </div>

                {/* Quick Stats */}

                <div className="mt-8 flex flex-wrap gap-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center  rounded-xl bg-pink-100 text-pink-500">

                      <Play className="h-7 w-7" />

                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900">
                        Latest Reels
                      </h3>

                      <p className="text-sm text-slate-500">
                        Updated Automatically
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center  rounded-xl bg-sky-100 text-sky-500">

                      <CalendarDays className="h-7 w-7" />

                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900">
                        Parenting Tips
                      </h3>

                      <p className="text-sm text-slate-500">
                        Expert Child Care Advice
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}

              <div className="relative">

                <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-pink-200/40 to-sky-200/40 blur-2xl"></div>

                <div className="relative overflow-hidden rounded-[36px] border border-pink-100 bg-white p-6 shadow-[0_25px_70px_rgba(236,72,153,.15)]">

                  <div className="rounded-[28px] bg-gradient-to-br from-pink-500 via-pink-400 to-sky-400 p-8 text-white">

                    <div className="flex items-center justify-between">

                      <FaInstagram className="h-10 w-10 " />

                      <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

                        LIVE FEED

                      </div>

                    </div>

                    <h2 className="mt-8 text-3xl font-bold leading-snug">

                      Every New Reel

                      <span className="block">

                        Appears Here

                      </span>

                    </h2>

                    <p className="mt-5 leading-8 text-pink-50">

                      Whenever a new video is published on our
                      Instagram profile, this gallery stays
                      updated with the latest child care content.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* ================= INSTAGRAM FEED SECTION ================= */}

        <section className="pb-14">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            {/* Heading */}

            <div className="max-w-3xl mx-auto text-center">

              <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-6 py-3 text-sm font-semibold text-pink-600">

                <FaInstagram className="h-5 w-5" />

                Latest Instagram Videos

              </span>

              <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">

                Explore Our

                <span className="block mt-2 text-pink-500">

                  Instagram Feed

                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Watch our latest reels featuring child care,
                vaccination awareness, parenting guidance,
                nutrition advice and memorable moments from
                Mini Marvels Child Care Clinic.

              </p>

            </div>

            {/* Feed Card */}

            <div className="relative mt-12">

              {/* Glow */}

              <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-r from-pink-200/40 via-pink-100/20 to-sky-200/40 blur-3xl"></div>

              {/* Main Card */}

              <div className="relative rounded-[38px] border border-pink-100 bg-white p-4 lg:p-8 shadow-[0_25px_80px_rgba(236,72,153,.12)]">

                {/* Top Bar */}

                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">

                      @dr.minimarvels

                    </h3>

                    <p className="mt-2 text-slate-500">

                      Latest Reels • Child Care • Parenting • Vaccination

                    </p>

                  </div>

                  <a
                    href="https://www.instagram.com/dr.minimarvels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(236,72,153,.35)]"
                  >

                    <FaInstagram className="h-5 w-5" />

                    Visit Instagram

                  </a>

                </div>

                {/* Elfsight Feed */}

                <div className="overflow-hidden rounded-[24px] border border-pink-100 bg-[#FFF9FC] p-2 lg:p-3 max-w-5xl mx-auto">

                  <div className="mx-auto max-w-4xl overflow-hidden  rounded-xl">
  <div
    className="elfsight-app-700baf0b-f4eb-4f16-a5c6-7ed341175274"
    data-elfsight-app-lazy
  ></div>
</div>

                </div>

              </div>

            </div>

          </div>

        </section>
{/* ================= QUICK HIGHLIGHTS ================= */}

<section className="py-6 md:py-8 bg-white">

  <div className="max-w-5xl mx-auto px-4 lg:px-6">

    {/* Heading */}

    <div className="text-center">

      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">

        Explore Our Content

      </h2>

      <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-slate-600 leading-7">

        Discover helpful videos covering parenting, vaccination,
        nutrition and child wellness — all designed to support
        your family's healthcare journey.

      </p>

    </div>

    {/* Grid */}

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">

      {/* Item 1 */}

      <div className="group flex items-start gap-4">

        <div className="flex h-10 w-10  shrink-0 items-center justify-center  rounded-xl bg-pink-100 text-pink-600 transition-all duration-300 group-hover:scale-110">

          <Play className="h-5 w-5" />

        </div>

        <div>

          <h3 className="text-[15px] md:text-base font-semibold text-slate-900">

            Parenting Tips

          </h3>

          <p className="mt-1 text-[13px] md:text-sm leading-5 text-slate-600">

            Practical parenting advice to help you care
            for your child with confidence.

          </p>

        </div>

      </div>

      {/* Item 2 */}

      <div className="group flex items-start gap-4">

        <div className="flex h-10 w-10  shrink-0 items-center justify-center  rounded-xl bg-sky-100 text-sky-600 transition-all duration-300 group-hover:scale-110">

          <CalendarDays className="h-5 w-5" />

        </div>

        <div>

          <h3 className="font-bold text-slate-900">

            Vaccination

          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">

            Stay updated with immunization schedules
            and preventive healthcare guidance.

          </p>

        </div>

      </div>
            {/* Item 3 */}

      <div className="group flex items-start gap-4">

        <div className="flex h-10 w-10  shrink-0 items-center justify-center  rounded-xl bg-pink-100 text-pink-600 transition-all duration-300 group-hover:scale-110">

          <FaInstagram className="h-5 w-5" />

        </div>

        <div>

          <h3 className="font-bold text-slate-900">

            Child Care

          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">

            Learn everyday child care practices for healthy
            growth, comfort and overall well-being.

          </p>

        </div>

      </div>

      {/* Item 4 */}

      <div className="group flex items-start gap-4">

        <div className="flex h-10 w-10  shrink-0 items-center justify-center  rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:scale-110">

          <ArrowRight className="h-5 w-5 rotate-[-45deg]" />

        </div>

        <div>

          <h3 className="font-bold text-slate-900">

            Nutrition

          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">

            Healthy food ideas and nutrition guidance to
            support your child's immunity and development.

          </p>

        </div>

      </div>
            {/* Item 5 */}

      <div className="group flex items-start gap-4">

        <div className="flex h-10 w-10  shrink-0 items-center justify-center  rounded-xl bg-amber-100 text-amber-600 transition-all duration-300 group-hover:scale-110">

          <FaInstagram className="h-5 w-5" />

        </div>

        <div>

          <h3 className="font-bold text-slate-900">

            Clinic Moments

          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">

            Take a look at special moments, happy little smiles,
            awareness events and memorable experiences at Mini Marvels.

          </p>

        </div>

      </div>

      {/* Item 6 */}

      <div className="group flex items-start gap-4">

        <div className="flex h-10 w-10  shrink-0 items-center justify-center  rounded-xl bg-rose-100 text-rose-600 transition-all duration-300 group-hover:scale-110">

          <Play className="h-5 w-5" />

        </div>

        <div>

          <h3 className="font-bold text-slate-900">

            Child Wellness

          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">

            Expert guidance on healthy growth, wellness,
            prevention and overall child development.

          </p>

        </div>

      </div>

    </div>
        {/* ================= FOLLOW INSTAGRAM ================= */}

    <div className="mt-8 border-t border-pink-100 pt-8">

      <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-pink-50 via-white to-sky-50 px-5 py-4 lg:flex-row lg:px-8">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center  rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg">

            <FaInstagram className="h-7 w-7" />

          </div>

          <div>

            <h3 className="text-lg md:text-xl font-bold text-slate-900">

              Follow Mini Marvels

            </h3>

            <p className="mt-1 text-sm md:text-base text-slate-600">

              Stay connected for parenting tips, child care guidance
              and our latest Instagram reels.

            </p>

          </div>

        </div>

        {/* Button */}

        <a
          href="https://www.instagram.com/dr.minimarvels"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(236,72,153,.35)]"
        >
          <FaInstagram className="h-5 w-5" />

          Follow Now

          <ArrowRight className="h-5 w-5" />
        </a>

      </div>

    </div>
      </div>

</section>
                {/* ================= CALL TO ACTION ================= */}

        <section className="pt-14 pb-8 bg-gradient-to-br from-pink-50 via-white to-sky-50">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <div className="relative overflow-hidden rounded-[40px] border border-pink-100 bg-white shadow-[0_30px_80px_rgba(236,72,153,.12)]">

              {/* Decorative Blur */}

              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>

              <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"></div>

              <div className="relative px-8 py-14 lg:px-16">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* LEFT */}

                  <div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-6 py-3 text-sm font-semibold text-pink-600">

                      <FaInstagram className="h-5 w-5" />

                      Stay Connected

                    </span>

                    <h2 className="mt-7 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-slate-900">

                      Never Miss A

                      <span className="block mt-2 text-pink-500">

                        Child Care Update

                      </span>

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">

                      Follow Mini Marvels on Instagram for
                      parenting guidance, vaccination updates,
                      nutrition advice, healthy growth tips and
                      memorable clinic moments.

                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                      <a
                        href="https://www.instagram.com/dr.minimarvels"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(236,72,153,.35)]"
                      >

                        <FaInstagram className="h-5 w-5" />

                        Follow @dr.minimarvels

                      </a>

                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-pink-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-pink-500 hover:text-pink-600"
                      >

                        View Photo Gallery

                        <ArrowRight className="h-5 w-5" />

                      </Link>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div className="grid grid-cols-2 gap-5">

                    <div className="rounded-[28px] bg-pink-50 p-7 text-center transition hover:-translate-y-2 hover:bg-pink-100">

                      <div className="mx-auto flex h-16 w-16 items-center justify-center  rounded-xl bg-pink-500 text-white">

                        <Play className="h-8 w-8" />

                      </div>

                      <h3 className="mt-6 text-3xl font-extrabold text-slate-900">

                        24×7

                      </h3>

                      <p className="mt-2 text-slate-600">

                        Video Access

                      </p>

                    </div>

                    <div className="rounded-[28px] bg-sky-50 p-7 text-center transition hover:-translate-y-2 hover:bg-sky-100">

                      <div className="mx-auto flex h-16 w-16 items-center justify-center  rounded-xl bg-sky-500 text-white">

                        <FaInstagram className="h-8 w-8" />

                      </div>

                      <h3 className="mt-6 text-3xl font-extrabold text-slate-900">

                        Live

                      </h3>

                      <p className="mt-2 text-slate-600">

                        Instagram Feed

                      </p>

                    </div>

                    <div className="rounded-[28px] bg-pink-50 p-7 text-center transition hover:-translate-y-2 hover:bg-pink-100">

                      <div className="mx-auto flex h-16 w-16 items-center justify-center  rounded-xl bg-pink-500 text-white">

                        <CalendarDays className="h-8 w-8" />

                      </div>

                      <h3 className="mt-6 text-3xl font-extrabold text-slate-900">

                        Expert

                      </h3>

                      <p className="mt-2 text-slate-600">

                        Parenting Tips

                      </p>

                    </div>

                    <div className="rounded-[28px] bg-sky-50 p-7 text-center transition hover:-translate-y-2 hover:bg-sky-100">

                      <div className="mx-auto flex h-16 w-16 items-center justify-center  rounded-xl bg-sky-500 text-white">

                        <Play className="h-8 w-8" />

                      </div>

                      <h3 className="mt-6 text-3xl font-extrabold text-slate-900">

                        Updated

                      </h3>

                      <p className="mt-2 text-slate-600">

                        Automatically

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* ================= FLOATING DECORATIVE ELEMENTS ================= */}

        <div className="pointer-events-none absolute left-10 top-[18%] hidden xl:block">
          <div className="h-5 w-5 rounded-full bg-pink-300 animate-pulse"></div>
        </div>

        <div className="pointer-events-none absolute right-10 top-[38%] hidden xl:block">
          <div className="h-7 w-7 rounded-full bg-sky-300 rounded-full opacity-80 animate-bounce"></div>
        </div>

        <div className="pointer-events-none absolute left-[12%] bottom-[24%] hidden xl:block text-5xl text-pink-300 opacity-60">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[14%] bottom-[18%] hidden xl:block text-6xl opacity-20">
          ✨
        </div>

        <div className="pointer-events-none absolute left-1/2 top-24 hidden 2xl:block">
          <div className="h-3 w-3 rounded-full bg-sky-300 animate-ping"></div>
        </div>

        <div className="pointer-events-none absolute right-1/3 bottom-10 hidden 2xl:block">
          <div className="h-4 w-4 rounded-full bg-pink-300 animate-pulse"></div>
        </div>

      </main>
    </>
  );
}