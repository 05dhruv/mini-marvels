import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Baby,
  Heart,
  ShieldCheck,
  Stethoscope,
  Clock,
  Syringe
} from "lucide-react";


export default function NewbornCarePage() {
  return (
    <main className="min-h-screen bg-[#fff7fb]">

      <Header />


      {/* Hero Section */}
      <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden flex items-center justify-center">

         <Image
    src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783579643/2424_bhgwrd.jpg"
    alt="Newborn Care"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
    quality={100}
  />

  <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center text-white px-5">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Newborn Care
          </h1>

          <p className="text-base md:text-xl max-w-2xl mx-auto">
            Gentle, expert and compassionate care for your newborn's healthy
            growth and development.
          </p>


          <div className="flex items-center justify-center gap-2 mt-5 text-sm">

            <Link href="/">
              Home
            </Link>

            <ChevronRight size={18} />

            <span>
              Newborn Care
            </span>

          </div>

        </div>

      </section>



      {/* Introduction Section */}
      <section className="py-14 md:py-20 px-5 md:px-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#d85c8a] mb-5">
              Specialised Newborn Care Services
            </h2>


            <p className="text-gray-600 leading-8">
              Every newborn needs special attention and gentle care. Our
              newborn care services provide complete support for babies from
              their first days of life.
            </p>


            <p className="text-gray-600 leading-8 mt-4">
              We focus on newborn health monitoring, early diagnosis,
              preventive care and guidance for parents.
            </p>


          </div>


          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex items-start gap-4 mb-6">

              <div className="bg-pink-100 p-3 rounded-full">
                <Baby className="text-pink-600"/>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Complete Baby Care
                </h3>

                <p className="text-gray-500 mt-1">
                  Supporting your baby's health journey with expert care.
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4 mb-6">

              <div className="bg-pink-100 p-3 rounded-full">
                <Stethoscope className="text-pink-600"/>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Pediatric Support
                </h3>

                <p className="text-gray-500 mt-1">
                  Professional guidance from experienced specialists.
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4">

              <div className="bg-pink-100 p-3 rounded-full">
                <ShieldCheck className="text-pink-600"/>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Safe Environment
                </h3>

                <p className="text-gray-500 mt-1">
                  Comfortable and hygienic care for newborns.
                </p>
              </div>

            </div>


          </div>


        </div>

      </section>
            {/* Newborn Services Section */}
      <section className="py-16 bg-white px-5 md:px-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Newborn Care Services
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We provide complete newborn healthcare services with personalised
              attention and expert medical support.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">


            {/* Card 1 */}
            <div className="bg-[#fff7fb] rounded-3xl p-8 shadow-md hover:shadow-xl transition">

              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5">

                <Baby className="text-pink-600" size={30}/>

              </div>


              <h3 className="text-xl font-semibold mb-3">
                Newborn Assessment
              </h3>


              <p className="text-gray-600 leading-7">
                Complete health evaluation of newborn babies including growth,
                development and early health monitoring.
              </p>

            </div>



            {/* Card 2 */}
            <div className="bg-[#fff7fb] rounded-3xl p-8 shadow-md hover:shadow-xl transition">

              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5">

                <Stethoscope className="text-pink-600" size={30}/>

              </div>


              <h3 className="text-xl font-semibold mb-3">
                Pediatric Consultation
              </h3>


              <p className="text-gray-600 leading-7">
                Expert consultation for newborn health concerns, infections,
                feeding problems and regular checkups.
              </p>

            </div>



            {/* Card 3 */}
            <div className="bg-[#fff7fb] rounded-3xl p-8 shadow-md hover:shadow-xl transition">

              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5">

                <Syringe className="text-pink-600" size={30}/>

              </div>


              <h3 className="text-xl font-semibold mb-3">
                Vaccination Support
              </h3>


              <p className="text-gray-600 leading-7">
                Timely vaccination guidance and complete support for your
                baby's preventive healthcare.
              </p>

            </div>


          </div>

        </div>

      </section>



      {/* Why Choose Section */}
      <section className="py-16 px-5 md:px-16 bg-[#fff7fb]">

        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#d85c8a]">
              Why Choose Our Newborn Care?
            </h2>
            <p className="text-gray-600 mt-3">
              Caring support for your little one's healthy beginning.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow">

              <Heart 
                className="mx-auto text-pink-600 mb-4"
                size={35}
              />

              <h3 className="font-semibold">
                Loving Care
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Gentle and compassionate support.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow">

              <ShieldCheck 
                className="mx-auto text-pink-600 mb-4"
                size={35}
              />

              <h3 className="font-semibold">
                Safe Treatment
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Safe and hygienic healthcare environment.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow">

              <Clock 
                className="mx-auto text-pink-600 mb-4"
                size={35}
              />

              <h3 className="font-semibold">
                Quick Support
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Timely assistance whenever required.
              </p>

            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow">

              <Stethoscope 
                className="mx-auto text-pink-600 mb-4"
                size={35}
              />
              <h3 className="font-semibold">
                Expert Doctors
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Experienced pediatric specialists.
              </p>

            </div>
          </div>
        </div>

      </section>
            {/* Parent Guidance Section */}
      <section className="py-16 px-5 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5">
              Guidance For New Parents
            </h2>

            <p className="text-gray-600 leading-8">
              Becoming a parent is a beautiful journey. We help parents
              understand newborn feeding, sleeping patterns, hygiene and
              overall baby care.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex gap-3 items-center">
                <Heart className="text-pink-600" size={22}/>
                <span className="text-gray-700">
                  Breastfeeding and nutrition guidance
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Heart className="text-pink-600" size={22}/>
                <span className="text-gray-700">
                  Newborn hygiene and daily care tips
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Heart className="text-pink-600" size={22}/>
                <span className="text-gray-700">
                  Growth and development monitoring
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-[#fff7fb] rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#d85c8a] mb-5">
              Book Newborn Consultation
            </h3>
            <p className="text-gray-600 leading-7 mb-6">
              Get professional guidance and care support for your newborn from
              our experienced healthcare team.
            </p>
            <Link
              href="/appointment"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
      {/* Appointment CTA Section */}
      <section className="py-16 px-5 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Give Your Baby The Best Start
        </h2>
        <p className="max-w-2xl mx-auto text-white/90 mb-8">
          Schedule a consultation with our newborn care specialists and ensure
          healthy growth for your little one.
        </p>
        <Link
          href="/appointment"
          className="bg-white text-pink-600 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Schedule Appointment
        </Link>
      </section>
      {/* Floating Buttons */}
      <FloatingButtons />
    </main>
  );
}