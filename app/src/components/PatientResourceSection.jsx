"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  CalendarDays,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
    title: "Before Your Visit",
    description:
      "Know what to bring, appointment preparation tips and everything required before visiting the clinic.",
    color: "bg-pink-100 text-pink-600",
    icon: FileText,
  },
  {
    title: "Vaccination Guide",
    description:
      "Age-wise vaccination schedules and important immunization recommendations for every child.",
    color: "bg-cyan-100 text-cyan-600",
    icon: ShieldCheck,
  },
  {
    title: "Appointment Process",
    description:
      "Simple consultation flow with minimal waiting time and child-friendly care from start to finish.",
    color: "bg-yellow-100 text-yellow-600",
    icon: CalendarDays,
  },
  {
    title: "Health Advice",
    description:
      "Trusted pediatric guidance on nutrition, fever care, growth milestones and preventive healthcare.",
    color: "bg-emerald-100 text-emerald-600",
    icon: Stethoscope,
  },
];

export default function PatientResources() {
  return (
    <section
      id="patient-resources"
      className="relative overflow-hidden bg-white py-10 lg:py-14"
    >
      {/* Background */}

      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-pink-600">

            PATIENT RESOURCES

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">

            Everything You Need

            <span className="text-pink-500">

              {" "}Before Every Visit

            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600">

            Access trusted pediatric resources, vaccination guidance,
            appointment information, health tips and essential documents
            designed to make every visit smooth, informed and stress-free
            for you and your child.

          </p>

        </div>

        {/* Content */}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] items-stretch">

          {/* Left Side Starts */}
<div className="grid gap-6 sm:grid-cols-2">
  {resources.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {/* Icon */}
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {item.description}
        </p>

        {/* Arrow */}
        <div className="mt-4 flex items-center text-sm font-semibold text-pink-500 group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    );
  })}
</div>
{/* Right Side */}

<div className="relative flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
  
  {/* Image Block */}
  <div className="relative w-full max-w-md">
    
    {/* Decorative background blur */}
    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-pink-200/50 blur-3xl"></div>
    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl"></div>

    {/* Main Image */}
    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
<Image
  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279771/IMG_20260706_004428.jpg_ro4guq.jpg"
  alt="Patient Resources"
  width={500}
  height={500}
  className="w-full h-auto object-cover"
/>
    </div>
  </div>

  {/* Text Content */}
  <h3 className="mt-8 text-2xl sm:text-3xl font-extrabold text-slate-900">
    Caring Guidance for Every Child
  </h3>

  <p className="mt-4 text-base text-slate-600 leading-7 max-w-md">
    We provide easy-to-follow medical guidance so parents can make informed decisions
    about their child’s health, growth, and well-being.
  </p>

  {/* CTA Button */}
  <div className="mt-6">
    <Link
      href="/appointment"
      className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-pink-600 hover:shadow-lg"
    >
      Book Appointment
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
</div>        {/* End Grid */}
      </div>

      {/* Bottom Note / Extra CTA (optional but useful) */}
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500">
          All resources are curated by certified pediatric specialists for better child healthcare guidance.
        </p>
      </div>
    </div>
  </section>
);
}