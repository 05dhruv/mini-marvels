"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AppointmentPage() {
  return (
    <main className="bg-[#fffafc] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-sky-50">

        {/* Decorative Blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mt-10 mb-6">
                <CalendarDays className="w-4 h-4" />
                Book Your Child's Visit
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">
                Schedule an
                <span className="text-pink-600"> Appointment </span>
                with Mini Marvels
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
                Your child's health deserves timely and compassionate care.
                Book an appointment with our experienced pediatrician in just
                a few simple steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="#appointment-form"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-4 text-white font-semibold hover:bg-pink-700 transition"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-7 py-4 font-semibold text-slate-700 hover:border-pink-400 transition"
                >
                  <Phone className="w-5 h-5" />
                  Call Clinic
                </Link>

              </div>

              {/* Highlights */}

              <div className="mt-10 grid sm:grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white shadow-lg border border-pink-100 p-5">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Clock3 className="text-pink-600 w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        Quick Booking
                      </h3>
                      <p className="text-sm text-slate-500">
                        Takes less than a minute.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-white shadow-lg border border-sky-100 p-5">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      <CheckCircle2 className="text-sky-600 w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        Trusted Care
                      </h3>
                      <p className="text-sm text-slate-500">
                        Friendly pediatric consultation.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">

                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783334476/60e813dad251b6a41a814438fc1ea03e_xbfxbc.jpg"
                  alt="Mini Marvels Appointment"
                  width={700}
                  height={700}
                  className="w-full h-[520px] object-cover"
                  priority
                />

              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-3xl shadow-xl p-6 border border-pink-100">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-pink-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800">
                      Visit Our Clinic
                    </h4>

                    <p className="text-slate-500 text-sm">
                      Safe, child-friendly & comfortable environment.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= APPOINTMENT SECTION ================= */}

      <section
        id="appointment-form"
        className="py-20 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">

            <span className="inline-flex px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold text-sm">
              Book Appointment
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Request an Appointment
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-8">
              Fill out the form below and our clinic team will contact you
              shortly to confirm your appointment.
            </p>

          </div>

          <div className="grid lg:grid-cols-5 gap-10">

            {/* FORM */}

            <div className="lg:col-span-3 bg-white rounded-[32px] shadow-xl border border-pink-100 p-8 md:p-10">

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block mb-2 font-medium text-slate-700">
                      Parent Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter parent name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
                    />

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block mb-2 font-medium text-slate-700">
                      Child Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter child name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-slate-700">
                      Child Age
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. 2 Years"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
                    />

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block mb-2 font-medium text-slate-700">
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-slate-700">
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-pink-500"
                    />

                  </div>

                </div>

                <div>

                  <label className="block mb-2 font-medium text-slate-700">
                    Reason for Visit
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Describe symptoms or reason..."
                    className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none resize-none focus:border-pink-500"
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-pink-600 py-4 text-white font-semibold hover:bg-pink-700 transition"
                >
                  Request Appointment
                </button>

              </form>

            </div>

            {/* INFO CARD */}

            <div className="lg:col-span-2">

              <div className="sticky top-24 rounded-[32px] bg-white shadow-xl border border-pink-100 p-8">

                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Clinic Information
                </h3>

                <div className="space-y-7">

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-pink-600" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Call Us
                      </h4>

                      <p className="text-slate-500">
                        +91 XXXXX XXXXX
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      <Clock3 className="w-5 h-5 text-sky-600" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Clinic Hours
                      </h4>

                      <p className="text-slate-500">
                        Mon – Sat
                      </p>

                      <p className="text-slate-500">
                        10:00 AM – 7:00 PM
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Clinic Address
                      </h4>

                      <p className="text-slate-500 leading-7">
                        Mini Marvels Child Clinic
                        <br />
                        Your Complete Address Here
                      </p>
                    </div>

                  </div>

                </div>

                <div className="mt-10 rounded-2xl bg-pink-50 border border-pink-100 p-6">

                  <h4 className="font-semibold text-pink-700 mb-3">
                    Before Your Visit
                  </h4>

                  <ul className="space-y-3 text-slate-600 text-sm">

                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5" />
                      Bring previous medical records.
                    </li>

                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5" />
                      Carry vaccination card if available.
                    </li>

                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5" />
                      Arrive 10–15 minutes early.
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY BOOK WITH US ================= */}

      <section className="py-20 bg-[#fffafc]">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">

            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Why Choose Mini Marvels
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Comfortable Care for Every Child
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
              We focus on making every visit stress-free, comfortable and
              reassuring for both parents and children.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* Card 1 */}

            <div className="group rounded-3xl bg-white border border-pink-100 shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-pink-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Experienced Pediatric Care
              </h3>

              <p className="text-slate-600 leading-7">
                Dedicated consultation for newborns, infants, children and
                teenagers with personalized treatment plans.
              </p>

            </div>

            {/* Card 2 */}

            <div className="group rounded-3xl bg-white border border-sky-100 shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
                <CalendarDays className="w-8 h-8 text-sky-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Easy Appointment Booking
              </h3>

              <p className="text-slate-600 leading-7">
                Simple scheduling with flexible appointment timings for busy
                parents.
              </p>

            </div>

            {/* Card 3 */}

            <div className="group rounded-3xl bg-white border border-green-100 shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <Clock3 className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Minimal Waiting Time
              </h3>

              <p className="text-slate-600 leading-7">
                Efficient scheduling ensures your child spends less time
                waiting and more time receiving quality care.
              </p>

            </div>

            {/* Card 4 */}

            <div className="group rounded-3xl bg-white border border-purple-100 shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Friendly Support
              </h3>

              <p className="text-slate-600 leading-7">
                Our team is always ready to assist with appointments,
                follow-ups and general queries.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= APPOINTMENT PROCESS ================= */}

      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-sky-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">

            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              How It Works
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Booking is Easy
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                number: "01",
                title: "Fill the Form",
                desc: "Enter your child's details and preferred appointment schedule.",
              },
              {
                number: "02",
                title: "Confirmation Call",
                desc: "Our clinic team will contact you to confirm the appointment.",
              },
              {
                number: "03",
                title: "Visit the Clinic",
                desc: "Meet our pediatrician at your scheduled appointment time.",
              },
              {
                number: "04",
                title: "Healthy Smiles",
                desc: "Receive expert consultation and complete child healthcare guidance.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-8 shadow-lg border border-pink-100"
              >

                <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center">
                  {step.number}
                </div>

                <div className="pt-8">

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 leading-7">
                    {step.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= TESTIMONIALS ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">

            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Happy Parents
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              What Parents Say
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Parents trust Mini Marvels for compassionate pediatric care and a
              child-friendly experience.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                name: "Riya Sharma",
                review:
                  "The doctor was extremely patient and explained everything clearly. My child felt comfortable throughout the visit.",
              },
              {
                name: "Amit Verma",
                review:
                  "Booking was easy and the clinic staff were very supportive. Hardly any waiting time.",
              },
              {
                name: "Neha Gupta",
                review:
                  "Clean clinic, friendly environment and excellent pediatric care. Highly recommended.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border border-pink-100 bg-white shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
              >

                <div className="flex gap-1 text-yellow-400 text-xl mb-5">
                  ★★★★★
                </div>

                <p className="text-slate-600 leading-8 italic">
                  "{item.review}"
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      Parent
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              FAQs
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "How do I book an appointment?",
                a: "Fill out the appointment form or call the clinic directly. Our team will confirm your preferred time.",
              },
              {
                q: "Can I reschedule my appointment?",
                a: "Yes. Please contact the clinic as early as possible to reschedule your visit.",
              },
              {
                q: "What documents should I bring?",
                a: "Bring previous prescriptions, vaccination records and any medical reports related to your child.",
              },
              {
                q: "How early should I arrive?",
                a: "We recommend arriving 10–15 minutes before your appointment.",
              },
            ].map((faq, index) => (

              <div
                key={index}
                className="rounded-3xl border border-pink-100 bg-white shadow-md p-8"
              >

                <h3 className="font-bold text-xl text-slate-900">
                  {faq.q}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}