"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CalendarDays,
  Clock3,
  ArrowLeft,
} from "lucide-react";
export default function HealthyNutritionPage() {
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
              Healthy Nutrition
            </span>
          </div>
          {/* Meta */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-pink-600" />
              <span>05 July 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-pink-600" />
              <span>4 min read</span>
            </div>
          </div>
          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Healthy Nutrition for Growing Kids
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-4xl">
            Proper nutrition during childhood is essential for healthy growth,
            brain development, strong immunity, and lifelong well-being. A
            balanced diet helps children stay active, supports learning, and
            provides the energy they need for everyday activities.
          </p>
        </div>
      </section>
      {/* Hero Image */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[260px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783936989/979797_vtiwtm.jpg"
              alt="Healthy Nutrition for Kids"
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
              Why Healthy Nutrition Matters
            </h2>
            <p className="text-gray-700 leading-8 mb-6">
              Good nutrition is the foundation of a child's healthy growth and
              development. The right combination of carbohydrates, proteins,
              healthy fats, vitamins, and minerals supports physical growth,
              strengthens bones and muscles, improves brain function, and helps
              build a strong immune system.
            </p>
            <p className="text-gray-700 leading-8 mb-8">
              Healthy eating habits developed during childhood often continue
              into adulthood. Encouraging nutritious meals from an early age
              can reduce the risk of obesity, diabetes, and other health
              problems later in life while helping children maintain an active
              and energetic lifestyle.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Benefits of a Balanced Diet
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Supports healthy physical growth and development.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Strengthens the immune system to fight infections.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Improves concentration, memory, and learning abilities.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Provides energy for play, school, and daily activities.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Helps maintain a healthy weight and overall well-being.
              </div>
            </div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-5">
              Foods to Include in Your Child's Daily Diet
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  🥛 Milk & Dairy Products
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Milk, curd, and cheese are excellent sources of calcium,
                  protein, and vitamin D that help build strong bones and
                  healthy teeth.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  🍎 Fruits & Vegetables
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Fresh fruits and colorful vegetables provide essential
                  vitamins, minerals, antioxidants, and fiber that strengthen
                  immunity and support healthy digestion.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  🍳 Protein-Rich Foods
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Eggs, pulses, beans, fish, chicken, soy products, and nuts
                  help build muscles, repair body tissues, and support healthy
                  growth.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  🌾 Whole Grains
                </h3>
                <p className="text-gray-700 leading-8 mt-3">
                  Whole wheat, oats, brown rice, and millets provide sustained
                  energy and are rich in fiber, helping children stay active
                  throughout the day.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-5">
              Healthy Eating Tips for Parents
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Offer a variety of colorful fruits and vegetables every day.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Encourage children to drink plenty of water instead of sugary beverages.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Limit processed foods, excessive sugar, and junk food.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Maintain regular meal timings and avoid skipping breakfast.
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5">
                ✔ Make healthy eating enjoyable by involving children in meal planning.
              </div>
            </div>
            {/* Doctor's Advice */}
            <div className="mt-12 rounded-3xl bg-pink-50 border border-pink-100 p-8">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">
                Doctor's Advice
              </h2>
              <p className="text-gray-700 leading-8">
                Every child has unique nutritional needs based on age, growth,
                and activity level. A balanced diet combined with regular
                physical activity and routine pediatric check-ups helps ensure
                healthy development. If your child has poor appetite, feeding
                difficulties, or concerns about weight gain, consult your
                pediatrician for personalized dietary guidance.
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
                  Discover why timely immunization is one of the best ways to
                  protect your child from preventable diseases.
                </p>
              </Link>
              <Link
                href="/blogs/growth-development"
                className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Growth & Development Milestones
                </h3>
                <p className="text-gray-600 mt-3">
                  Learn about important milestones that help you monitor your
                  child's healthy physical and developmental progress.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}