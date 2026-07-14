import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../src/data/blogdata";

export default function BlogPage() {
  // Sort blogs by date (newest first)
  const sortedBlogs = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="py-32 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
{/* Header */}
<div className="text-center mb-16">
  <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-semibold mb-5">
    Mini Marvels Child Care Clinic
  </span>
  <h1 className="text-4xl md:text-5xl font-bold text-[#23684] mb-6">
    Child Health & Parenting Blogs
  </h1>
  <div className="max-w-4xl mx-auto">
    <p className="text-gray-600 text-lg leading-relaxed">
      Stay informed with expert advice from our pediatric team. Explore
      articles on child health, vaccinations, newborn care, nutrition,
      growth & development, common childhood illnesses, and practical
      parenting tips to help your little one grow healthy and happy.
    </p>
  </div>
</div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {sortedBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Date Badge */}
                <div className="relative">
                 <div className="absolute top-4 left-4 z-10 bg-pink-500 text-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {blog.date}
                  </div>
                  
                  {/* Blog Image */}
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 
                      bg-pink-300 h-27 flex flex-col justify-between">
                  <div>
                    <h3
                         className="text-xl font-bold text-black mb-2 leading-snug line-clamp-2"
                      title={blog.title}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-sm text-teal-50 line-clamp-1">
                      {blog.subtitle}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}