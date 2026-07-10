"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  HeartPulse,
  Baby,
  Ruler,
  Scale,
  Apple,
  Stethoscope,
  CalendarDays,
  CircleCheckBig,
  Sparkles,
} from "lucide-react";

const checkupPoints = [
  {
    icon: Ruler,
    title: "Height & Weight",
    description:
      "Regular measurement to ensure healthy physical growth.",
  },
  {
    icon: HeartPulse,
    title: "Growth & Development",
    description:
      "Monitoring developmental milestones according to age.",
  },
  {
    icon: Apple,
    title: "Nutrition Review",
    description:
      "Checking eating habits and nutritional requirements.",
  },
  {
    icon: Stethoscope,
    title: "Physical Examination",
    description:
      "Complete health assessment for overall well-being.",
  },
  {
    icon: Baby,
    title: "Vaccination Review",
    description:
      "Ensuring immunizations remain up to date.",
  },
];

const visitSchedule = [
  {
    age: "Newborn",
    detail: "Initial health assessment after birth.",
  },
  {
    age: "Infant",
    detail: "Regular growth and feeding evaluation.",
  },
  {
    age: "Toddler",
    detail: "Developmental milestone monitoring.",
  },
  {
    age: "School Age",
    detail: "Routine health and wellness checkups.",
  },
];

const faqs = [
  {
    question: "How often should my child have a checkup?",
    answer:
      "Your pediatrician will recommend a schedule based on your child's age and health needs.",
  },
  {
    question: "What is included in a child checkup?",
    answer:
      "Growth assessment, physical examination, nutrition review and developmental evaluation.",
  },
  {
    question: "Why are regular checkups important?",
    answer:
      "They help monitor healthy growth and identify concerns early.",
  },
];

export default function ChildCheckupPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF9FC]">
object-contain

      {/* ================= HERO SECTION ================= */}

<section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-10 lg:pb-14">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7FA] via-white to-[#FFF2F6]"></div>

  <div className="absolute -top-28 -left-28 h-64 w-64 rounded-full bg-pink-100/50 blur-3xl"></div>

  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

    {/* Breadcrumb */}

    <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500">

      <Link
        href="/"
        className="transition hover:text-pink-600"
      >
        Home
      </Link>

      <ChevronRight className="mx-2 h-4 w-4" />

      <Link
        href="/services"
        className="transition hover:text-pink-600"
      >
        Services
      </Link>

      <ChevronRight className="mx-2 h-4 w-4" />

      <span className="font-semibold text-pink-600">
        Child Checkups
      </span>

    </div>

    {/* Hero Grid */}

    <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-6">

      {/* ================= LEFT ================= */}

      <div className="order-2 lg:order-1 text-center lg:text-left">

        <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-xs md:text-sm font-semibold text-pink-700">

          <HeartPulse className="h-4 w-4" />

          Complete Child Health Checkups

        </span>

        <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-extrabold text-gray-900 md:text-6xl lg:text-7xl">

          Healthy Children

          <span className="mt-2 block text-pink-600">

            Begin With

            <br />

            Regular Checkups

          </span>

        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg lg:mx-0">

          Regular child health checkups help monitor growth,
          development and overall well-being, ensuring your child
          receives the right care at every important stage.

        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start">

          <div className="flex items-center gap-2">

            <CircleCheckBig className="h-5 w-5 text-pink-600" />

            <span className="text-sm font-medium text-gray-700">
              Growth Monitoring
            </span>

          </div>

          <div className="flex items-center gap-2">

            <CircleCheckBig className="h-5 w-5 text-pink-600" />

            <span className="text-sm font-medium text-gray-700">
              Development Tracking
            </span>

          </div>

          <div className="flex items-center gap-2">

            <CircleCheckBig className="h-5 w-5 text-pink-600" />

            <span className="text-sm font-medium text-gray-700">
              Pediatric Guidance
            </span>

          </div>

        </div>

      </div>

            {/* ================= RIGHT ================= */}

      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

        <div className="relative w-full flex justify-center lg:justify-end">

          {/* Soft Background */}

          <div className="absolute hidden lg:block right-6 top-1/2 -translate-y-1/2">

            <div className="h-[540px] w-[540px] rounded-[40px] bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 rotate-6 shadow-[0_30px_80px_rgba(236,72,153,0.10)]"></div>

          </div>

          {/* Mobile Background */}

          <div className="absolute inset-0 flex items-center justify-center lg:hidden">

            <div className="h-[280px] w-[280px] rounded-[35px] bg-gradient-to-br from-pink-100 to-rose-50"></div>

          </div>

          {/* Main Image */}

          <div className="relative z-10">

            <div
              className="
                overflow-hidden
                rounded-[32px]
                md:rounded-[40px]
                lg:rounded-[42px]
                border-8
                border-white
                bg-white
                shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                lg:hover:-translate-y-2
                transition-all
                duration-500
              "
            >

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783589749/4e664d00863584c432c0ab22d5917e17_s1sxcy.jpg"
                alt="Child Health Checkup"
                width={900}
                height={900}
                priority
                className="
                  block
                  w-[340px]
                  md:w-[480px]
                  lg:w-[610px]
                  xl:w-[660px]
                  h-auto
                  object-cover
                "
              />

            </div>

          </div>

          {/* Decorative Box */}

          <div className="hidden lg:block absolute -bottom-5 -left-6 h-28 w-28 rounded-[28px] bg-pink-100/70 backdrop-blur-sm"></div>

          <div className="hidden lg:block absolute -top-5 right-10 h-20 w-20 rounded-2xl border-2 border-pink-200 bg-white/80"></div>

          {/* Bottom Glow */}

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-14 w-56 md:w-80 bg-pink-200/25 blur-3xl"></div>

        </div>

      </div>

    </div>

  </div>

</section>



            {/* ================= ABOUT CHILD CHECKUP ================= */}

      <section className="py-8 md:py-10 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center gap-2 text-pink-600 font-semibold uppercase tracking-[3px] text-sm">

                <Sparkles className="w-4 h-4" />

                About Child Checkups

              </span>

              <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

                Healthy Growth Begins
                <span className="block text-pink-600">
                  With Regular Checkups
                </span>

              </h2>

              <p className="mt-5 text-gray-600 text-sm md:text-base leading-7">

                Regular child checkups help monitor your child's physical growth,
                overall development and general health. Routine visits also help
                identify concerns early, ensuring timely care and healthy progress.

              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

                  <HeartPulse className="h-6 w-6 text-pink-600" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Growth Tracking
                  </h3>

                  <p className="mt-1 text-gray-600 leading-7">

                    Regular monitoring of height, weight and overall physical growth.

                  </p>

                </div>

              </div>

              <div className="border-b border-pink-100"></div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

                  <Baby className="h-6 w-6 text-pink-600" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Development Assessment
                  </h3>

                  <p className="mt-1 text-gray-600 leading-7">

                    Evaluating milestones to ensure healthy physical and mental development.

                  </p>

                </div>

              </div>

              <div className="border-b border-pink-100"></div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

                  <Stethoscope className="h-6 w-6 text-pink-600" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    Early Detection
                  </h3>

                  <p className="mt-1 text-gray-600 leading-7">

                    Routine examinations help identify health concerns at an early stage.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHAT WE CHECK ================= */}
            {/* ================= WHAT WE CHECK ================= */}

      <section className="py-8 md:py-10 bg-gradient-to-b from-pink-50 to-white">

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

          <div className="text-center mb-8">

            <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
              What We Check
            </span>

            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">

              Comprehensive
              <span className="block text-pink-600">
                Child Health Assessment
              </span>

            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-7">

              Every checkup is designed to monitor your child's overall
              health, growth and development in a simple and comfortable way.

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">

            {checkupPoints.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex gap-4 pb-5 border-b border-pink-100"
                >

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

                    <Icon className="h-6 w-6 text-pink-600" />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-gray-900">

                      {item.title}

                    </h3>

                    <p className="mt-1 text-sm md:text-base text-gray-600 leading-6">

                      {item.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* ================= GROWTH MONITORING ================= */}
            {/* ================= GROWTH MONITORING ================= */}

      <section className="py-8 md:py-10 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT */}

            <div>

              <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
                Growth Monitoring
              </span>

              <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

                Monitoring Every
                <span className="block text-pink-600">
                  Stage Of Growth
                </span>

              </h2>

              <p className="mt-5 text-sm md:text-base text-gray-600 leading-7">

                Every visit focuses on your child's physical growth,
                developmental milestones and overall well-being to ensure
                healthy progress.

              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-4">

              <div className="flex items-start gap-3">

                <CircleCheckBig className="mt-1 h-5 w-5 text-pink-600 flex-shrink-0" />

                <p className="text-gray-700">
                  Physical Growth Assessment
                </p>

              </div>

              <div className="border-b border-pink-100"></div>

              <div className="flex items-start gap-3">

                <CircleCheckBig className="mt-1 h-5 w-5 text-pink-600 flex-shrink-0" />

                <p className="text-gray-700">
                  Developmental Milestones
                </p>

              </div>

              <div className="border-b border-pink-100"></div>

              <div className="flex items-start gap-3">

                <CircleCheckBig className="mt-1 h-5 w-5 text-pink-600 flex-shrink-0" />

                <p className="text-gray-700">
                  Healthy Nutrition Review
                </p>

              </div>

              <div className="border-b border-pink-100"></div>

              <div className="flex items-start gap-3">

                <CircleCheckBig className="mt-1 h-5 w-5 text-pink-600 flex-shrink-0" />

                <p className="text-gray-700">
                  Overall Health Monitoring
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHEN TO VISIT ================= */}

      <section className="py-8 md:py-10 bg-gradient-to-b from-pink-50 to-white">

        <div className="max-w-6xl mx-auto px-5 md:px-8">

          <div className="text-center mb-8">

            <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
              When To Visit
            </span>

            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">

              Child Checkup
              <span className="block text-pink-600">
                Schedule
              </span>

            </h2>

          </div>

          {/* Mobile Timeline */}

          <div className="relative md:hidden">

            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-pink-200"></div>

            {visitSchedule.map((item, index) => (

              <div key={index} className="relative flex mb-6">

                <div className="absolute left-4 top-2 h-4 w-4 rounded-full bg-pink-600 border-4 border-white shadow -translate-x-1/2"></div>

                <div className="ml-10">

                  <div className="flex items-center gap-2">

                    <CalendarDays className="w-5 h-5 text-pink-600" />

                    <h3 className="font-bold text-gray-900">
                      {item.age}
                    </h3>

                  </div>

                  <p className="mt-1 text-sm text-gray-600">
                    {item.detail}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Desktop */}

          <div className="hidden md:grid grid-cols-2 gap-8">

            {visitSchedule.map((item, index) => (

              <div
                key={index}
                className="border-l-4 border-pink-500 pl-5"
              >

                <div className="flex items-center gap-2">

                  <CalendarDays className="w-5 h-5 text-pink-600" />

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.age}
                  </h3>

                </div>

                <p className="mt-2 text-gray-600 leading-7">
                  {item.detail}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
            {/* ================= FAQ ================= */}

      <section className="py-8 md:py-10 bg-white">

        <div className="max-w-4xl mx-auto px-5 md:px-8">

          <div className="text-center mb-8">

            <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">

              Common Questions
              <span className="block text-pink-600">
                About Child Checkups
              </span>

            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-7 max-w-2xl mx-auto">

              Find quick answers to some of the most common questions
              parents ask about routine child health checkups.

            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <details
                key={index}
                className="group border-b border-pink-200 pb-4"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base md:text-lg font-semibold text-gray-900">

                  <span>{faq.question}</span>

                  <span className="text-xl text-pink-600 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-3 pr-6 text-sm md:text-base leading-7 text-gray-600">

                  {faq.answer}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>
          </div>
  );
}