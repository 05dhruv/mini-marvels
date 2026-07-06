"use client";

import {
  Baby,
  Syringe,
  Stethoscope,
  Activity,
  HeartPulse,
  Apple,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useCallback, useEffect, useRef, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    icon: Baby,
    title: "Newborn Care",
    description:
      "Gentle newborn care, routine checkups and guidance for healthy early development.",
    color: "bg-pink-500",
    gradient: "from-pink-100 to-rose-50",
  },

  {
    icon: Syringe,
    title: "Vaccination",
    description:
      "Complete immunization schedules to protect your child from preventable diseases.",
    color: "bg-cyan-500",
    gradient: "from-cyan-100 to-sky-50",
  },

  {
    icon: Stethoscope,
    title: "General Checkups",
    description:
      "Routine consultations to monitor your child's health and overall wellbeing.",
    color: "bg-yellow-500",
    gradient: "from-yellow-100 to-orange-50",
  },

  {
    icon: Activity,
    title: "Growth Monitoring",
    description:
      "Track height, weight and developmental milestones at every stage.",
    color: "bg-violet-500",
    gradient: "from-violet-100 to-fuchsia-50",
  },

  {
    icon: HeartPulse,
    title: "Emergency Care",
    description:
      "Fast consultation for fever, infections and urgent pediatric conditions.",
    color: "bg-emerald-500",
    gradient: "from-emerald-100 to-green-50",
  },

  {
    icon: Apple,
    title: "Nutrition Advice",
    description:
      "Personalized nutritional guidance for healthy growth and immunity.",
    color: "bg-orange-500",
    gradient: "from-orange-100 to-amber-50",
  },
];

export default function ServicesSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 2800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    dragFree: false,
    skipSnaps: false,
    watchDrag: true,
  },
  [autoplay.current]
);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();
  }, [emblaApi]);

  return (
    <section
      id="services"
        className="relative overflow-hidden bg-[#FFF9FC] py-12 lg:py-16"
    >
      {/* Background */}

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">

            OUR SERVICES

          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">

            Comprehensive Care

            <span className="block text-pink-500">

              For Every Little Smile

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Compassionate pediatric healthcare with modern treatments,
            preventive care and personalized attention for every child.

          </p>

        </div>

        {/* Carousel */}

<div
  className="embla mt-16 overflow-hidden"
  ref={emblaRef}
  style={{ touchAction: "pan-y" }}
>
          <div
  className="flex"
  style={{ touchAction: "pan-y" }}
>

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                   className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.333%] px-2 md:px-4"
                >

                  <div
                    className={`group relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${service.gradient} p-[1px] transition-all duration-500 hover:-translate-y-2`}
                  >

                    <div className="relative flex h-full min-h-[320px] flex-col rounded-[28px] bg-white/90 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 group-hover:shadow-[0_30px_70px_rgba(236,72,153,.20)]">


                      {/* Icon */}

                      <div
  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-105`}
>
  <Icon size={28} />
</div>

                      {/* Title */}

                      <h3 className="relative mt-6 text-xl font-bold text-slate-900">

                        {service.title}

                      </h3>

                      {/* Description */}

                      <p className="relative mt-4 text-sm leading-6 text-slate-600">

                        {service.description}

                      </p>

                      {/* Divider */}

                      <div className="my-5 h-px bg-gradient-to-r from-pink-200 via-pink-100 to-transparent"></div>

                      {/* Button */}

                      <button className="mt-auto inline-flex items-center font-semibold text-pink-600 transition-all duration-300 group-hover:translate-x-2">

                        Learn More

                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>        {/* Navigation */}

        <div className="mt-10 flex items-center justify-center gap-4">

          <button
            onClick={scrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">

            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  selectedIndex === index
                    ? "w-8 h-3 bg-pink-500"
                    : "w-3 h-3 bg-pink-200 hover:bg-pink-300"
                }`}
              />
            ))}

          </div>

          <button
            onClick={scrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* CTA */}


      </div>

      {/* Decorations */}

      <div className="absolute top-24 left-12 hidden xl:block h-4 w-4 rounded-full bg-pink-300 animate-pulse"></div>

      <div className="absolute bottom-24 right-16 hidden xl:block h-6 w-6 rounded-full bg-yellow-300"></div>

      <div className="absolute top-1/2 right-10 hidden xl:block text-5xl opacity-30">

        ✨

      </div>

    </section>
  );
}