"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  Baby,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#fffefe] via-[#fff8fb] to-[#f6fbff]">

      {/* Background Effects */}

      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute top-1/4 -right-28 h-[26rem] w-[26rem] rounded-full bg-cyan-200/40 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl"></div>

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-32 lg:pt-40 pb-16">

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

        <div className="mt-8 flex justify-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">

            <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />

            OUR PEDIATRIC SERVICES

          </span>

        </div>

        {/* Heading */}

        <h1 className="mx-auto mt-6 max-w-5xl text-center text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900">

          Comprehensive Healthcare

          <span className="block text-pink-500">

            Designed For Every Child

          </span>

        </h1>

        {/* Intro */}

        <p className="mx-auto mt-6 max-w-4xl text-center text-base sm:text-lg lg:text-xl leading-8 text-slate-600">

          From newborn care to preventive healthcare,
          our pediatric services are thoughtfully designed
          to support every stage of your child's growth,
          ensuring compassionate treatment, accurate diagnosis
          and complete peace of mind for parents.

        </p>

        {/* HERO IMAGE */}

        <div className="relative mt-14">

          {/* Decorative Glow */}

          <div className="absolute -top-8 left-10 h-44 w-44 rounded-full bg-pink-200/40 blur-3xl"></div>

          <div className="absolute bottom-0 right-10 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl"></div>

          {/* Main Image */}

          <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)]">

            <Image
              src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783337913/images_y8adha.jpg"
              alt="Mini Marvels Services"
              width={1500}
              height={900}
              className="h-[260px] sm:h-[380px] lg:h-[520px] w-full object-cover transition duration-700 hover:scale-105"
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}

          <div className="group rounded-3xl border border-pink-100/70 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 transition group-hover:scale-110">

              <Heart className="h-7 w-7 fill-pink-500 text-pink-500" />

            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Compassionate Care
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
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

        <div className="mt-14 rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl p-8 shadow-lg">

          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">

            <div>
              <h3 className="text-4xl font-black text-pink-500">
                5000+
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Happy Families
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-500">
                10+
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-pink-500">
                24×7
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Parent Guidance
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-500">
                100%
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Child Focused
              </p>
            </div>

          </div>

        </div>

      </section>   
      {/* ====================================================== */}
      {/* OUR PEDIATRIC SERVICES */}
      {/* ====================================================== */}

      <section className="relative py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

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

          {/* Services Grid */}

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* ================================================= */}

            {/* General Consultation */}

            {/* ================================================= */}

            <div className="group overflow-hidden rounded-[28px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">

              <div className="overflow-hidden">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg"
                  alt="General Consultation"
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-pink-100 p-3">
                    <Stethoscope className="h-6 w-6 text-pink-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    General Consultation
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Comprehensive pediatric consultations for common illnesses,
                  developmental concerns and routine health evaluations,
                  ensuring accurate diagnosis and personalized treatment.
                </p>

              </div>

            </div>

            {/* ================================================= */}

            {/* Vaccination */}

            {/* ================================================= */}

            <div className="group overflow-hidden rounded-[28px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">

              <div className="overflow-hidden">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783244825/IMG_20260701_213817.jpg_o3vvy9.jpg"
                  alt="Vaccination"
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-cyan-100 p-3">
                    <ShieldCheck className="h-6 w-6 text-cyan-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Vaccination & Immunization
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Complete vaccination schedules following recommended
                  immunization guidelines to protect children from
                  preventable diseases.
                </p>

              </div>

            </div>

            {/* ================================================= */}

            {/* Newborn Care */}

            {/* ================================================= */}

            <div className="group overflow-hidden rounded-[28px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">

              <div className="overflow-hidden">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335944/4e664d00863584c432c0ab22d5917e17_tzealo.jpg"
                  alt="Newborn Care"
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-yellow-100 p-3">
                    <Baby className="h-6 w-6 text-yellow-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Newborn Care
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Gentle newborn assessments, feeding guidance,
                  jaundice monitoring and complete support for
                  healthy early development.
                </p>

              </div>

            </div>

            {/* ================================================= */}

            {/* Growth Monitoring */}

            {/* ================================================= */}

            <div className="group overflow-hidden rounded-[28px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">

              <div className="overflow-hidden">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335974/875222c84eb5034561ac5dccb6697279_khu5lb.jpg"
                  alt="Growth Monitoring"
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-emerald-100 p-3">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Growth Monitoring
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Regular monitoring of height, weight, nutrition,
                  milestones and overall physical development for
                  healthy childhood growth.
                </p>

              </div>

            </div>

                        {/* ================================================= */}
            {/* Nutrition Counseling */}
            {/* ================================================= */}

            <div className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <div className="overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335957/s7_zvmwmv.jpg"
                  alt="Nutrition Counseling"
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-orange-100 p-3">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Nutrition Counseling
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Personalized nutrition advice, healthy meal planning
                  and feeding guidance to support proper physical and
                  mental development.
                </p>

              </div>

            </div>

            {/* ================================================= */}
            {/* Fever & Infection Care */}
            {/* ================================================= */}

            <div className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <div className="overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783336125/doctor-thermometer-and-parent-with-child-in-bedroom-for-healthcare-sick-and-fever-check-illness-temperature-and-influenza-symptoms-with-girl-in-family-home-for-disease-infection-and-pediatrician-photo_c0fj84.jpg"
                  alt="Fever & Infection Care"
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-red-100 p-3">
                    <ShieldCheck className="h-6 w-6 text-red-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Fever & Infection Care
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Early diagnosis and effective treatment for fever,
                  viral infections, allergies and common childhood
                  illnesses with compassionate care.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>

            {/* ====================================================== */}
      {/* WHY CHOOSE MINI MARVELS */}
      {/* ====================================================== */}

      <section className="relative py-16 lg:py-20 overflow-hidden">

        {/* Background Glow */}

        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl"></div>

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">

              WHY CHOOSE US

            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">

              Caring Beyond

              <span className="block text-pink-500">

                Every Consultation

              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">

              We combine modern pediatric expertise with compassionate
              care to create a safe, friendly and reassuring experience
              for both children and parents.

            </p>

          </div>

          {/* Features */}

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

            {/* Feature 1 */}

            <div className="group rounded-[28px] border border-pink-100 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 transition duration-300 group-hover:scale-110">

                <Heart className="h-8 w-8 fill-pink-500 text-pink-500" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                Child Friendly Care

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                Every consultation is designed to keep children relaxed,
                comfortable and stress-free throughout their visit.

              </p>

            </div>

            {/* Feature 2 */}

            <div className="group rounded-[28px] border border-cyan-100 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition duration-300 group-hover:scale-110">

                <ShieldCheck className="h-8 w-8 text-cyan-600" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                Safe Treatments

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                Evidence-based treatments and preventive healthcare
                focused on your child's long-term wellness.

              </p>

            </div>

            {/* Feature 3 */}

            <div className="group rounded-[28px] border border-emerald-100 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition duration-300 group-hover:scale-110">

                <Stethoscope className="h-8 w-8 text-emerald-600" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                Expert Guidance

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                Personalized medical advice that supports healthy
                growth, nutrition and child development.

              </p>

            </div>

            {/* Feature 4 */}

            <div className="group rounded-[28px] border border-yellow-100 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 transition duration-300 group-hover:scale-110">

                <Baby className="h-8 w-8 text-yellow-600" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                Complete Child Care

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                From newborn care to adolescence, every stage of
                childhood is supported with dedicated medical care.

              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ====================================================== */}
      {/* OUR CARE JOURNEY */}
      {/* ====================================================== */}

      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-[#fff8fb] to-[#f7fbff] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

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

          <div className="relative mt-16">

            {/* Line */}

            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-pink-100 lg:block"></div>

            <div className="grid gap-8 lg:grid-cols-4">

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
                  className="relative rounded-[28px] border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl font-black text-white shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="mt-20 rounded-[34px] bg-white p-10 shadow-xl border border-slate-100">

            <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

              <div>
                <h3 className="text-5xl font-black text-pink-500">
                  5000+
                </h3>
                <p className="mt-3 text-slate-600 font-medium">
                  Happy Families
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-500">
                  10+
                </h3>
                <p className="mt-3 text-slate-600 font-medium">
                  Years of Care
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-pink-500">
                  98%
                </h3>
                <p className="mt-3 text-slate-600 font-medium">
                  Parent Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-500">
                  24×7
                </h3>
                <p className="mt-3 text-slate-600 font-medium">
                  Care Guidance
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

          {/* ====================================================== */}
      {/* PREMIUM CTA SECTION */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden py-16 lg:py-20">

        {/* Background Glow */}

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-pink-500 via-pink-400 to-cyan-400 shadow-[0_30px_80px_rgba(236,72,153,0.25)]">

            <div className="grid items-center lg:grid-cols-2">

              {/* Clinic Image */}

              <div className="relative h-[320px] lg:h-[520px] overflow-hidden">

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

              <div className="relative p-8 sm:p-12 lg:p-16 text-white">

                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur-xl">

                  MINI MARVELS CLINIC

                </span>

                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">

                  Your Child Deserves

                  <span className="block">

                    The Best Pediatric Care

                  </span>

                </h2>

                <p className="mt-6 text-base sm:text-lg leading-8 text-white/90">

                  From routine check-ups to specialized pediatric care,
                  we're committed to providing a safe, caring and
                  child-friendly healthcare experience for every family.

                </p>

                {/* Feature Chips */}

                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur-xl">
                    ✓ Child-Friendly Environment
                  </span>

                  <span className="rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur-xl">
                    ✓ Experienced Pediatrician
                  </span>

                  <span className="rounded-full bg-white/15 px-5 py-2 text-sm backdrop-blur-xl">
                    ✓ Trusted Healthcare
                  </span>

                </div>

                {/* CTA Button */}

                <div className="mt-10">

                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-pink-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    Book Appointment

                    <ArrowRight className="h-5 w-5" />

                  </Link>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Note */}

          <div className="mt-12 text-center">

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