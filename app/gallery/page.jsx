"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";


export default function GalleryPage() {



  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg",
      alt: "Mini Marvels Clinic",
    },

    {
      id: 3,
      src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783334476/60e813dad251b6a41a814438fc1ea03e_xbfxbc.jpg",
      alt: "Clinic Interior",
    },

    {
      id: 4,
      src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783408753/images_1_dj21ji.jpg",
      alt: "Happy Child",
    },

    {
      id: 5,
      src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782922469/IMG_20260701_213817.jpg_nhrjov.jpg",
      alt: "Vaccination Care",
    },

    {
      id: 6,
      src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335944/4e664d00863584c432c0ab22d5917e17_tzealo.jpg",
      alt: "Newborn Care",
    },
  ];



  const reels = [
    {
      id: 1,
      title: "Video 1",
      image:
        "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783315639/e83ae0cd9ea6f0ad998296a13f497b54_sdzgde.jpg",
      link:
        "https://www.instagram.com/dr.minimarvels?igsh=MXYxM3BpZDRqNWhhNA==",
    },

    {
      id: 2,
      title: "Video 2",
      image:
        "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783336125/doctor-thermometer-and-parent-with-child-in-bedroom-for-healthcare-sick-and-fever-check-illness-temperature-and-influenza-symptoms-with-girl-in-family-home-for-disease-infection-and-pediatrician-photo_c0fj84.jpg",
      link:
        "https://www.instagram.com/dr.minimarvels?igsh=MXYxM3BpZDRqNWhhNA==",
    },

    {
      id: 3,
      title: "Video 3",
      image:
        "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783335957/s7_zvmwmv.jpg",
      link:
        "https://www.instagram.com/dr.minimarvels?igsh=MXYxM3BpZDRqNWhhNA==",
    },
  ];



  return (

    <main className="w-full overflow-hidden bg-[#fff8fb]">


      {/* HERO SECTION */}

      <section
        className="
          w-full
          pt-32
          md:pt-40
          pb-10
          md:pb-14
          bg-gradient-to-r
          from-pink-100
          via-white
          to-pink-50
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            md:px-10
            text-center
          "
        >

          <h1
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-gray-800
            "
          >
            Our Gallery
          </h1>


          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-gray-600
              text-sm
              md:text-base
            "
          >
            Explore beautiful moments, clinic activities,
            and memories from Mini Marvels Child Care Clinic.
          </p>



          {/* BREADCRUMB */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-gray-500
            "
          >

            <Link
              href="/"
              className="hover:text-pink-600 transition"
            >
              Home
            </Link>


            <ChevronRight size={16}/>


            <span className="text-pink-600 font-medium">
              Gallery
            </span>


          </div>


        </div>

      </section>
            {/* ================= PHOTOS SECTION ================= */}

      <section
        className="
          px-5
          md:px-10
          py-10
          md:py-14
        "
      >

        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-8">


            <h2
              className="
                text-2xl
                md:text-4xl
                font-bold
                text-gray-800
              "
            >
              Clinic Moments
            </h2>


            <p
              className="
                mt-3
                text-gray-600
                text-sm
                md:text-base
              "
            >
              A glimpse of care, smiles, and memorable moments.
            </p>


          </div>



          {/* ================= PHOTO GRID ================= */}


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
              auto-rows-[180px]
              sm:auto-rows-[220px]
              lg:auto-rows-[240px]
            "
          >


            {photos.map((photo, index) => (

              <div
                key={photo.id}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  group
                  bg-slate-100
                  shadow-sm
                  ${
                    index === 0
                      ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                      : ""
                  }
                `}
              >


                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />



                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                />



              </div>

            ))}


          </div>



          {/* ================= VIEW MORE PHOTOS ================= */}


          <div
            className="
              flex
              justify-center
              mt-10
            "
          >


            <Link
              href="/gallery/photos"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-pink-600
                px-7
                py-3
                text-white
                font-medium
                text-sm
                md:text-base
                hover:bg-pink-700
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-md
              "
            >

              View More Photos

              <ChevronRight size={18}/>

            </Link>


          </div>


        </div>


      </section>





      {/* ================= VIDEO SECTION ================= */}


      <section
        className="
          bg-white
          px-5
          md:px-10
          py-10
          md:py-14
        "
      >


        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-8">


            <h2
              className="
                text-2xl
                md:text-4xl
                font-bold
                text-gray-800
              "
            >
              Featured Instagram Reels
            </h2>


            <p
              className="
                mt-3
                text-gray-600
                text-sm
                md:text-base
              "
            >
              Watch our latest moments and updates.
            </p>


          </div>
                    {/* ================= REELS CAROUSEL ================= */}


          <div className="overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {reels.map((video) => (

                <a
                  key={video.id}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    h-[340px]
                    md:h-[380px]
                    rounded-3xl
                    overflow-hidden
                    group
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-500
                  "
                >

                    <Image
                      src={video.image}
                      alt={video.title ?? "Instagram reel thumbnail"}
                      fill
                      sizes="(max-width:768px) 85vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />


                  {/* DARK OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                    "
                  />



                  {/* PLAY BUTTON */}


                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >


                    <div
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-white/90
                        flex
                        items-center
                        justify-center
                        text-pink-600
                        text-2xl
                        group-hover:scale-110
                        transition-all
                        duration-300
                      "
                    >
                      ▶
                    </div>


                  </div>




                  {/* TITLE */}


                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                      text-white
                    "
                  >


                    <h3
                      className="
                        text-xl
                        font-semibold
                      "
                    >
                      {video.title}
                    </h3>



                    <p
                      className="
                        mt-2
                        text-sm
                        text-white/80
                      "
                    >
                      View Reel on Instagram
                    </p>


                  </div>

                </a>

              ))}


            </div>


          </div>




          {/* ================= VIEW MORE VIDEOS ================= */}


          <div
            className="
              flex
              justify-center
              mt-10
            "
          >


            <Link
              href="/gallery/videos"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border-2
                border-pink-600
                text-pink-600
                px-7
                py-3
                font-medium
                text-sm
                md:text-base
                hover:bg-pink-600
                hover:text-white
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              View More Videos

              <ChevronRight size={18}/>


            </Link>


          </div>


        </div>


      </section>
          </main>

  );

}