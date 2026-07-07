"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Moon,
  Syringe,
} from "lucide-react";

const resources = [
  {
    title: "Vaccination Guide",
    description:
      "Stay on track with your child's vaccination schedule for lifelong protection.",
    icon: Syringe,
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783244825/IMG_20260701_213817.jpg_o3vvy9.jpg",
  },
  {
    title: "Healthy Nutrition",
    description:
      "Simple nutrition tips to support your child's healthy growth and development.",
    icon: Heart,
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335957/s7_zvmwmv.jpg",
  },
  {
    title: "Better Sleep",
    description:
      "Healthy sleep routines that help babies and children grow stronger.",
    icon: Moon,
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783315639/e83ae0cd9ea6f0ad998296a13f497b54_sdzgde.jpg",
  },
  {
    title: "Common Illness",
    description:
      "Recognize common symptoms early and know when to visit your pediatrician.",
    icon: ShieldCheck,
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783336125/doctor-thermometer-and-parent-with-child-in-bedroom-for-healthcare-sick-and-fever-check-illness-temperature-and-influenza-symptoms-with-girl-in-family-home-for-disease-infection-and-pediatrician-photo_c0fj84.jpg",
  },
];

export default function PatientResources() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  return (
    <div className="bg-[#FFF9FC] min-h-screen">

{/* ================= HERO ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-24 md:py-36">

  {/* Decorative Blobs */}
  <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center">

    <span className="inline-block rounded-full bg-pink-100 text-pink-600 px-5 py-2 text-sm font-semibold">
      Mini Marvels Child Care Clinic
    </span>

    <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
      Patient Resources
    </h1>

    <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg leading-8">
      Explore trusted pediatric resources, parenting tips, vaccination guidance,
      nutrition advice and child wellness information to support your little
      one's healthy growth.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link
        href="/appointment"
        className="rounded-full bg-pink-600 px-7 py-3 text-white font-semibold hover:bg-pink-700 transition"
      >
        Book Appointment
      </Link>

      <Link
        href="/contact"
        className="rounded-full border-2 border-pink-600 px-7 py-3 text-pink-600 font-semibold hover:bg-pink-600 hover:text-white transition"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>

      {/* ================= RESOURCE CAROUSEL ================= */}
            <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <span className="inline-flex items-center rounded-full bg-pink-100 text-pink-600 px-4 py-2 text-sm font-semibold">
              Helpful Resources
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-800">
              Parenting Made Easier
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
              Trusted pediatric guidance to help parents make confident
              healthcare decisions for their little ones.
            </p>
          </div>

          {/* Embla Carousel */}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {resources.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-3"
                  >
                    <div className="group h-full overflow-hidden rounded-[28px] bg-white shadow-md hover:shadow-2xl transition-all duration-500">

                      {/* Image */}

                      <div className="relative h-60 overflow-hidden">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                      </div>

                      {/* Content */}

                      <div className="p-7">

                        <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">

                          <Icon
                            className="text-pink-600"
                            size={26}
                          />

                        </div>

                        <h3 className="text-2xl font-bold text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-slate-600 leading-7">
                          {item.description}
                        </p>

                        <button className="mt-6 inline-flex items-center gap-2 font-semibold text-pink-600 hover:gap-3 transition-all">

                          Learn More

                          <ArrowRight size={18} />

                        </button>

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>
            {/* ================= NEWBORN CARE ================= */}

      <section className="py-14 md:py-16 bg-[#FFF4F8]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}

            <div className="relative h-[320px] md:h-[500px] rounded-[30px] overflow-hidden shadow-xl">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335944/4e664d00863584c432c0ab22d5917e17_tzealo.jpg"
                alt="Newborn Care"
                fill
                sizes="(max-width:1024px) 100vw,50vw"
                className="object-cover"
              />

            </div>

            {/* Content */}

            <div>

              <span className="inline-flex rounded-full bg-pink-100 text-pink-600 px-4 py-2 text-sm font-semibold">
                Parent Education
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                Caring for Your
                <span className="text-pink-600"> Newborn</span>
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                The first few months are filled with exciting milestones.
                Learn simple ways to support feeding, sleeping, hygiene,
                vaccinations and healthy growth with guidance from our
                pediatric experts.
              </p>

              <div className="mt-8 grid gap-4">

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mt-2"></div>
                  <p className="text-slate-700">
                    Breastfeeding & feeding guidance
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mt-2"></div>
                  <p className="text-slate-700">
                    Safe sleeping recommendations
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mt-2"></div>
                  <p className="text-slate-700">
                    Growth & developmental milestones
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mt-2"></div>
                  <p className="text-slate-700">
                    Routine vaccination reminders
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-10">

            <span className="inline-flex rounded-full bg-pink-100 text-pink-600 px-4 py-2 text-sm font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-800">
              Parents Often Ask
            </h2>

          </div>

          <div className="space-y-5">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-slate-800">
                How often should my child visit the pediatrician?
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Regular wellness visits help monitor growth, development,
                nutrition and vaccinations from infancy through adolescence.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-slate-800">
                What should I do if my child has a fever?
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Keep your child hydrated, monitor the temperature and consult
                your pediatrician if the fever is high, persistent or
                accompanied by concerning symptoms.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg text-slate-800">
                Why are vaccinations important?
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Vaccinations protect children from serious illnesses while
                strengthening community immunity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 rounded-[32px] overflow-hidden">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="p-8 md:p-12 text-white">

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Every Little Smile
                  <br />
                  Matters
                </h2>

                <p className="mt-5 text-pink-50 leading-8">
                  Our team is committed to providing compassionate,
                  family-centered pediatric care for every stage of your
                  child's journey.
                </p>

                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 bg-white text-pink-600 px-7 py-3 rounded-full font-semibold mt-8 hover:bg-pink-50 transition"
                >
                  Book Appointment
                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="relative h-[320px] md:h-[420px]">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783408753/images_1_dj21ji.jpg"
                  alt="Happy Child"
                  fill
                  sizes="(max-width:1024px) 100vw,50vw"
                  className="object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}