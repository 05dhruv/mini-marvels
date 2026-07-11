"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Baby,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function ParentsPage() {
  return (
    <main className="overflow-hidden bg-[#fffafc]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative bg-gradient-to-br from-pink-50 via-white to-sky-50">

       
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl" />


        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-12 lg:pt-44 lg:pb-16">
            
                      {/* Breadcrumb */}
<div className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
  <Link
    href="/"
    className="transition hover:text-pink-600"
  >
    Home
  </Link>

  <ChevronRight className="h-4 w-4 text-slate-400" />

  <span className="text-pink-500 font-medium">
    Parents
  </span>
</div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">


            {/* LEFT CONTENT */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">

                <Heart className="w-4 h-4" />

                Parenting Support & Guidance

              </span>


              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.15] text-slate-900">

                Supporting Parents in

                <span className="block mt-2 text-pink-600">
                  Raising Healthy Children
                </span>

              </h1>


              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">

                Mini Marvels provides trusted guidance for parents at every
                stage of their child's growth. From newborn care to nutrition,
                vaccinations and daily health concerns, we help you make
                confident parenting decisions.

              </p>


              <div className="mt-7 flex flex-wrap gap-4">


                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
                >

                  Book Consultation

                  <ArrowRight className="h-5 w-5" />

                </Link>



                <Link
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-pink-500"
                >

                  <Phone className="h-5 w-5" />

                  Call Clinic

                </Link>


              </div>



              <div className="mt-8 flex flex-wrap gap-8">


                <div className="flex items-center gap-3">

                  <ShieldCheck className="h-7 w-7 text-pink-600" />

                  <p className="font-medium text-slate-700">
                    Trusted Pediatric Care
                  </p>

                </div>



                <div className="flex items-center gap-3">

                  <Baby className="h-7 w-7 text-sky-600" />

                  <p className="font-medium text-slate-700">
                    Complete Child Guidance
                  </p>

                </div>


              </div>


            </div>




            {/* RIGHT IMAGE */}

            <div className="flex justify-center">


              <div className="relative w-full max-w-[560px]">


                <Image
                  src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg"
                  alt="Parents with child"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto max-h-[560px] rounded-[45px] object-contain"
                />


              </div>


            </div>



          </div>


        </div>


      </section>
            {/* ================= PARENTING GUIDANCE SECTION ================= */}

      <section className="bg-white py-12 lg:py-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">


            {/* IMAGE */}

            <div className="flex justify-center">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783408753/images_1_dj21ji.jpg"
                alt="Parenting guidance"
                width={700}
                height={700}
                className="w-full max-w-[560px] h-auto max-h-[520px] rounded-[45px] object-contain"
              />

            </div>



            {/* CONTENT */}

            <div>

              <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
                Parenting Guidance
              </span>


              <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-slate-900">

                Every Parent Needs The

                <span className="text-pink-600">
                  {" "}Right Guidance
                </span>

              </h2>


              <p className="mt-5 text-slate-600 leading-8">

                Parenting is a beautiful journey but it also comes with many
                questions. We support parents with practical advice about
                nutrition, sleep routines, immunity and overall child
                development.

              </p>



              <div className="mt-6 space-y-4">


                <div className="flex items-start gap-3">

                  <Heart className="mt-1 h-6 w-6 text-pink-600" />

                  <p className="text-slate-700">
                    Understanding your child's growth milestones.
                  </p>

                </div>



                <div className="flex items-start gap-3">

                  <ShieldCheck className="mt-1 h-6 w-6 text-sky-600" />

                  <p className="text-slate-700">
                    Building healthy habits from an early age.
                  </p>

                </div>



                <div className="flex items-start gap-3">

                  <Baby className="mt-1 h-6 w-6 text-pink-600" />

                  <p className="text-slate-700">
                    Expert support for newborns and growing children.
                  </p>

                </div>


              </div>


            </div>


          </div>

        </div>

      </section>






      {/* ================= CHILD HEALTH TIPS SECTION ================= */}

      <section className="bg-[#fffafc] py-12 lg:py-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">


          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">



            {/* CONTENT */}

            <div className="order-2 lg:order-1">


              <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
                Child Health Tips
              </span>



              <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-slate-900">

                Simple Habits For A

                <span className="text-sky-600">
                  {" "}Healthier Childhood
                </span>

              </h2>



              <p className="mt-5 text-slate-600 leading-8">

                Small daily habits create a big impact on your child's health.
                Balanced nutrition, active lifestyle and proper hygiene help
                children grow stronger and happier.

              </p>




              <div className="mt-7 space-y-4">


                <p className="flex gap-3 text-slate-700">

                  <span className="font-bold text-pink-600">
                    ✓
                  </span>

                  Healthy eating habits and nutrition guidance

                </p>



                <p className="flex gap-3 text-slate-700">

                  <span className="font-bold text-pink-600">
                    ✓
                  </span>

                  Immunity building tips for children

                </p>



                <p className="flex gap-3 text-slate-700">

                  <span className="font-bold text-pink-600">
                    ✓
                  </span>

                  Everyday care tips for parents

                </p>


              </div>


            </div>





            {/* IMAGE */}

            <div className="order-1 lg:order-2 flex justify-center">


              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783408970/little-boy-eating-apple-fruits-kitchen-kids-healthy-concept-80145665_mrkylc.webp"
                alt="Child health tips"
                width={700}
                height={700}
                className="w-full max-w-[560px] h-auto max-h-[520px] rounded-[45px] object-contain"
              />


            </div>



          </div>


        </div>

      </section>
            {/* ================= VACCINATION SECTION ================= */}

      <section className="bg-white py-12 lg:py-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">


            {/* IMAGE */}

            <div className="flex justify-center">

              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1782922469/IMG_20260701_213817.jpg_nhrjov.jpg"
                alt="Child vaccination"
                width={700}
                height={700}
                className="w-full max-w-[560px] h-auto max-h-[520px] rounded-[45px] object-contain"
              />

            </div>




            {/* CONTENT */}

            <div>


              <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
                Vaccination Care
              </span>



              <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-slate-900">

                Protecting Your Child With

                <span className="text-pink-600">
                  {" "}Timely Vaccinations
                </span>

              </h2>




              <p className="mt-5 text-slate-600 leading-8">

                Vaccines play an important role in protecting children from
                preventable diseases. Mini Marvels helps parents understand
                vaccination schedules and provides safe, child-friendly care.

              </p>




              <div className="mt-7 space-y-4">


                <div className="flex items-start gap-3">

                  <ShieldCheck className="mt-1 h-6 w-6 text-pink-600" />

                  <p className="text-slate-700">
                    Complete vaccination guidance according to age.
                  </p>

                </div>




                <div className="flex items-start gap-3">

                  <Heart className="mt-1 h-6 w-6 text-sky-600" />

                  <p className="text-slate-700">
                    Comfortable experience for children and parents.
                  </p>

                </div>




                <div className="flex items-start gap-3">

                  <Baby className="mt-1 h-6 w-6 text-pink-600" />

                  <p className="text-slate-700">
                    Support throughout your child's growth journey.
                  </p>

                </div>


              </div>


            </div>


          </div>


        </div>


      </section>







      {/* ================= PARENT EDUCATION SECTION ================= */}


      <section className="bg-[#fffafc] py-12 lg:py-16">


        <div className="max-w-7xl mx-auto px-6 lg:px-12">


          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">





            {/* CONTENT */}

            <div>


              <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
                Parent Education
              </span>




              <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-slate-900">


                Knowledge Helps Parents Make

                <span className="text-sky-600">
                  {" "}Better Decisions
                </span>


              </h2>




              <p className="mt-5 text-slate-600 leading-8">


                A well-informed parent can understand their child's needs
                better. We focus on educating families about nutrition,
                development, preventive care and healthy routines.


              </p>





              <div className="mt-7">


                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3.5 text-white font-semibold transition hover:bg-pink-700"
                >

                  Explore Child Care Services

                  <ArrowRight className="h-5 w-5" />

                </Link>


              </div>


            </div>







            {/* IMAGE */}

            <div className="flex justify-center">


              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279771/IMG_20260706_004428.jpg_ro4guq.jpg"
                alt="Parent education"
                width={700}
                height={700}
                className="w-full max-w-[560px] h-auto max-h-[520px] rounded-[45px] object-contain"
              />


            </div>



          </div>


        </div>


      </section>
            {/* ================= PARENT TESTIMONIAL SECTION ================= */}

      <section className="bg-white py-12 lg:py-16">

        <div className="max-w-6xl mx-auto px-6 lg:px-12">


          <div className="text-center max-w-3xl mx-auto">


            <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">

              Parent Experiences

            </span>



            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">

              Trusted By Parents Who Care

            </h2>



            <p className="mt-4 text-slate-600 leading-8">

              Every child's health journey is special. We are grateful to be
              a part of families' trust and care.

            </p>


          </div>




          <div className="mt-10 grid md:grid-cols-3 gap-10">


            <div className="text-center">

              <p className="italic leading-8 text-slate-600">

                "The doctor explained everything patiently and made my child
                feel comfortable. The care is truly amazing."

              </p>


              <h4 className="mt-5 font-semibold text-slate-900">

                Happy Parent

              </h4>


            </div>




            <div className="text-center">

              <p className="italic leading-8 text-slate-600">

                "Mini Marvels provides the perfect balance of expert care and
                a friendly environment for children."

              </p>


              <h4 className="mt-5 font-semibold text-slate-900">

                Happy Parent

              </h4>


            </div>




            <div className="text-center">

              <p className="italic leading-8 text-slate-600">

                "From vaccinations to regular checkups, every visit feels safe
                and comfortable."

              </p>


              <h4 className="mt-5 font-semibold text-slate-900">

                Happy Parent

              </h4>


            </div>



          </div>



        </div>


      </section>







      {/* ================= CTA SECTION ================= */}


      <section className="bg-gradient-to-br from-pink-50 via-white to-sky-50 py-12 lg:py-16">


        <div className="max-w-7xl mx-auto px-6 lg:px-12">


          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">





            {/* IMAGE */}

            <div className="flex justify-center">


              <Image
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1783334464/a8f74ca3bbcd7f256e0045f01716d25f_oxjjww.jpg"
                alt="Happy family"
                width={700}
                height={600}
                className="w-full max-w-[550px] h-auto max-h-[500px] rounded-[45px] object-contain"
              />


            </div>







            {/* CONTENT */}


            <div>


              <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">

                Start Your Child Care Journey

              </span>




              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-slate-900">


                Give Your Child The

                <span className="text-pink-600">
                  {" "}Best Start In Life
                </span>


              </h2>




              <p className="mt-5 text-lg leading-8 text-slate-600">


                Book your consultation with Mini Marvels and get expert
                pediatric guidance for your child's healthy growth and
                development.


              </p>




              <div className="mt-7 flex flex-wrap gap-4">


                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
                >

                  Book Appointment

                  <ArrowRight className="h-5 w-5" />

                </Link>




                <Link
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-pink-500"
                >

                  <Phone className="h-5 w-5" />

                  Call Now

                </Link>


              </div>


            </div>



          </div>



        </div>


      </section>


    </main>
  );
}