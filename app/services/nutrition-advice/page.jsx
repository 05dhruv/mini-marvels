"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Apple,
  Milk,
  Salad,
  HeartPulse,
  ChevronDown,
} from "lucide-react";

export default function NutritionAdvicePage() {
  return (
    <div className="min-h-screen bg-[#FFF9FC]">

      {/* ========================= Hero Section ========================= */}

      <section className="relative overflow-hidden bg-[#FFF5FA] pt-32 pb-10 md:pt-40 md:pb-16">

        {/* Soft Background */}
        <div className="absolute inset-0">

          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"></div>

          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl"></div>

          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Breadcrumb */}

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">

            <Link
              href="/"
              className="hover:text-pink-500 transition"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/services"
              className="hover:text-pink-500 transition"
            >
              Services
            </Link>

            <ChevronRight size={15} />

            <span className="font-semibold text-pink-500">
              Nutrition Advice
            </span>

          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ================= Image (Mobile First) ================= */}

            <div className="order-1 lg:order-2">

              <div className="overflow-hidden rounded-[30px] bg-white p-3 shadow-xl ring-1 ring-pink-100">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783611939/2727_ji7fwv.jpg"
                  alt="Nutrition Advice"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto rounded-[24px] object-contain"
                />

              </div>

            </div>

            {/* ================= Text ================= */}

            <div className="order-2 lg:order-1">

              <span className="inline-flex items-center rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
                Mini Marvels Child Healthcare
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#223B70]">

                Nutrition
                <span className="block text-pink-500">
                  Advice
                </span>

              </h1>

              <p className="mt-6 text-[17px] leading-8 text-gray-600">
                Proper nutrition during childhood lays the foundation for
                healthy growth, brain development, stronger immunity, and
                lifelong well-being. Every stage of childhood has different
                nutritional requirements, making expert dietary guidance
                essential for healthy development.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-gray-600">
                At Mini Marvels, we provide personalized nutrition advice based
                on your child's age, growth pattern, eating habits, and health
                needs to ensure they receive the right nutrients for healthy
                physical and mental development.
              </p>

              <div className="mt-8 space-y-4">
                                <div className="flex items-start gap-3">

                  <CheckCircle2
                    className="mt-1 text-pink-500 flex-shrink-0"
                    size={20}
                  />

                  <div>

                    <h3 className="font-semibold text-[#223B70]">
                      Balanced Diet Planning
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Personalized meal recommendations according to your
                      child's age and nutritional needs.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    className="mt-1 text-sky-500 flex-shrink-0"
                    size={20}
                  />

                  <div>

                    <h3 className="font-semibold text-[#223B70]">
                      Healthy Growth Support
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Proper nutrition supports healthy height, weight,
                      stronger bones, and overall physical development.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    className="mt-1 text-yellow-500 flex-shrink-0"
                    size={20}
                  />

                  <div>

                    <h3 className="font-semibold text-[#223B70]">
                      Strong Immunity
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Essential vitamins and minerals help strengthen your
                      child's immune system and reduce illness.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    className="mt-1 text-pink-500 flex-shrink-0"
                    size={20}
                  />

                  <div>

                    <h3 className="font-semibold text-[#223B70]">
                      Expert Nutrition Guidance
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Practical advice for healthy eating habits from infancy
                      through adolescence.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================= About Nutrition Advice ========================= */}

      <section className="py-10 md:py-14">

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Healthy Eating for Growing Children
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              Why Nutrition Matters
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Good nutrition plays a vital role in every stage of childhood.
              A balanced diet provides the energy and nutrients children need
              for healthy growth, brain development, stronger immunity, and
              everyday physical activities. Healthy eating habits developed
              during childhood also contribute to lifelong wellness.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              At Mini Marvels, our pediatric specialists provide personalized
              nutrition advice based on your child's age, growth, lifestyle,
              and medical needs. We help parents make informed food choices
              that encourage healthy development while preventing nutritional
              deficiencies and unhealthy eating habits.
            </p>

          </div>

        </div>

      </section>

      {/* ========================= Nutrition Guidance ========================= */}

      <section className="py-10 md:py-14 bg-[#FFF5FA]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

<div className="max-w-3xl mx-auto text-center">

  <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
    Nutrition Guidance
  </span>

  <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
    What We Help With
  </h2>

  <p className="mt-5 text-gray-600 leading-8">
    Our nutrition guidance focuses on providing practical dietary
    recommendations that support healthy growth, improve eating
    habits, and ensure children receive the right nutrients at every
    stage of development.
  </p>

</div>

          <div className="mt-14 space-y-10">
                        {/* Breastfeeding & Infant Nutrition */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 flex-shrink-0">
                <Milk className="text-pink-500" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Breastfeeding & Infant Nutrition
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Proper nutrition begins from birth. We guide parents on
                  breastfeeding, formula feeding when required, and age-
                  appropriate nutritional practices that support healthy
                  growth during infancy.
                </p>

              </div>

            </div>

            {/* Balanced Diet */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 flex-shrink-0">
                <Apple className="text-yellow-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Balanced Diet Planning
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Every child requires the right balance of carbohydrates,
                  proteins, healthy fats, vitamins, and minerals. Our experts
                  help parents create practical meal plans suitable for each
                  stage of childhood.
                </p>

              </div>

            </div>

            {/* Healthy Eating */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 flex-shrink-0">
                <Salad className="text-green-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Healthy Eating Habits
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Developing healthy eating habits early encourages children
                  to enjoy nutritious foods, maintain a healthy weight, and
                  build lifelong dietary practices that support overall
                  well-being.
                </p>

              </div>

            </div>

            {/* Growth & Weight */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 flex-shrink-0">
                <HeartPulse className="text-sky-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Healthy Growth & Weight Management
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Regular nutritional assessments help maintain appropriate
                  height, weight, and body development while reducing the risk
                  of nutritional deficiencies or unhealthy weight gain.
                </p>

              </div>

            </div>

            {/* Vitamins */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 flex-shrink-0">
                <CheckCircle2 className="text-pink-500" size={26} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Vitamins & Essential Nutrients
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  We advise parents on important vitamins, minerals, calcium,
                  iron, and other nutrients required for stronger bones,
                  healthy immunity, and proper brain development.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================= Benefits Section ========================= */}

      <section className="py-10 md:py-14">

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Benefits of Healthy Nutrition
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              Building a Healthier Future
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Healthy nutrition supports every aspect of a child's growth,
              from stronger immunity and healthy bones to improved learning,
              better energy levels, and overall physical development.
            </p>

          </div>

          <div className="mt-12 space-y-6">
                        <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 flex-shrink-0">
                <CheckCircle2 className="text-pink-500" size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Supports Healthy Physical Growth
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  A balanced diet provides the nutrients needed for healthy
                  height, weight, muscle development, and stronger bones,
                  helping children grow confidently through every stage of
                  childhood.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 flex-shrink-0">
                <CheckCircle2 className="text-sky-600" size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Improves Immunity
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Proper nutrition strengthens the immune system, helping
                  children fight common infections while supporting faster
                  recovery and overall well-being.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 flex-shrink-0">
                <CheckCircle2 className="text-yellow-600" size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Better Brain Development
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Essential nutrients contribute to healthy brain development,
                  improved memory, concentration, and learning abilities during
                  the growing years.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 flex-shrink-0">
                <CheckCircle2 className="text-pink-500" size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Encourages Healthy Eating Habits
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Developing healthy food choices early helps children build
                  lifelong eating habits that reduce the risk of obesity and
                  nutrition-related health concerns.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 flex-shrink-0">
                <CheckCircle2 className="text-sky-600" size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Supports Overall Well-being
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Good nutrition improves energy levels, supports healthy
                  development, and helps children stay active, confident, and
                  ready for everyday learning and play.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================= FAQ Section ========================= */}

      <section className="py-10 md:py-14 bg-[#FFF5FA]">

        <div className="max-w-4xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              Common Questions
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Here are answers to some common questions parents ask about
              childhood nutrition and healthy eating habits.
            </p>

          </div>

          <div className="mt-12 space-y-5">
                        {/* FAQ 1 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                Why is good nutrition important during childhood?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                Proper nutrition provides the energy and essential nutrients
                children need for healthy growth, stronger immunity, brain
                development, and overall physical well-being.
              </p>

            </details>

            {/* FAQ 2 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                Does every child need vitamin supplements?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                Not always. Most children receive the nutrients they need from
                a balanced diet. Supplements should only be given if recommended
                by a pediatrician after assessing your child's nutritional
                needs.
              </p>

            </details>

            {/* FAQ 3 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                What foods help support healthy growth?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                A healthy diet should include fruits, vegetables, whole grains,
                dairy products, lean proteins, healthy fats, and plenty of
                water to support growth and overall development.
              </p>

            </details>

            {/* FAQ 4 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                When should I seek nutrition advice for my child?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                If your child has poor weight gain, selective eating habits,
                nutritional deficiencies, food allergies, digestive concerns,
                or any feeding difficulties, it is advisable to consult a
                pediatrician for personalized nutrition guidance.
              </p>

            </details>

          </div>

        </div>

      </section>
          </div>
  );
}