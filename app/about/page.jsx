"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  Award,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#fdfefe] via-[#fef7fb] to-[#f8fcff]">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl"></div>

      {/* ================= HERO ================= */}

      <section className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-16 lg:pt-28">"

        {/* Breadcrumb */}

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">

          <Link href="/" className="hover:text-pink-500 transition">
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-pink-500">
            About Us
          </span>

        </div>

        {/* Small Badge */}

        <div className="mt-8 flex justify-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">

            <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />

            ABOUT MINI MARVELS

          </span>

        </div>

        {/* Heading */}

        <h1 className="mx-auto mt-6 max-w-5xl text-center text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900">

          Caring Little Hearts,

          <span className="block text-pink-500">

            Building Healthy Futures

          </span>

        </h1>

        {/* Intro */}

        <p className="mx-auto mt-6 max-w-4xl text-center text-base sm:text-lg lg:text-xl leading-8 text-slate-600">

          At <span className="font-semibold text-slate-900">Mini Marvels Clinic</span>,
          we combine compassionate pediatric care with modern medical expertise
          to create a safe, welcoming and child-friendly environment where every
          little patient receives personalized attention.

        </p>

        {/* Premium Trust Badges */}

        <div className="mt-12 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-pink-100 bg-white/80 backdrop-blur-xl p-5 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">

              <Heart className="h-6 w-6 text-pink-500" />

            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Child Friendly
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Comfortable consultations designed to make every child feel safe and relaxed.
            </p>

          </div>

          <div className="rounded-2xl border border-cyan-100 bg-white/80 backdrop-blur-xl p-5 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">

              <ShieldCheck className="h-6 w-6 text-cyan-600" />

            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Trusted Care
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Evidence-based pediatric treatment focused on long-term health and wellbeing.
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur-xl p-5 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">

              <Award className="h-6 w-6 text-emerald-600" />

            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Quality Treatment
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Dedicated pediatric services with modern facilities and compassionate support.
            </p>

          </div>

        </div>

      </section>

      {/* ====== PART 2 CONTINUES FROM HERE ====== */}      {/* ================= CLINIC STORY ================= */}

      <section className="relative max-w-7xl mx-auto px-5 lg:px-8 py-12">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Image Section */}

          <div className="relative">

            {/* Background Glow */}
            <div className="absolute -top-8 -left-8 h-44 w-44 rounded-full bg-pink-200/40 blur-3xl"></div>
            <div className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl"></div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-2xl">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783334476/60e813dad251b6a41a814438fc1ea03e_xbfxbc.jpg"
                alt="Mini Marvels Clinic"
                width={900}
                height={700}
                className="w-full h-auto object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">

                  <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Child First
                  </h4>

                  <p className="text-xs text-slate-500">
                    Every decision begins with your child's comfort.
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-6 -right-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl px-5 py-4 hidden sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">

                  <ShieldCheck className="h-6 w-6 text-cyan-600" />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Trusted Care
                  </h4>

                  <p className="text-xs text-slate-500">
                    Compassionate pediatric healthcare.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-pink-600">

              OUR STORY

            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900">

              Where Compassion

              <span className="block text-pink-500">

                Meets Pediatric Excellence

              </span>

            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">

              Mini Marvels Clinic was established with a simple mission —
              to provide children with expert pediatric care in a warm,
              welcoming and stress-free environment. Every consultation
              is focused on making both parents and children feel confident,
              informed and comfortable throughout their healthcare journey.

            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">

              From preventive healthcare and vaccinations to diagnosis,
              treatment and long-term wellness guidance, our goal is to
              support every child's healthy growth with personalized care,
              modern medical practices and genuine compassion.

            </p>

            {/* Feature Grid */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

                <Stethoscope className="h-8 w-8 text-pink-500" />

                <h4 className="mt-4 font-bold text-slate-900">
                  Personalized Care
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Individual treatment plans tailored to every child's unique healthcare needs.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

                <ShieldCheck className="h-8 w-8 text-cyan-600" />

                <h4 className="mt-4 font-bold text-slate-900">
                  Safe Environment
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clean, modern and child-friendly facilities designed for comfort and safety.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===== PART 3 CONTINUES FROM HERE ===== */}      {/* ================= DOCTOR SECTION ================= */}

      <section className="relative max-w-7xl mx-auto px-5 lg:px-8 py-14">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Doctor Image */}

          <div className="relative flex justify-center">

            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-gradient-to-br from-pink-200/40 to-cyan-200/40 blur-3xl"></div>
            </div>

            {/* Decorative Ring */}
            <div className="absolute h-[360px] w-[360px] rounded-full border-2 border-dashed border-pink-200 animate-[spin_35s_linear_infinite]"></div>

            {/* Doctor Card */}
            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-100 p-5">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1782805199/doctor_img_f7lmak.png"
                alt="Doctor"
                width={520}
                height={650}
                className="w-full max-w-[360px] h-auto object-contain"
              />

            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-5 -right-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl px-5 py-4">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Dedicated Care
              </p>

              <h4 className="mt-1 font-bold text-slate-900">
                Pediatric Specialist
              </h4>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">

              MEET OUR DOCTOR

            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900">

              Caring Beyond

              <span className="block text-pink-500">

                Every Consultation

              </span>

            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">

              Our pediatric specialist is committed to providing thoughtful,
              compassionate and evidence-based medical care for infants,
              children and adolescents. Every consultation is designed to
              create a positive healthcare experience for both parents and
              young patients.

            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">

              With a strong focus on preventive healthcare, growth monitoring,
              vaccinations and early diagnosis, we strive to build lasting
              relationships with families through trust, transparency and
              personalized attention.

            </p>

            {/* Qualification Cards */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:-translate-y-1 transition">

                <h4 className="font-bold text-slate-900">
                  Child-Centered Care
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Gentle consultations focused on comfort, confidence and emotional well-being.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:-translate-y-1 transition">

                <h4 className="font-bold text-slate-900">
                  Preventive Healthcare
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Supporting healthy growth through regular check-ups and timely vaccinations.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:-translate-y-1 transition">

                <h4 className="font-bold text-slate-900">
                  Parent Guidance
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clear explanations and practical advice to help parents make informed decisions.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:-translate-y-1 transition">

                <h4 className="font-bold text-slate-900">
                  Modern Treatments
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Combining clinical expertise with up-to-date pediatric healthcare practices.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===== PART 4 CONTINUES FROM HERE ===== */}      {/* ================= WHY PARENTS CHOOSE US ================= */}

      <section className="relative max-w-7xl mx-auto px-5 lg:px-8 py-14">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-pink-600">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-3xl lg:text-5xl font-extrabold text-slate-900">
            Trusted by Parents,
            <span className="block text-pink-500">
              Loved by Little Ones
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base lg:text-lg leading-8 text-slate-600">
            We believe exceptional pediatric care goes beyond treatment. It is
            about building trust, creating comfort and supporting every child
            with compassion at every stage of growth.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-white border border-slate-100 p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
              <Heart className="h-7 w-7 text-pink-500 fill-pink-500" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Compassion First
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every child receives patient-centered care with warmth,
              kindness and genuine attention.
            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
              <ShieldCheck className="h-7 w-7 text-cyan-600" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Safe Treatments
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Modern pediatric practices focused on safety, prevention
              and long-term wellbeing.
            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <Stethoscope className="h-7 w-7 text-emerald-600" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Expert Guidance
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Personalized medical advice that supports healthy childhood
              development.
            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
              <Award className="h-7 w-7 text-yellow-600" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Family Focused
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Building lifelong relationships with parents through trust
              and transparency.
            </p>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="relative py-12">

        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="rounded-[36px] bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 p-10 text-white shadow-2xl">

            <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

              <div>
                <h3 className="text-4xl font-black">5000+</h3>
                <p className="mt-2 text-sm uppercase tracking-widest">
                  Happy Families
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">10+</h3>
                <p className="mt-2 text-sm uppercase tracking-widest">
                  Years of Care
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">24×7</h3>
                <p className="mt-2 text-sm uppercase tracking-widest">
                  Parent Support
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">100%</h3>
                <p className="mt-2 text-sm uppercase tracking-widest">
                  Child Focused
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= END CTA ================= */}

      <section className="max-w-5xl mx-auto px-5 lg:px-8 pt-8 pb-16 text-center">

        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight">

          Because Every Child

          <span className="block text-pink-500">
            Deserves Exceptional Care
          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base lg:text-lg leading-8 text-slate-600">

          We are committed to providing compassionate pediatric healthcare,
          trusted medical guidance and a welcoming environment where every
          child can grow healthier, happier and stronger.

        </p>

      </section>

    </main>
  );
}