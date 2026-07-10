"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Heart,
  Baby,
  ShieldCheck,
  Stethoscope,
  Apple,
} from "lucide-react";

export default function ServicesPage() {
  const autoplay = useRef(
  Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })
);

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    skipSnaps: false,
  },
  [autoplay.current]
);

const [selectedIndex, setSelectedIndex] = useState(0);
const [scrollSnaps, setScrollSnaps] = useState([]);

const scrollPrev = useCallback(() => {
  emblaApi?.scrollPrev();
}, [emblaApi]);

const scrollNext = useCallback(() => {
  emblaApi?.scrollNext();
}, [emblaApi]);

const scrollTo = useCallback(
  (index) => emblaApi?.scrollTo(index),
  [emblaApi]
);

const onSelect = useCallback(() => {
  if (!emblaApi) return;

  setSelectedIndex(emblaApi.selectedScrollSnap());
}, [emblaApi]);

useEffect(() => {
  if (!emblaApi) return;

  setScrollSnaps(emblaApi.scrollSnapList());

  onSelect();

  emblaApi.on("select", onSelect);
  emblaApi.on("reInit", onSelect);

  return () => {
    emblaApi.off("select", onSelect);
    emblaApi.off("reInit", onSelect);
  };
}, [emblaApi, onSelect]);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#fffefe] via-[#fff8fb] to-[#f6fbff]">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-pink-200/40 blur-3xl"></div>
      <div className="absolute top-1/4 -right-28 h-[26rem] w-[26rem] rounded-full bg-cyan-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl"></div>
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative max-w-6xl mx-auto px-5 lg:px-8 pt-24 lg:pt-28 pb-10">
       {/* Breadcrumb */}

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">

          <Link
            href="/"
            className="transition hover:text-pink-500"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-pink-500">
            Services
          </span>

        </div>

        {/* Small Badge */}

        <div className="mt-5 flex justify-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">

            <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />

            OUR PEDIATRIC SERVICES

          </span>

        </div>

        {/* Heading */}

        <h1 className="mx-auto mt-4 max-w-5xl text-center text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-900">

          Comprehensive Healthcare

          <span className="block text-pink-500">

            Designed For Every Child

          </span>

        </h1>

        {/* Intro */}

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm sm:text-base lg:text-lg leading-7 text-slate-600">

          From newborn care to preventive healthcare,
          our pediatric services are thoughtfully designed
          to support every stage of your child's growth,
          ensuring compassionate treatment, accurate diagnosis
          and complete peace of mind for parents.

        </p>

        {/* HERO IMAGE */}

        <div className="relative mt-8">

          {/* Decorative Glow */}

          <div className="absolute -top-8 left-10 h-44 w-44 rounded-full bg-pink-200/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-10 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl"></div>

          {/* Main Image */}

          <div className="relative overflow-hidden rounded-[24px] border border-white/60 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)]">

            <Image
              src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783337913/images_y8adha.jpg"
              alt="Mini Marvels Services"
              width={1500}
              height={900}
              className="h-[220px] sm:h-[300px] lg:h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Gradient Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>

          </div>

          {/* Floating Card Left */}

          <div className="absolute left-5 top-5 hidden md:block rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-xl px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">

                <Baby className="h-6 w-6 text-pink-500" />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-500">

                  Specialized

                </p>

                <h4 className="font-bold text-slate-900">

                  Newborn Care

                </h4>

              </div>

            </div>

          </div>

          {/* Floating Card Right */}

          <div className="absolute right-5 bottom-5 hidden md:block rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-xl px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">

                <ShieldCheck className="h-6 w-6 text-cyan-600" />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-500">

                  Trusted

                </p>

                <h4 className="font-bold text-slate-900">

                  Pediatric Care

                </h4>

              </div>

            </div>

          </div>

        </div>

            {/* Trust Highlights */}

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {/* Card 1 */}

          <div className="group rounded-3xl border border-pink-100/70 bg-white/80 backdrop-blur-xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 transition group-hover:scale-110">

              <Heart className="h-7 w-7 fill-pink-500 text-pink-500" />

            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Compassionate Care
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every child receives personalized attention in a warm,
              comforting and child-friendly environment designed to reduce
              anxiety and build trust.
            </p>

          </div>

          {/* Card 2 */}

          <div className="group rounded-3xl border border-cyan-100/70 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 transition group-hover:scale-110">

              <Stethoscope className="h-7 w-7 text-cyan-600" />

            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Expert Consultation
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Accurate diagnosis and evidence-based pediatric treatment
              focused on healthy growth, development and preventive care.
            </p>

          </div>

          {/* Card 3 */}

          <div className="group rounded-3xl border border-emerald-100/70 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:scale-110">

              <ShieldCheck className="h-7 w-7 text-emerald-600" />

            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Trusted Healthcare
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              From vaccinations to routine check-ups, we partner with
              parents to provide safe, reliable and long-term pediatric
              healthcare.
            </p>

          </div>

        </div>

        {/* Quick Stats */}

        <div className="hidden lg:block mt-6 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl p-5 shadow-md">

          <div className="grid grid-cols-4 gap-4 text-center">

            <div>
              <h3 className="text-3xl font-extrabold text-pink-500">
                5000+
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Happy Families
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-cyan-500">
                10+
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-pink-500">
                24×7
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Parent Guidance
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-500">
                100%
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Child Focused
              </p>
            </div>

          </div>

        </div>

      </section>   
      {/* ====================================================== */}
      {/* OUR PEDIATRIC SERVICES */}
      {/* ====================================================== */}

      <section className="relative py-10 lg:py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          {/* Section Heading */}

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              OUR SERVICES
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Complete Pediatric Care
              <span className="block text-pink-500">
                Under One Roof
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
              Every service is designed to ensure your child receives
              compassionate, modern and evidence-based pediatric care
              at every stage of growth.
            </p>

          </div>

          {/* ================= Embla Carousel ================= */}

          <div className="relative mt-10">

            <div className="overflow-hidden" ref={emblaRef}>

              <div className="flex">

                {[
                  {
                    title: "Child Checkups",
                    href: "/services/child-checkups",
                    image:
                      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg",
                    icon: (
                      <Stethoscope className="h-6 w-6 text-pink-600" />
                    ),
                    iconBg: "bg-pink-100",
                    description:
                      "Comprehensive pediatric consultations for common illnesses, developmental concerns and routine health evaluations."
                  },

                  {
                    title: "Growth Monitoring",
                    href: "/services/growth-monitoring",
                    image:
                      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335974/875222c84eb5034561ac5dccb6697279_khu5lb.jpg",
                    icon: (
                      <Heart className="h-6 w-6 text-emerald-600" />
                    ),
                    iconBg: "bg-emerald-100",
                    description:
                      "Regular monitoring of height, weight, nutrition and developmental milestones for healthy childhood growth."
                  },

                  {
                    title: "Newborn Care",
                    href: "/services/newborn-care",
                    image:
                      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335944/4e664d00863584c432c0ab22d5917e17_tzealo.jpg",
                    icon: (
                      <Baby className="h-6 w-6 text-yellow-600" />
                    ),
                    iconBg: "bg-yellow-100",
                    description:
                      "Gentle newborn assessments, feeding guidance, jaundice monitoring and complete newborn support."
                  },

                  {
                    title: "Nutrition Advice",
                    href: "/services/nutrition-advice",
                    image:
                      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335957/s7_zvmwmv.jpg",
                    icon: (
                      <Apple className="h-6 w-6 text-orange-600" />
                    ),
                    iconBg: "bg-orange-100",
                    description:
                      "Personalized nutrition advice, meal planning and feeding guidance for healthy development."
                  },

                  {
                    title: "Vaccination",
                    href: "/services/vaccination",
                    image:
                      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783244825/IMG_20260701_213817.jpg_o3vvy9.jpg",
                    icon: (
                      <ShieldCheck className="h-6 w-6 text-cyan-600" />
                    ),
                    iconBg: "bg-cyan-100",
                    description:
                      "Complete vaccination schedules following recommended immunization guidelines."
                  }

                ].map((service, index) => (
                                    <div
                    key={index}
                    className="min-w-0 flex-[0_0_88%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_31%]"
                  >
                    <Link href={service.href} className="block h-full">

                      <div className="group h-full overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                        {/* Image */}

                        <div className="relative overflow-hidden">

                          <Image
                            src={service.image}
                            alt={service.title}
                            width={700}
                            height={500}
                            className="h-40 md:h-44 lg:h-48 w-full object-cover transition duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                        </div>

                        {/* Content */}

                        <div className="p-4">

                          <div className="flex items-center gap-4">

                            <div
                              className={`rounded-xl p-3 ${service.iconBg}`}
                            >
                              {service.icon}
                            </div>

                            <h3 className="text-lg lg:text-xl2 font-bold text-slate-900 transition-colors duration-300 group-hover:text-pink-500">
                              {service.title}
                            </h3>

                          </div>

                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {service.description}
                          </p>

                          <div className="mt-4 flex items-center justify-between">

                            <span className="inline-flex items-center rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600 transition duration-300 group-hover:bg-pink-500 group-hover:text-white">
                              Learn More
                            </span>

                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                              <ChevronRight className="h-5 w-5" />
                            </div>

                          </div>

                        </div>

                      </div>

                    </Link>

                  </div>
                ))}
              </div>
            </div>
                        {/* Previous Button */}

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white lg:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white lg:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </div>

          {/* Dots */}

          <div className="mt-6 flex items-center justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-10 bg-pink-500"
                    : "w-3 bg-slate-300 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>

        </div>

      </section>

            {/* ====================================================== */}
      {/* OUR CARE JOURNEY */}
      {/* ====================================================== */}

      <section className="relative py-10 lg:py-12 bg-gradient-to-b from-[#fff8fb] to-[#f7fbff] overflow-hidden">

        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              OUR PROCESS
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Your Child's Care
              <span className="block text-pink-500">
                In Four Simple Steps
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
              We follow a simple and transparent process to ensure every
              child receives the highest quality pediatric care.
            </p>

          </div>

          {/* Timeline */}

          <div className="relative mt-6 md:mt-8">

            {/* Line */}

            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-pink-100 lg:block"></div>

            <div className="grid gap-5 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Book Visit",
                  text: "Schedule your appointment easily online or by phone.",
                },
                {
                  number: "02",
                  title: "Health Assessment",
                  text: "Complete child examination with detailed consultation.",
                },
                {
                  number: "03",
                  title: "Treatment Plan",
                  text: "Personalized care, medicines and health guidance.",
                },
                {
                  number: "04",
                  title: "Follow-Up",
                  text: "Regular monitoring for healthy growth and recovery.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-[28px] border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-2xl font-black text-white shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

          {/* ====================================================== */}
      {/* PREMIUM CTA SECTION */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden py-10 lg:py-14">

        {/* Background Glow */}

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 lg:px-6">

          <div className="overflow-hidden rounded-[24px] lg:rounded-[30px] bg-gradient-to-br from-pink-500 via-pink-400 to-cyan-400 shadow-[0_15px_45px_rgba(236,72,153,0.18)]">

            <div className="grid items-center lg:grid-cols-2">

              {/* Clinic Image */}

              <div className="relative h-[180px] sm:h-[220px] lg:h-[340px] overflow-hidden">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783334476/60e813dad251b6a41a814438fc1ea03e_xbfxbc.jpg"
                  alt="Mini Marvels Clinic"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>

              </div>

              {/* CTA Content */}

              <div className="relative p-5 sm:p-7 lg:p-10 text-white">

                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-xl">

                  MINI MARVELS CLINIC

                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">

                  Your Child Deserves

                  <span className="block">

                    The Best Pediatric Care

                  </span>

                </h2>

                <p className="mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-white/90">

                  From routine check-ups to specialized pediatric care,
                  we're committed to providing a safe, caring and
                  child-friendly healthcare experience for every family.

                </p>

                {/* Feature Chips */}

                <div className="mt-5 flex flex-wrap gap-2">

                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs backdrop-blur-xl">
                    ✓ Child-Friendly Environment
                  </span>

                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs backdrop-blur-xl">
                    ✓ Experienced Pediatrician
                  </span>

                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs backdrop-blur-xl">
                    ✓ Trusted Healthcare
                  </span>

                </div>

                {/* CTA Button */}

                <div className="mt-6">

                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-pink-600 shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Book Appointment

                    <ArrowRight className="h-5 w-5" />

                  </Link>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Note */}

          <div className="mt-6 text-center">

            <p className="mx-auto max-w-3xl text-sm sm:text-base leading-7 text-slate-500">

              Every consultation at <span className="font-semibold text-pink-500">Mini Marvels Clinic</span>
              is focused on providing compassionate care, accurate diagnosis
              and long-term wellness for your child. We are honored to be a
              trusted healthcare partner for families.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}