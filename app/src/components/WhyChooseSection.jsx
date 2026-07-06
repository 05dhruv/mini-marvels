"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Experienced Pediatrician",
    description:
      "Providing expert medical care with years of experience in child healthcare, ensuring every child receives the best possible treatment.",
  },
  {
    title: "Child-Friendly Environment",
    description:
      "A warm, welcoming, and stress-free clinic designed to make every child feel comfortable during every visit.",
  },
  {
    title: "Complete Vaccination Care",
    description:
      "Safe and timely immunization schedules to protect children from preventable diseases at every stage.",
  },
  {
    title: "Growth & Development Monitoring",
    description:
      "Regular health assessments to track physical growth, nutrition, and developmental milestones.",
  },
  {
    title: "Emergency Consultation",
    description:
      "Prompt pediatric consultations and compassionate support whenever your child needs urgent medical attention.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-12 lg:py-16"
    >
      {/* Background Blur */}

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="max-w-5xl mx-auto text-center">

<span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
  WHY CHOOSE US
</span>

<h2 className="mt-3 text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight text-slate-900">
  Trusted Care For <span className="text-pink-500">Every Little Smile</span>
</h2>

          <p className="mt-4 max-w-3xl mx-auto text-base lg:text-lg leading-8 text-slate-600">

            We combine compassionate pediatric care with modern medical
            expertise to ensure every child receives personalized attention,
            accurate diagnosis, and the highest standard of healthcare.

          </p>

        </div>

        {/* Content */}

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">

          {/* Left Side */}

          <div>

            {features.map((item, index) => (
              <div
                key={index}
                className="group py-4 border-b border-slate-200 last:border-none"
              >
                <div className="flex items-start gap-4">

                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">

                    <CheckCircle2 size={22} />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-pink-600">

                      {item.title}

                    </h3>

                    <p className="mt-2 text-[15px] leading-6 text-slate-600">

                      {item.description}

                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Right Side Image Part 2 */}         
          
           {/* Right Side */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Main Pink Blob */}

            <div className="absolute h-[500px] w-[500px] rounded-[45%] bg-gradient-to-br from-pink-200 via-pink-100 to-cyan-100 blur-xl opacity-90"></div>

            {/* Cyan Circle */}

            <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-cyan-200/70 blur-md"></div>

            {/* Pink Circle */}

            <div className="absolute -left-6 bottom-12 h-20 w-20 rounded-full bg-pink-300/70 blur-sm"></div>

            {/* Floating Ring */}

            <div className="absolute top-0 right-20 h-14 w-14 rounded-full border-[6px] border-pink-300/60"></div>

            {/* Plus Icon */}

            <div className="absolute left-8 top-10 text-3xl font-light text-pink-400">

              +

            </div>

            {/* Sparkle */}

            <div className="absolute right-12 bottom-8 text-4xl opacity-70">

              ✨

            </div>

            {/* Glass Card */}

            <div className="relative rounded-[38px] border border-white/60 bg-white/30 p-3 shadow-[0_35px_80px_rgba(236,72,153,.18)] backdrop-blur-xl">

              <div className="overflow-hidden rounded-[30px]">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg"
                  alt="Doctor"
                  width={560}
                  height={720}
                  priority
                  className="h-[460px] w-[360px] object-cover transition-transform duration-700 hover:scale-105 lg:h-[560px] lg:w-[430px]"
                />

              </div>

            </div>

            

          </div>

        </div>        {/* Decorative Elements */}

        <div className="absolute left-10 top-32 hidden xl:block h-4 w-4 rounded-full bg-pink-300 animate-pulse"></div>

        <div className="absolute right-16 top-24 hidden xl:block h-5 w-5 rounded-full bg-cyan-300"></div>

        <div className="absolute left-1/3 bottom-10 hidden xl:block text-4xl text-pink-300 opacity-70">

          ✦

        </div>

        <div className="absolute right-1/4 bottom-24 hidden xl:block text-5xl opacity-20">

          ✨

        </div>

      </div>
    </section>
  );
}