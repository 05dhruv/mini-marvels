"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white pt-8 pb-8 lg:pt-12 lg:pb-10"
    >
        
      {/* Decorative Elements */}

      <div className="absolute top-24 left-10 w-3 h-3 rounded-full bg-pink-300"></div>

      <div className="absolute bottom-20 right-20 w-5 h-5 rounded-full bg-yellow-300"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT IMAGE */}

          <div className="relative pb-14">

            {/* Pink Background Shape */}

            <div className="absolute -top-5 -left-5 w-full h-full rounded-[40px] bg-pink-100"></div>

            {/* Image */}

            <div className="relative overflow-hidden rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.12)]">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783257215/f4c3acb09564468178665fc0e4bcecd6_a9gax8.jpg"
                alt="Mini Marvels Clinic"
                width={700}
                height={820}
                className="w-full h-[500px] lg:h-[580px] object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-10 left-6 rounded-xl bg-white px-4 py-4 shadow-xl border border-pink-100">

              <p className="text-xs uppercase tracking-widest text-pink-500 font-semibold">

                Trusted Pediatric Care

              </p>

              <h4 className="mt-1 text-xl font-bold text-slate-900">

                Every Child Matters ❤️

              </h4>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="text-center lg:text-left">

            <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600 mx-auto lg:mx-0">

              ABOUT US

            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">

              We're Here For

              <span className="block text-pink-500">

                Every Little Smile.

              </span>

            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">

              At Mini Marvels Child Care Clinic, we combine compassionate
              pediatric expertise with a warm, family-friendly environment.
              Our mission is to help every child grow healthier, happier,
              and stronger through personalized medical care.
            </p>

            {/* Divider */}

            <div className="mt-8 h-px w-full bg-gradient-to-r from-pink-200 via-pink-100 to-transparent"></div>            {/* Premium Checklist */}

            <div className="mt-10 space-y-5">

              {[
                "Gentle & Compassionate Pediatric Care",
                "Child-Friendly & Comfortable Environment",
                "Preventive Healthcare & Vaccination",
                "Personalized Treatment For Every Child",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">

                    <CheckCircle2 size={18} />

                  </div>

                  <p className="text-[17px] leading-7 text-slate-700">

                    {item}

                  </p>

                </div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-5 text-center sm:text-left">

              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full bg-pink-500 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-pink-600 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Our Services

                <ArrowRight className="ml-2" size={18} />

              </Link>

</div>

            </div>

          </div>

        </div>

      {/* Decorative SVG */}

      <div className="absolute bottom-10 right-12 hidden xl:block opacity-30">

        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
        >
          <circle
            cx="45"
            cy="45"
            r="42"
            stroke="#EC4899"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          <circle
            cx="45"
            cy="45"
            r="5"
            fill="#EC4899"
          />
        </svg>

      </div>

    </section>
  );
}