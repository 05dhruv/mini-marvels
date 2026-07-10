"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#FFF9FC]">

      {/* Background Effects */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl"></div>

        <div className="absolute top-1/2 -right-32 h-[380px] w-[380px] rounded-full bg-cyan-200/30 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/3 h-[260px] w-[260px] rounded-full bg-pink-100 blur-3xl opacity-70"></div>

      </div>

      {/* ================= HERO SECTION ================= */}

      <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-flex rounded-full bg-pink-100 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-pink-600 shadow-sm">

              CONTACT US

            </span>

            <h1 className="mt-7 text-3xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900">

              Caring For Every

              <span className="block text-pink-500">

                Little Smile ❤️

              </span>

            </h1>

            <p className="mt-5 max-w-xl mx-auto text-base lg:text-lg leading-7 text-slate-600">

              Whether you need an appointment, vaccination guidance,
              newborn care support or general pediatric consultation,
              our team is always here to help.

            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">

              <a
                href="tel:+919716383830"
                className="inline-flex items-center rounded-full bg-pink-500 px-7 py-3.5 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-[0_20px_40px_rgba(236,72,153,.35)]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/919716383830"
                className="inline-flex items-center rounded-full border-2 border-pink-200 bg-white px-7 py-3.5 font-semibold text-slate-800 transition-all duration-300 hover:border-pink-500 hover:text-pink-500"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT INFO + FORM ================= */}

      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">          
            
              {/* ================= LEFT CARD ================= */}

            <div className="rounded-[32px] border border-pink-100 bg-white p-6 lg:p-8 shadow-[0_25px_70px_rgba(236,72,153,.12)]">

              <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
                CONTACT DETAILS
              </span>

              <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold text-slate-900">
                Let's Stay Connected
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                Have questions about your child's health? Contact us
                anytime during clinic hours. We're always happy to help.
              </p>

              <div className="mt-7 space-y-6">

                {/* Address */}

                <div className="group flex items-start gap-4 rounded-2xl border border-pink-100 bg-pink-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-500 text-white transition-all duration-300 group-hover:scale-110">

                    <MapPin size={24} />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-slate-900">
                      Clinic Address
                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">
                      Mini Marvels Child Care Clinic
                      <br />
                      Galshaheed, Moradabad,
                      Uttar Pradesh
                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="group flex items-start gap-4 rounded-2xl border border-pink-100 bg-pink-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-500 text-white transition-all duration-300 group-hover:scale-110">

                    <Phone size={24} />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-slate-900">
                      Phone Number
                    </h3>

                    <a
                      href="tel:+919716383830"
                      className="mt-2 block text-xl font-bold text-pink-500 hover:text-pink-600 transition"
                    >
                      +919716383830
                    </a>

                  </div>

                </div>

                {/* Email */}

                <div className="group flex items-start gap-4 rounded-2xl border border-pink-100 bg-pink-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-500 text-white transition-all duration-300 group-hover:scale-110">

                    <Mail size={24} />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-slate-900">
                      Email Address
                    </h3>

                    <a
                      href="mailto:ksana103@gmail.com"
                      className="mt-2 block text-pink-500 hover:text-pink-600 break-all"
                    >
                      ksana103@gmail.com
                    </a>

                  </div>

                </div>

                {/* Timings */}

                <div className="group flex items-start gap-4 rounded-2xl border border-pink-100 bg-pink-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-500 text-white transition-all duration-300 group-hover:scale-110">

                    <Clock size={24} />

                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-slate-900">
                      Working Hours
                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">
                      Monday – Saturday
                      <br />
                      09:00 AM – 07:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= RIGHT SIDE START ================= */}
                        {/* ================= CONTACT FORM ================= */}

            <div className="rounded-[32px] border border-pink-100 bg-white p-6 lg:p-8 shadow-[0_25px_70px_rgba(236,72,153,.12)]">

              <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
                SEND MESSAGE
              </span>

              <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold text-slate-900">
                Book a Consultation
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                Fill in your details and our team will contact you as
                soon as possible to schedule your appointment.
              </p>

              <form className="mt-7 space-y-6">

                <div className="grid sm:grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-14 rounded-2xl border border-pink-100 bg-pink-50/50 px-5 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 rounded-2xl border border-pink-100 bg-pink-50/50 px-5 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />

                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 w-full rounded-2xl border border-pink-100 bg-pink-50/50 px-5 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="h-14 w-full rounded-2xl border border-pink-100 bg-pink-50/50 px-5 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-pink-100 bg-pink-50/50 px-5 py-4 outline-none resize-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-[0_20px_40px_rgba(236,72,153,.30)]"
                >
                  <Send
                    size={20}
                    className="mr-2 transition-transform duration-300 group-hover:-rotate-12"
                  />

                  Send Message

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CLINIC LOCATION ================= */}
            <section className="relative pb-8">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* Heading */}

          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-flex rounded-full bg-pink-100 px-6 py-2 text-sm font-semibold text-pink-600">
              VISIT OUR CLINIC
            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold text-slate-900">
              We'd Love To
              <span className="block text-pink-500">
                Welcome You
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Visit Mini Marvels Child Care Clinic for expert pediatric
              consultations, vaccinations, newborn care and complete
              healthcare for your little one.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2 items-stretch">

            {/* Left Card */}

            <div className="rounded-[32px] border border-pink-100 bg-white p-6 shadow-[0_25px_70px_rgba(236,72,153,.12)]">

              <h3 className="text-3xl font-extrabold text-slate-900">
                Mini Marvels Clinic
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                We provide compassionate pediatric healthcare in a warm,
                child-friendly environment designed to make every visit
                comfortable for both parents and children.
              </p>

              <div className="mt-7 space-y-7">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                    <MapPin size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Address
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Mini Marvels Clinic
                      <br />
                      Moradabad, Uttar Pradesh
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                    <Phone size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Phone
                    </h4>

                    <a
                      href="tel:+919716383830"
                      className="mt-1 block font-semibold text-pink-500 hover:text-pink-600"
                    >
                      +919716383830
                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                    <Clock size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-slate-900">
                      Timings
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Monday – Saturday
                      <br />
                      09:00 AM – 07:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Google Map */}

            <div className="relative h-full">

              <div className="absolute -top-4 -left-5 h-full w-full rounded-[32px] bg-pink-100"></div>

              <div className="relative h-full overflow-hidden rounded-[32px] border border-pink-100 bg-white shadow-[0_25px_70px_rgba(236,72,153,.15)]">

                <iframe
                   src="https://www.google.com/maps?q=Moradabad,Uttar%20Pradesh&output=embed"
                   className="w-full h-full min-h-[420px]"
                   loading="lazy"
                   allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Floating Decorative Elements */}

      <div className="pointer-events-none absolute left-10 top-40 hidden xl:block">
        <div className="h-5 w-5 rounded-full bg-pink-300 animate-pulse"></div>
      </div>

      <div className="pointer-events-none absolute right-12 top-72 hidden xl:block">
        <div className="h-7 w-7 rounded-full bg-cyan-300 opacity-80"></div>
      </div>

      <div className="pointer-events-none absolute left-1/4 bottom-40 hidden xl:block text-5xl text-pink-300 opacity-60">
        ✦
      </div>

      <div className="pointer-events-none absolute right-1/4 bottom-28 hidden xl:block text-6xl opacity-20">
        ✨
      </div>

    </main>
  );
}