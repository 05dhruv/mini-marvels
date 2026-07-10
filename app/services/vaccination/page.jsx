"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Syringe,
  CalendarDays,
  Baby,
  HeartPulse,
  ChevronRight,
  CircleCheckBig,
  Shield,
  Sparkles,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

const vaccinationSchedule = [
  { age: "Birth", vaccines: "BCG • OPV • Hepatitis B", side: "left" },
  { age: "6 Weeks", vaccines: "DTP • IPV • Hib • Rotavirus • PCV", side: "right" },
  { age: "10 Weeks", vaccines: "2nd Dose of Primary Vaccines", side: "left" },
  { age: "14 Weeks", vaccines: "Booster Protection", side: "right" },
  { age: "9–12 Months", vaccines: "MMR • Measles", side: "left" },
];

const diseases = [
  "Polio",
  "Measles",
  "Hepatitis B",
  "Diphtheria",
  "Tetanus",
  "Whooping Cough",
  "Pneumonia",
  "Meningitis",
];

const faqs = [
  {
    question: "Are vaccines safe?",
    answer:
      "Yes. All vaccines are tested thoroughly and administered according to recommended safety guidelines.",
  },
  {
    question: "Can fever occur after vaccination?",
    answer:
      "A mild fever or soreness is normal and usually settles within a day or two.",
  },
  {
    question: "What if a dose is missed?",
    answer:
      "Your pediatrician can create a catch-up vaccination schedule.",
  },
];

export default function VaccinationPage() {
  return (
          <div className="min-h-screen overflow-x-hidden bg-[#FFF9FC]">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden pt-28 md:pt-36 pb-8">

          {/* Background */}

          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50"></div>

          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>
          <div className="absolute top-16 right-0 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-100/40 blur-3xl"></div>

          {/* Decorative */}

          <div className="absolute top-36 right-10 hidden lg:block">

            <Sparkles className="w-7 h-7 text-pink-300" />

          </div>

          <div className="absolute bottom-20 left-12 hidden lg:block">

            <Shield className="w-7 h-7 text-pink-200" />

          </div>

          <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

            {/* Breadcrumb */}

            <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500">

              <Link href="/" className="hover:text-pink-600 transition">
                Home
              </Link>

              <ChevronRight className="mx-2 w-4 h-4" />

              <Link
                href="/services"
                className="hover:text-pink-600 transition"
              >
                Services
              </Link>

              <ChevronRight className="mx-2 w-4 h-4" />

              <span className="font-semibold text-pink-600">
                Vaccination
              </span>

            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}

              <div className="order-2 lg:order-1 text-center lg:text-left">

                <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-xs md:text-sm font-semibold text-pink-700">

                  <ShieldCheck className="w-4 h-4" />

                  Safe Child Immunization

                </span>

                <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

                  Protect Your Child With

                  <span className="block text-pink-600">
                    Timely Vaccination
                  </span>

                </h1>

                <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-7 text-gray-600 lg:mx-0">

                  Give your child the best start with safe, timely and
                  recommended vaccinations that build lifelong immunity
                  and protect against serious childhood diseases.

                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

                  <Link
                    href="/appointment"
                    className="rounded-full bg-pink-600 px-7 py-3 font-semibold text-white transition hover:bg-pink-700"
                  >
                    Book Appointment
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-pink-300 px-7 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
                  >
                    Contact Us
                  </Link>

                </div>

                <div className="mt-7 flex flex-wrap justify-center gap-5 lg:justify-start">

                  <div className="flex items-center gap-2">

                    <CheckCircle2 className="h-5 w-5 text-pink-600" />

                    <span className="text-sm text-gray-700">
                      WHO Recommended
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <CheckCircle2 className="h-5 w-5 text-pink-600" />

                    <span className="text-sm text-gray-700">
                      Safe & Hygienic
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <CheckCircle2 className="h-5 w-5 text-pink-600" />

                    <span className="text-sm text-gray-700">
                      Pediatric Experts
                    </span>

                  </div>

                </div>

              </div>
{/* RIGHT */}

<div className="order-1 lg:order-2 flex justify-center">

  <div className="relative w-full max-w-[560px] md:max-w-[620px] lg:max-w-[680px]">

    {/* Background Glow */}

    <div className="absolute inset-0 flex items-center justify-center">

<div
  className="
    h-[240px]
    w-[240px]
    md:h-[500px]
    md:w-[500px]
    lg:h-[560px]
    lg:w-[560px]
    rounded-[45%]
    bg-gradient-to-br
    from-pink-200
    via-pink-100
    to-rose-100
    rotate-6
    blur-[1px]
    opacity-50
  "
></div>

    </div>


    {/* Soft Outer Ring */}

    <div
      className="
        absolute
        inset-8
        rounded-[50px]
        md:rounded-[80px]
        border
        border-pink-200/50
      "
    ></div>

{/* Image */}

<div className="relative z-10 flex justify-center items-center">

  <div className="overflow-hidden rounded-[50px] md:rounded-[80px]">

    <Image
      src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1782922469/IMG_20260701_213817.jpg_nhrjov.jpg"
      alt="Child Vaccination"
      width={800}
      height={800}
      priority
      className="
        w-full
        max-w-[420px]
        md:max-w-[520px]
        lg:max-w-[600px]
        h-auto
        object-contain
        rounded-[50px]
        md:rounded-[80px]
        drop-shadow-[0_30px_60px_rgba(236,72,153,0.25)]
      "
    />

  </div>

</div>


    {/* Bottom Glow */}

    <div
      className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        h-28
        w-80
        bg-pink-300/40
        blur-3xl
      "
    ></div>


  </div>

</div>

            </div>

          </div>

        </section>

        {/* ================= ABOUT ================= */}
                <section className="py-8 md:py-10 bg-white">

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* LEFT */}

              <div>

                <span className="inline-flex items-center gap-2 text-pink-600 font-semibold uppercase tracking-[3px] text-sm">

                  <Syringe className="w-4 h-4" />

                  About Vaccination

                </span>

                <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

                  Building Strong Immunity
                  <span className="block text-pink-600">
                    From The Beginning
                  </span>

                </h2>

                <p className="mt-5 text-gray-600 text-base md:text-lg leading-7">

                  Vaccination helps your child's immune system recognize
                  harmful viruses and bacteria before they cause serious
                  illness. Timely immunization protects your child during
                  every stage of growth while supporting a healthier future.

                </p>

              </div>

              {/* RIGHT */}

              <div className="space-y-5">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

                    <ShieldCheck className="h-6 w-6 text-pink-600" />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      Safe & Trusted
                    </h3>

                    <p className="mt-1 text-gray-600 leading-7">
                      Every vaccine is administered safely following
                      recommended pediatric immunization guidelines.
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
                      Healthy Childhood
                    </h3>

                    <p className="mt-1 text-gray-600 leading-7">
                      Timely vaccines reduce the risk of serious childhood
                      diseases and help children grow healthier.
                    </p>

                  </div>

                </div>

                <div className="border-b border-pink-100"></div>

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

                    <HeartPulse className="h-6 w-6 text-pink-600" />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      Long-Term Protection
                    </h3>

                    <p className="mt-1 text-gray-600 leading-7">
                      Vaccines build strong immunity and protect your child
                      from many preventable infections throughout childhood.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= WHY VACCINATION ================= */}
                <section className="py-8 md:py-10 bg-gradient-to-b from-pink-50 to-white">

          <div className="max-w-6xl mx-auto px-5 md:px-8">

            <div className="text-center mb-8">

              <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
                Why Vaccination
              </span>

              <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Why Every Vaccine
                <span className="block text-pink-600">
                  Matters
                </span>
              </h2>

              <p className="mt-3 max-w-2xl mx-auto text-gray-600 leading-7">
                Vaccines give children the protection they need to stay
                healthy and safe from preventable diseases.
              </p>

            </div>

            <div className="space-y-6">

              {/* Item 1 */}

              <div className="flex gap-5 items-start">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-white font-bold">

                  01

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Stronger Immunity
                  </h3>

                  <p className="mt-1 text-gray-600 leading-7">
                    Vaccines train your child's immune system to identify
                    and fight harmful infections effectively.
                  </p>

                </div>

              </div>

              <div className="ml-[58px] border-b border-pink-200"></div>

              {/* Item 2 */}

              <div className="flex gap-5 items-start">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-white font-bold">

                  02

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Disease Prevention
                  </h3>

                  <p className="mt-1 text-gray-600 leading-7">
                    Timely vaccination protects children against serious
                    illnesses that can affect their health and growth.
                  </p>

                </div>

              </div>

              <div className="ml-[58px] border-b border-pink-200"></div>

              {/* Item 3 */}

              <div className="flex gap-5 items-start">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-white font-bold">

                  03

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Healthy Growth
                  </h3>

                  <p className="mt-1 text-gray-600 leading-7">
                    Protection from preventable infections helps children
                    enjoy a healthier childhood.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

{/* ================= IMMUNIZATION SCHEDULE ================= */}

<section className="py-8 md:py-10 bg-white">

  <div className="max-w-6xl mx-auto px-5 md:px-8">

    <div className="text-center mb-8">

      <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
        Immunization Schedule
      </span>

      <h2 className="mt-3 text-2xl md:text-4xl font-bold text-gray-900">
        Vaccination
        <span className="block text-pink-600">
          Timeline
        </span>
      </h2>

      <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-7">
        A recommended vaccination plan that helps protect children
        during important stages of growth.
      </p>

    </div>


    {/* ================= MOBILE VIEW ================= */}

    <div className="relative md:hidden">

      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-pink-200"></div>

      {vaccinationSchedule.map((item, index) => (

        <div
          key={index}
          className="relative flex mb-6"
        >

          <div className="absolute left-4 top-2 h-4 w-4 rounded-full bg-pink-600 border-4 border-white shadow -translate-x-1/2 z-10"></div>


          <div className="ml-10">

            <div className="flex items-center gap-2">

              <CalendarDays className="w-5 h-5 text-pink-600" />

              <h3 className="text-lg font-bold text-gray-900">
                {item.age}
              </h3>

            </div>


            <p className="mt-1 text-sm text-gray-600 leading-6">
              {item.vaccines}
            </p>

          </div>

        </div>

      ))}

    </div>



    {/* ================= DESKTOP VIEW ================= */}

    <div className="hidden md:grid grid-cols-2 gap-x-16 gap-y-8">

      {vaccinationSchedule.map((item, index) => (

        <div
          key={index}
          className="flex gap-4 border-l-4 border-pink-500 pl-5"
        >

          <div>

            <div className="flex items-center gap-2">

              <CalendarDays className="w-5 h-5 text-pink-600" />

              <h3 className="text-xl font-bold text-gray-900">
                {item.age}
              </h3>

            </div>


            <p className="mt-2 text-gray-600 leading-7">
              {item.vaccines}
            </p>


            <p className="mt-2 text-sm text-gray-500 leading-6">
              Timely vaccination helps build immunity and provides
              protection against preventable childhood infections.
            </p>

          </div>

        </div>

      ))}

    </div>


  </div>

</section>

        {/* ================= BEFORE & AFTER CARE ================= */}
                <section className="py-8 md:py-10 bg-gradient-to-b from-pink-50 to-white">

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">

              {/* BEFORE VACCINATION */}

              <div>

                <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
                  Before Vaccination
                </span>

                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                  Prepare Your Child
                  <span className="block text-pink-600">
                    For The Visit
                  </span>
                </h2>

                <div className="mt-5 space-y-4">

                  <div className="flex gap-3">

                    <CircleCheckBig className="w-5 h-5 mt-1 text-pink-600 flex-shrink-0" />

                    <p className="text-gray-600 leading-7">
                      Carry your child's vaccination record for proper
                      tracking of previous and upcoming doses.
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <CircleCheckBig className="w-5 h-5 mt-1 text-pink-600 flex-shrink-0" />

                    <p className="text-gray-600 leading-7">
                      Inform the pediatrician about allergies, fever or
                      any ongoing health concerns.
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <CircleCheckBig className="w-5 h-5 mt-1 text-pink-600 flex-shrink-0" />

                    <p className="text-gray-600 leading-7">
                      Keep your child comfortable with suitable clothing.
                    </p>

                  </div>

                </div>

              </div>

              {/* AFTER VACCINATION */}

              <div>

                <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
                  After Vaccination
                </span>

                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                  Care After
                  <span className="block text-pink-600">
                    Immunization
                  </span>
                </h2>

                <div className="mt-5 space-y-4">

                  <div className="flex gap-3">

                    <CircleCheckBig className="w-5 h-5 mt-1 text-pink-600 flex-shrink-0" />

                    <p className="text-gray-600 leading-7">
                      Mild fever, redness or soreness after vaccination
                      is normal and usually temporary.
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <CircleCheckBig className="w-5 h-5 mt-1 text-pink-600 flex-shrink-0" />

                    <p className="text-gray-600 leading-7">
                      Keep your child hydrated and allow proper rest after
                      the vaccination.
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <CircleCheckBig className="w-5 h-5 mt-1 text-pink-600 flex-shrink-0" />

                    <p className="text-gray-600 leading-7">
                      Contact your pediatrician if you notice any unusual
                      or severe symptoms.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= DISEASES PREVENTED ================= */}
                <section className="py-8 md:py-10 bg-white">

          <div className="max-w-6xl mx-auto px-5 md:px-8">

            <div className="text-center mb-8">

              <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
                Diseases Prevented
              </span>

              <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Protection Against
                <span className="block text-pink-600">
                  Serious Diseases
                </span>
              </h2>

              <p className="mt-3 max-w-2xl mx-auto text-gray-600 leading-7">
                Vaccines help protect children from many preventable
                infections and support a healthier childhood.
              </p>

            </div>

<div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-5">

  {/* Mobile Center Line */}

  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-pink-200 -translate-x-1/2 lg:hidden"></div>


  {diseases.map((disease, index) => (

    <div
      key={index}
      className={`
        relative flex items-center gap-2
        px-3
        py-3
        border-b border-pink-100
        ${
          index % 2 === 0
            ? "border-r border-pink-200 pr-5"
            : "pl-5"
        }
        lg:border-r-0
        lg:px-0
      `}
    >

      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">

        <ShieldCheck className="h-4 w-4 text-pink-600" />

      </div>


      <span className="text-xs md:text-base font-medium text-gray-700">

        {disease}

      </span>


    </div>

  ))}

</div>

          </div>

        </section>

        {/* ================= MINI MARVELS CARE ================= */}

        <section className="py-8 md:py-10 bg-gradient-to-b from-pink-50 to-white">

          <div className="max-w-6xl mx-auto px-5 md:px-8">

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>

                <span className="text-pink-600 font-semibold uppercase tracking-[3px] text-sm">
                  Mini Marvels Care
                </span>

                <h2 className="mt-3 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">

                  Safe Vaccination With

                  <span className="block text-pink-600">
                    Expert Pediatric Care
                  </span>

                </h2>

              </div>

              <div>

                <p className="text-gray-600 leading-7">

                  At Mini Marvels, we focus on making every vaccination
                  experience safe, comfortable and stress-free for both
                  children and parents. Our pediatric team follows proper
                  vaccine handling practices and provides guidance for
                  every stage of your child's immunization journey.

                </p>

              </div>

            </div>

          </div>

        </section>

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
                  About Vaccination
                </span>
              </h2>

            </div>

            <div className="space-y-4">

              {faqs.map((faq, index) => (

                <details
                  key={index}
                  className="group border-b border-pink-200 pb-4"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base md:text-lg font-semibold text-gray-900">

                    <span>
                      {faq.question}
                    </span>

                    <span className="text-pink-600 text-xl transition group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <p className="mt-3 text-sm md:text-base leading-7 text-gray-600 pr-6">

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