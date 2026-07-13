"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Clock3, ArrowLeft } from "lucide-react";
export default function VaccinationGuidePage() {
  return (
    <main className="min-h-screen bg-[#EDF4F8] pt-28 md:pt-26">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500">
            <Link
              href="/"
              className="hover:text-pink-600 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link
              href="/blogs"
              className="hover:text-pink-600 transition-colors"
            >
              Blogs
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-pink-600 font-medium">
              Vaccination Guide
            </span>
          </div>
          {/* Meta */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-pink-600" />
              <span>10 July 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-pink-600" />
              <span>5 min read</span>
            </div>
          </div>
          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Vaccination Guide for Parents
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-4xl">
            Vaccinations are one of the safest and most effective ways to
            protect children from serious illnesses. Following the recommended
            immunization schedule helps build strong immunity and keeps your
            child healthy throughout every stage of growth.
          </p>
        </div>
      </section>
      {/* Hero Image */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[260px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783244825/IMG_20260701_213817.jpg_o3vvy9.jpg"
              alt="Vaccination Guide"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Article */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Why Are Vaccinations Important?
            </h2>
            <p className="text-gray-700 leading-8 mb-6">
              Vaccines help protect babies and children from many serious
              infectious diseases before they are exposed to them. They work by
              safely preparing the body's immune system to recognize and fight
              harmful viruses and bacteria. Routine childhood immunizations
              have dramatically reduced illnesses such as polio, measles,
              diphtheria, tetanus, hepatitis, and many other life-threatening
              infections.
            </p>
            <p className="text-gray-700 leading-8 mb-8">
              At Mini Marvels Child Care Clinic, we strongly recommend
              following the vaccination schedule advised by your pediatrician.
              Timely vaccination not only protects your own child but also
              helps protect other children in the community.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Benefits of Timely Vaccination
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-pink-50 p-5 border border-pink-100">
                ✔ Protects children from life-threatening diseases.
              </div>
              <div className="rounded-2xl bg-pink-50 p-5 border border-pink-100">
                ✔ Builds strong immunity from an early age.
              </div>
              <div className="rounded-2xl bg-pink-50 p-5 border border-pink-100">
                ✔ Reduces the spread of infectious diseases.
              </div>
              <div className="rounded-2xl bg-pink-50 p-5 border border-pink-100">
                ✔ Prevents complications that may affect long-term health.
              </div>
              <div className="rounded-2xl bg-pink-50 p-5 border border-pink-100">
                ✔ Keeps your child protected during school and daily activities.
              </div>
            </div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-5">
              When Should Your Child Be Vaccinated?
            </h2>
            <p className="text-gray-700 leading-8 mb-6">
              Childhood vaccinations are given according to a carefully planned
              immunization schedule. Each vaccine is recommended at a specific
              age so that your child's immune system develops protection at the
              right time. Missing or delaying vaccines may leave children
              vulnerable to preventable diseases.
            </p>
            <p className="text-gray-700 leading-8 mb-10">
              Always consult your pediatrician and keep your child's
              vaccination record updated. If you miss a scheduled dose, your
              doctor can recommend a catch-up vaccination plan.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Common Myths About Vaccines
            </h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-lg text-gray-900">
                  Myth: Vaccines are not necessary because diseases are rare.
                </h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Fact: Many diseases have become rare because of widespread
                  vaccination. If vaccination rates decrease, these diseases can
                  return and spread quickly.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-lg text-gray-900">
                  Myth: Too many vaccines can weaken a child's immune system.
                </h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Fact: Children's immune systems encounter thousands of germs
                  every day. Vaccines safely strengthen immunity without
                  overwhelming the body.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-lg text-gray-900">
                  Myth: Vaccines always cause serious side effects.
                </h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Fact: Most children experience only mild side effects such as
                  slight fever or soreness at the injection site. Serious
                  reactions are extremely rare.
                </p>
              </div>
            </div>
            {/* Doctor's Advice */}
            <div className="mt-12 rounded-3xl bg-pink-50 border border-pink-100 p-8">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">
                Doctor's Advice
              </h2>
              <p className="text-gray-700 leading-8">
                Vaccination is one of the most effective ways to safeguard your
                child's health. Keeping immunizations up to date helps prevent
                serious diseases and supports healthy growth. If you have any
                concerns regarding your child's vaccination schedule, consult
                your pediatrician for personalized guidance.
              </p>
            </div>
            {/* Back Button */}
            <div className="mt-12">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-white font-medium hover:bg-pink-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
            </div>
          </div>
          {/* Related Blogs */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blogs/growth-development"
                className="rounded-2xl bg-white shadow-sm border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Growth & Development Milestones
                </h3>
                <p className="text-gray-600 mt-3">
                  Learn how children grow physically, emotionally, and
                  developmentally during their early years.
                </p>
              </Link>
              <Link
                href="/blogs/healthy-nutrition"
                className="rounded-2xl bg-white shadow-sm border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Healthy Nutrition for Growing Kids
                </h3>
                <p className="text-gray-600 mt-3">
                  Discover healthy eating habits that support your child's
                  growth, immunity, and overall well-being.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}