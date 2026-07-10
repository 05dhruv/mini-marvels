"use client";

import { useEffect, useState } from "react";
import { X, CalendarDays, Phone } from "lucide-react";
import Link from "next/link";

export default function AppointmentPopup() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    const isMobile = window.innerWidth < 640;
    setOpen(true);
  }, window.innerWidth < 640 ? 6000 : 7500);

  return () => clearTimeout(timer);
}, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40">

      {/* BACKDROP CLICK */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0"
      />

      {/* POPUP BOX */}
      <div
        className="
          relative bg-white w-full sm:w-[420px]
          rounded-t-3xl sm:rounded-3xl
          shadow-2xl p-6
          animate-in fade-in zoom-in-95
        "
      >

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-slate-500 hover:text-black"
        >
          <X />
        </button>

        {/* Icon */}
        <div className="flex items-center gap-2 text-pink-500">
          <CalendarDays />
          <span className="font-semibold text-sm">Appointment Alert</span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-xl font-bold text-slate-900">
          Book Your Child’s Appointment
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Quick consultation slots available today. Secure your visit now.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3">

          <Link
            href="/appointment"
            className="bg-pink-500 text-white text-center py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Book Appointment
          </Link>

          <a
            href="tel:+919716383830"
            className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>

        </div>

        {/* Footer note */}
        <p className="mt-4 text-[11px] text-slate-400 text-center">
          Pediatric consultation • Limited slots available
        </p>

      </div>
    </div>
  );
}