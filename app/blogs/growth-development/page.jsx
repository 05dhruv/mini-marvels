"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CalendarDays,
  Clock3,
  ArrowLeft,
} from "lucide-react";
export default function GrowthDevelopmentPage() {
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
            <span className="font-medium text-pink-600">
              Growth & Development
            </span>
          </div>
          {/* Meta */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-pink-600" />
              <span>08 July 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-pink-600" />
              <span>6 min read</span>
            </div>
          </div>
          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Growth & Development Milestones
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-4xl">
            Every child grows at their own pace, but understanding common
            developmental milestones helps parents monitor healthy physical,
            emotional, social, and cognitive development. Regular pediatric
            check-ups ensure your child is progressing confidently through each
            stage of childhood.
          </p>
        </div>
      </section>
      {/* Hero Image */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[260px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783939469/9393_taoqoa.jpg"
              alt="Growth and Development"
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
              Understanding Growth & Development
            </h2>
            <p className="text-gray-700 leading-8 mb-6">
              Growth refers to the physical changes in a child's body such as
              height, weight, and overall body development, while development
              includes learning new skills like speaking, walking, thinking,
              interacting, and understanding the world around them.
            </p>
            <p className="text-gray-700 leading-8 mb-8">
              Every child reaches milestones at a slightly different pace.
              Regular monitoring allows pediatricians to identify any delays
              early and provide the right guidance or intervention whenever
              necessary.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Why Growth Monitoring Is Important
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Tracks healthy physical growth and weight gain.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Helps detect nutritional deficiencies early.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Identifies developmental delays at the right time.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Supports healthy brain, emotional, and social development.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Gives parents confidence that their child is progressing
                normally.
              </div>
            </div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-5">
              Common Development Milestones
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  0 – 6 Months
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Babies begin responding to sounds, smiling, recognizing
                  familiar faces, lifting their heads, rolling over, and
                  developing stronger neck and muscle control.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  6 – 12 Months
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Most babies start sitting without support, crawling, standing
                  with assistance, saying simple words like "Mama" or "Dada,"
                  and showing curiosity about their surroundings.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  1 – 2 Years
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Toddlers usually begin walking independently, learning new
                  words every day, following simple instructions, recognizing
                  familiar objects, and becoming more socially interactive.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  2 – 5 Years
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Children improve language skills, problem-solving abilities,
                  balance, coordination, imagination, and confidence while
                  becoming more independent in daily activities.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-5">
              Tips for Parents
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Encourage active play and outdoor activities every day.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Read stories and talk to your child regularly to improve language development.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Provide a balanced diet rich in nutrients and hydration.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Ensure adequate sleep according to your child's age.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Visit your pediatrician regularly for growth monitoring.
              </div>
            </div>
            {/* Doctor Advice */}
            <div className="mt-12 rounded-3xl bg-pink-50 border border-pink-100 p-8">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">
                Doctor's Advice
              </h2>
              <p className="text-gray-700 leading-8">
                Every child develops at their own pace, so avoid unnecessary
                comparisons with others. Regular health check-ups and growth
                assessments help identify concerns early and ensure your child
                receives the right support for healthy physical and emotional
                development.
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
                href="/blogs/vaccination-guide"
                className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Vaccination Guide for Parents
                </h3>
                <p className="text-gray-600 mt-3">
                  Learn why timely immunization is essential for protecting
                  your child against serious diseases.
                </p>
              </Link>
              <Link
                href="/blogs/healthy-nutrition"
                className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition"
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