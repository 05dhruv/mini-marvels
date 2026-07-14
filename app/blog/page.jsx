import BlogPostPage from "./BlogPostPage";

export const metadata = {
  title:
    "Mini Marvels Child Care Clinic | Child Health, Parenting & Vaccination Blogs",

  description:
    "Explore expert pediatric blogs from Mini Marvels Child Care Clinic. Read articles on child health, newborn care, vaccinations, nutrition, growth & development, common childhood illnesses, and parenting tips.",

  keywords:
    "Mini Marvels blog, pediatric blog, child health blog, parenting tips, vaccination guide, newborn care, child nutrition, child specialist Moradabad, pediatrician Moradabad, child growth, baby care",

  alternates: {
    canonical: "https://www.minimarvelschildcareclinic.com/blog",
  },

  openGraph: {
    type: "website",
    url: "https://www.minimarvelschildcareclinic.com/blog",
    title:
      "Mini Marvels Child Care Clinic | Child Health, Parenting & Vaccination Blogs",

    description:
      "Stay informed with trusted pediatric advice from Mini Marvels Child Care Clinic. Explore blogs on vaccinations, newborn care, nutrition, child development, parenting, and common childhood illnesses.",

    images: [
      {
        url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg",
        width: 1200,
        height: 630,
        alt: "Mini Marvels Child Care Clinic Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mini Marvels Child Care Clinic | Child Health, Parenting & Vaccination Blogs",

    description:
      "Expert pediatric blogs covering child health, vaccinations, nutrition, newborn care, parenting, and healthy child development.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783279773/IMG_20260706_004402.jpg_p0gij1.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF7FB] via-[#F8FFFE] to-[#EDF9F8]">
      <BlogPostPage />
    </div>
  );
}