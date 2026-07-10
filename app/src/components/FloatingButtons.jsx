"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        sm:bottom-5
        sm:right-5
        md:bottom-6
        md:right-6
        z-[99999]
        flex
        flex-col
        gap-3
        sm:gap-4
      "
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Call Button */}
      <a
        href="tel:+919716383830"
        aria-label="Call Now"
        className="
          call-glow
          flex
          items-center
          justify-center
          w-13
          h-13
          sm:w-14
          sm:h-14
          md:w-16
          md:h-16
          rounded-full
          bg-pink-600
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        <Phone
          className="phone-ring"
          size={22}
          strokeWidth={2.5}
        />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919716383830"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          flex
          items-center
          justify-center
          w-13
          h-13
          sm:w-14
          sm:h-14
          md:w-16
          md:h-16
          rounded-full
          bg-green-500
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        <MessageCircle
          size={22}
          strokeWidth={2.5}
        />
      </a>
    </div>
  );
}