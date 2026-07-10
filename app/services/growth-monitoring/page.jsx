"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Ruler,
  Weight,
  Baby,
  Activity,
  HeartPulse,
  Apple,
  ChevronDown,
} from "lucide-react";

export default function GrowthMonitoringPage() {
  return (
    <div className="min-h-screen bg-[#FFF9FC]">

      {/* =========================
          Hero Section
      ========================= */}
      <section className="relative overflow-hidden bg-[#FFF5FA] pt-32 pb-16 md:pt-40 md:pb-24">

        {/* Soft Background */}
        <div className="absolute inset-0">

          <div className="absolute -top-32 -left-28 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"></div>

          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl"></div>

          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">

            <Link
              href="/"
              className="transition hover:text-pink-500"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/services"
              className="transition hover:text-pink-500"
            >
              Services
            </Link>

            <ChevronRight size={15} />

            <span className="font-semibold text-pink-500">
              Growth Monitoring
            </span>

          </div>

          {/* Hero Grid */}
          <div className="mt-10 grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div>

              <span className="inline-flex items-center rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
                Mini Marvels Child Healthcare
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#223B70]">
                Growth
                <span className="block text-pink-500">
                  Monitoring
                </span>
              </h1>

              <p className="mt-6 text-[17px] leading-8 text-gray-600">
                Every child grows differently, but regular growth monitoring
                helps ensure that physical growth and overall development are
                progressing in a healthy direction. By tracking important
                measurements and developmental milestones, pediatricians can
                identify concerns early and provide timely guidance for healthy
                childhood development.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-gray-600">
                At Mini Marvels, we carefully monitor your child's height,
                weight, nutrition, body mass index, and developmental progress
                using internationally accepted growth standards. Our goal is to
                give every child the best possible start through preventive care
                and continuous monitoring.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">

                  <CheckCircle2
                    className="mt-1 text-pink-500 flex-shrink-0"
                    size={20}
                  />

                  <div>
                    <h3 className="font-semibold text-[#223B70]">
                      Height & Weight Tracking
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Regular measurements help ensure healthy physical growth
                      and identify any growth delays at an early stage.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">

                  <CheckCircle2
                    className="mt-1 text-sky-500 flex-shrink-0"
                    size={20}
                  />

                  <div>
                    <h3 className="font-semibold text-[#223B70]">
                      Development Assessment
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Physical, cognitive, social, and motor milestones are
                      reviewed according to your child's age.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">

                  <CheckCircle2
                    className="mt-1 text-yellow-500 flex-shrink-0"
                    size={20}
                  />

                  <div>
                    <h3 className="font-semibold text-[#223B70]">
                      Nutrition Guidance
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Expert dietary recommendations help support healthy
                      growth, stronger immunity, and better development.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">

                  <CheckCircle2
                    className="mt-1 text-pink-500 flex-shrink-0"
                    size={20}
                  />

                  <div>
                    <h3 className="font-semibold text-[#223B70]">
                      Regular Follow-up
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Continuous monitoring helps your child stay on a healthy
                      growth path with timely medical advice.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Hero Image */}
            <div className="order-last lg:order-none">

              <div className="overflow-hidden rounded-[30px] bg-white p-3 shadow-xl ring-1 ring-pink-100">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335974/875222c84eb5034561ac5dccb6697279_khu5lb.jpg"
                  alt="Growth Monitoring"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto rounded-[24px] object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          About Growth Monitoring
      ========================= */}

      <section className="py-16 md:py-24">

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              About Growth Monitoring
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              Supporting Healthy Growth
              <span className="block text-pink-500">
                At Every Stage
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Growth monitoring is one of the most important aspects of
              preventive pediatric healthcare. Regular assessments help doctors
              understand whether your child is growing according to
              age-appropriate standards while also identifying nutritional,
              developmental, or medical concerns before they become serious.
            </p>
                        <p className="mt-5 text-gray-600 leading-8">
              During every visit, our pediatric specialists carefully evaluate
              height, weight, body mass index (BMI), and developmental
              milestones using standardized growth charts. These measurements
              help us understand your child's growth pattern and ensure they are
              progressing steadily according to their age and individual needs.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Growth monitoring also provides parents with valuable insights
              into their child's nutritional health, physical development, and
              overall well-being. If any variation from the expected growth
              pattern is identified, early intervention and personalized
              guidance can be provided to support healthy development.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              At Mini Marvels, we believe that regular growth monitoring is
              more than just recording measurements. It is an opportunity to
              understand your child's unique growth journey, answer parents'
              questions, encourage healthy lifestyle habits, and provide expert
              pediatric care that supports children from infancy through
              adolescence.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          What We Monitor
      ========================= */}

      <section className="py-16 md:py-24 bg-[#FFF5FA]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
              Comprehensive Growth Assessment
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              What We Monitor
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Our pediatric team evaluates every important aspect of your
              child's physical growth and development through detailed,
              age-appropriate assessments that help ensure healthy progress
              throughout childhood.
            </p>

          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {/* Height */}
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                <Ruler className="text-pink-500" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Height Tracking
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Regular height measurements help assess healthy bone growth,
                  physical development, and long-term growth patterns according
                  to standardized pediatric growth charts.
                </p>

              </div>

            </div>

            {/* Weight */}
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                <Weight className="text-sky-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Weight Assessment
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Healthy weight gain reflects proper nutrition and overall
                  well-being, allowing doctors to identify nutritional concerns
                  at an early stage.
                </p>

              </div>

            </div>            {/* Head Circumference */}
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                <Baby className="text-yellow-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Head Circumference
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  During infancy, measuring head circumference helps monitor
                  healthy brain growth and neurological development while
                  identifying any abnormalities that may require further
                  evaluation.
                </p>

              </div>

            </div>

            {/* BMI Evaluation */}
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                <Activity className="text-pink-500" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  BMI Evaluation
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Body Mass Index (BMI) helps determine whether your child's
                  weight is appropriate for their height and age, supporting
                  better nutritional planning and long-term health.
                </p>

              </div>

            </div>

            {/* Development */}
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                <HeartPulse className="text-sky-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Developmental Milestones
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  We evaluate motor skills, communication, learning ability,
                  social interaction, and emotional development to ensure your
                  child is achieving age-appropriate milestones.
                </p>

              </div>

            </div>

            {/* Nutrition */}
            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                <Apple className="text-yellow-600" size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-[#223B70]">
                  Nutrition Assessment
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  A balanced diet plays a vital role in healthy growth. We
                  assess nutritional status and provide practical dietary
                  guidance to support strong bones, immunity, and overall
                  development.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          Benefits Section
      ========================= */}

      <section className="py-16 md:py-24">

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Benefits of Regular Monitoring
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              Why Regular Growth Monitoring Matters
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Regular growth monitoring allows pediatricians to track your
              child's progress over time, detect health concerns early, and
              provide personalized recommendations that promote healthy
              physical, nutritional, and developmental growth.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Consistent follow-up visits also help parents understand their
              child's growth pattern, encourage healthy lifestyle habits, and
              ensure every child receives timely medical care whenever needed.
            </p>

          </div>

          <div className="mt-12 space-y-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 flex-shrink-0">
                <CheckCircle2 className="text-pink-500" size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#223B70]">
                  Early Identification of Growth Concerns
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Regular monitoring helps identify growth delays, nutritional
                  deficiencies, and developmental concerns before they become
                  serious. Early detection allows timely medical care and
                  better long-term health outcomes.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 flex-shrink-0">
                <CheckCircle2 className="text-sky-600" size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#223B70]">
                  Personalized Pediatric Guidance
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Every child grows differently. Our pediatricians provide
                  individualized guidance based on growth charts, nutritional
                  requirements, lifestyle, and developmental progress to help
                  children reach their full potential.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 flex-shrink-0">
                <CheckCircle2 className="text-yellow-600" size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#223B70]">
                  Better Nutritional Planning
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Growth assessments help determine whether your child's
                  nutritional intake is appropriate for their age, supporting
                  healthy bones, muscles, immunity, and overall development.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 flex-shrink-0">
                <CheckCircle2 className="text-pink-500" size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#223B70]">
                  Continuous Development Tracking
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Consistent follow-up visits allow us to monitor your child's
                  growth journey over time, ensuring healthy progress through
                  every stage of infancy, childhood, and adolescence.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FAQ Section
      ========================= */}

      <section className="py-16 md:py-24 bg-[#FFF5FA]">

        <div className="max-w-4xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#223B70]">
              Common Questions About Growth Monitoring
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Find answers to some of the most common questions parents ask
              about growth monitoring, routine pediatric assessments, and
              healthy childhood development.
            </p>

          </div>

          <div className="mt-12 space-y-5">            {/* FAQ 1 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                How often should my child's growth be monitored?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                Infants generally require more frequent growth assessments
                during their first year of life. Older children should continue
                regular growth monitoring during routine pediatric check-ups to
                ensure healthy physical and developmental progress.
              </p>

            </details>

            {/* FAQ 2 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                What is a growth chart?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                A growth chart is a standardized tool used by pediatricians to
                compare your child's height, weight, and BMI with children of
                the same age and gender. It helps evaluate whether growth is
                progressing within the expected range.
              </p>

            </details>

            {/* FAQ 3 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                Does every child grow at the same rate?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                No. Every child grows at their own pace. Factors such as
                genetics, nutrition, overall health, and physical activity all
                influence growth. Regular monitoring helps ensure your child's
                development remains healthy for their individual growth pattern.
              </p>

            </details>

            {/* FAQ 4 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                Why is BMI important during childhood?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                Body Mass Index (BMI) helps determine whether your child's
                weight is appropriate for their height and age. It assists
                pediatricians in identifying potential concerns related to
                underweight, overweight, or obesity at an early stage.
              </p>

            </details>

            {/* FAQ 5 */}
            <details className="group rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#223B70]">

                When should I consult a pediatrician about my child's growth?

                <ChevronDown
                  size={20}
                  className="text-pink-500 transition-transform duration-300 group-open:rotate-180"
                />

              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                You should consult a pediatrician if your child experiences poor
                weight gain, unusually slow or rapid growth, delayed
                developmental milestones, feeding difficulties, or if you have
                any concerns regarding their overall growth and health.
              </p>

            </details>

          </div>

        </div>

      </section>  
        </div>
  );
}