"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CalendarDays, Clock3, ArrowRight } from "lucide-react";
const blogs = [
  {
    id: 1,
    slug: "vaccination-guide",
    title: "Vaccination Guide for Parents",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783244825/IMG_20260701_213817.jpg_o3vvy9.jpg",
    date: "10 July 2026",
    readTime: "5 min read",
    excerpt:
      "Learn why childhood vaccinations are important, when they should be given, and how they protect your child from serious diseases.",
  },
  {
    id: 2,
    slug: "growth-development",
    title: "Growth & Development Milestones",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783939469/9393_taoqoa.jpg",
    date: "08 July 2026",
    readTime: "6 min read",
    excerpt:
      "Understand your child's physical, emotional, and developmental milestones from infancy through the early years.",
  },
  {
    id: 3,
    slug: "healthy-nutrition",
    title: "Healthy Nutrition for Growing Kids",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783936989/979797_vtiwtm.jpg",
    date: "05 July 2026",
    readTime: "4 min read",
    excerpt:
      "Simple nutrition tips to build healthy eating habits and support your child's overall growth and immunity.",
  },
];
export default function BlogsPage() {
  return (
    <main className="bg-[#EDF4F8] min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link
              href="/"
              className="hover:text-pink-600 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium text-pink-600">
              Blogs
            </span>
          </div>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Blogs
          </h1>
          <p className="mt-5 max-w-3xl text-gray-600 leading-8 text-base sm:text-lg">
            Explore expert parenting advice, child healthcare tips, nutrition
            guidance, and developmental insights from the Mini Marvels Child
            Care Clinic. Our goal is to help parents make informed decisions
            for their child's healthy future.
          </p>
        </div>
      </section>
      {/* Blog Cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    />
                  </div>
                </Link>
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-5 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-pink-600" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 className="w-4 h-4 text-pink-600" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors leading-snug">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="mt-4 text-gray-600 leading-7">
                    {blog.excerpt}
                  </p>
                                    <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}