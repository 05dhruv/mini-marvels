"use client";

import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="hidden lg:block relative bg-white overflow-hidden py-8">


      <div className="relative max-w-6xl mx-auto px-5 py-10 lg:px-8 lg:py-10">

        {/* Header */}
        <div className="text-center">
          <span className="text-18 tracking-[0.2em] px-6 py-3 rounded-full bg-pink-100 text-pink-600 font-semibold">
            CONTACT US
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Let’s Connect with{" "}
            <span className="text-pink-500">Mini Marvels</span>
          </h1>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Fast response, caring support and easy appointment booking.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-stretch">

          {/* LEFT INFO */}
          <div className="space-y-5 h-full flex flex-col">

            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-500" />
                <p className="text-sm text-slate-700">
                  Mini Marvels Clinic, Meerut, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Phone className="text-pink-500" />
                <p className="text-sm text-slate-700">+91 98765 43210</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Mail className="text-pink-500" />
                <p className="text-sm text-slate-700">contact@minimarvels.com</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Clock className="text-pink-500" />
                <p className="text-sm text-slate-700">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT PREMIUM CTA PANEL */}
          <div className="relative h-full">

            <div className="rounded-3xl bg-gradient-to-br from-pink-500 via-pink-400 to-cyan-400 p-8 text-white shadow-xl h-full flex flex-col justify-center">

              <h2 className="text-2xl font-bold">
                Need Quick Help?
              </h2>

              <p className="mt-3 text-sm opacity-90">
                Connect instantly with our clinic team for appointments and child care support.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3">

                <Link
                  href="/appointment"
                  className="bg-white text-pink-600 font-semibold px-5 py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/919876543210"
                  className="bg-black/20 backdrop-blur-md border border-white/30 text-white font-semibold px-5 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-black/30 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Chat
                </a>

              </div>

              {/* Bottom highlight */}
              <div className="mt-6 text-xs opacity-80">
                ⚡ Fast response within working hours
              </div>

            </div>

            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 h-20 w-20 bg-white/30 blur-2xl rounded-full"></div>

          </div>

        </div>

      </div>
    </section>
  );
}