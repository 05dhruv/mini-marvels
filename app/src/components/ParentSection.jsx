"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const parentTips = [
  {
    title: "Newborn Baby Care",
    description:
      "Essential guidance for feeding, sleeping, hygiene and overall newborn wellbeing.",
  },
  {
    title: "Vaccination Schedule",
    description:
      "Stay updated with age-wise immunization plans to protect your child from preventable diseases.",
  },
  {
    title: "Healthy Nutrition",
    description:
      "Balanced diet recommendations to support healthy growth, immunity and development.",
  },
  {
    title: "Growth & Development",
    description:
      "Track milestones and understand your child's physical and mental development.",
  },
  {
    title: "Emergency Guidance",
    description:
      "Know when immediate medical attention is needed and how to respond calmly.",
  },
];

export default function ParentsSection() {
  return (
    <section
      id="parents"
      className="relative overflow-hidden bg-[#FFF9FC] py-10 lg:py-14"
    >
      {/* Background Blur */}


      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
            FOR PARENTS
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Helping Parents Raise
            <span className="text-pink-500">
              {" "}Healthy & Happy Children
            </span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-base lg:text-lg leading-7 text-slate-600">
            Practical parenting guidance, preventive healthcare tips and
            expert pediatric advice to support your child's healthy growth
            every step of the way.
          </p>

        </div>

        {/* Content */}

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-10 lg:gap-12">

          {/* Left Image */}

          <div className="relative flex justify-center lg:justify-start">

            {/* Background Shape */}

            <div className="absolute h-[420px] w-[420px] rounded-[45%] bg-gradient-to-br from-pink-200 via-pink-100 to-cyan-100 blur-xl opacity-90 lg:h-[470px] lg:w-[470px]"></div>

            <div className="absolute -left-6 top-8 h-20 w-20 rounded-full bg-pink-300/60 blur-md"></div>

            <div className="absolute right-2 bottom-10 h-28 w-28 rounded-full bg-cyan-200/60 blur-md"></div>

            {/* Glass Frame */}

            <div className="relative rounded-[36px] border border-white/70 bg-white/40 p-3 backdrop-blur-xl shadow-[0_30px_70px_rgba(236,72,153,.20)]">

              <div className="overflow-hidden rounded-[30px]">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783315639/e83ae0cd9ea6f0ad998296a13f497b54_sdzgde.jpg"
                  alt="Parents Guidance"
                  width={460}
                  height={620}
                  className="h-[390px] w-[310px] object-cover object-top transition duration-700 hover:scale-105 lg:h-[500px] lg:w-[390px]"
                />

              </div>

            </div>

          </div>

          {/* Right Side Starts Below */}          {/* Right Side */}

          <div>

            <div className="space-y-5">

              {parentTips.map((item, index) => (
                <div
                  key={index}
                  className="group border-b border-slate-200 pb-5 last:border-none last:pb-0 transition-all duration-300"
                >

                  <div className="flex items-start gap-4">

                    {/* Icon */}

                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:scale-110">

                      <CheckCircle2 size={20} />

                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <h3 className="text-lg lg:text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-pink-600">

                        {item.title}

                      </h3>

                      <p className="mt-2 text-[15px] leading-7 text-slate-600">

                        {item.description}

                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* CTA Button */}

            <div className="mt-8 flex justify-center lg:justify-start">

              <Link
                href="/contact"
                className="inline-flex w-full justify-center sm:w-auto items-center rounded-full bg-pink-500 px-7 py-3.5 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-[0_20px_40px_rgba(236,72,153,.30)]"
              >

                Explore Parent Resources

                <ArrowRight
                  size={18}
                  className="ml-2"
                />

              </Link>

            </div>

          </div>

        </div>

        {/* Decorative Elements */}

        <div className="absolute left-12 top-24 hidden xl:block">
          <div className="h-5 w-5 rounded-full bg-pink-300 animate-pulse"></div>
        </div>

        <div className="absolute right-16 top-36 hidden xl:block">
          <div className="h-6 w-6 rounded-full bg-cyan-300"></div>
        </div>

        <div className="absolute left-1/4 bottom-16 hidden xl:block text-5xl text-pink-300 opacity-60">
          ✦
        </div>

        <div className="absolute right-1/4 bottom-10 hidden xl:block text-6xl opacity-20">
          ✨
        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-pink-50 to-transparent pointer-events-none"></div>    </section>
  );
}