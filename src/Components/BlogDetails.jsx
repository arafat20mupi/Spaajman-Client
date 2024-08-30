import React from 'react';
import { useParams } from 'react-router-dom';

const salonSpaBlogs = [
  {
    id: 1,
    title: "Top 5 Haircut Trends for 2024",
    description: "Discover the hottest haircut trends that are set to make a splash in salons throughout 2024. From bold new styles to timeless cuts, this guide highlights the trends you should watch out for and how to achieve them.",
    image: "https://example.com/haircut-trends.jpg",
    author: "Alice Parker",
    date: "2024-08-25",
    tags: ["Haircut", "Trends", "Salon"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Spa Treatments",
    description: "Dive into the world of spa treatments with this comprehensive guide. Learn about various treatments designed to help you relax, rejuvenate, and enhance your well-being, from facials to body wraps.",
    image: "https://example.com/spa-treatments.jpg",
    author: "Bob Johnson",
    date: "2024-08-26",
    tags: ["Spa", "Treatments", "Wellness"],
  },
  {
    id: 3,
    title: "10 Must-Have Hair Care Products",
    description: "Explore the essential hair care products that every individual should have in their routine. Whether you're looking to address specific hair issues or simply maintain healthy locks, these top picks will cover all your needs.",
    image: "https://example.com/hair-care-products.jpg",
    author: "Emily Davis",
    date: "2024-08-27",
    tags: ["Hair Care", "Products", "Salon"],
  },
  {
    id: 4,
    title: "How to Choose the Right Facial for Your Skin Type",
    description: "Selecting the right facial treatment can make a significant difference in your skincare routine. This guide helps you understand how to choose a facial that aligns with your skin type and concerns, ensuring optimal results.",
    image: "https://example.com/facial-skin-type.jpg",
    author: "David Smith",
    date: "2024-08-28",
    tags: ["Facial", "Skin Care", "Spa"],
  },
  {
    id: 5,
    title: "The Benefits of Regular Massage Therapy",
    description: "Regular massage therapy offers a range of health benefits, from stress relief to improved circulation. Learn how incorporating massage into your routine can enhance your physical and mental well-being.",
    image: "https://example.com/massage-therapy.jpg",
    author: "Sophia Brown",
    date: "2024-08-29",
    tags: ["Massage", "Therapy", "Wellness"],
  },
  {
    id: 6,
    title: "DIY Hair Masks for Every Hair Type",
    description: "Create nourishing hair masks at home tailored to your specific hair type and needs. This guide provides recipes and tips for making effective masks that will help you achieve healthier, more vibrant hair.",
    image: "https://example.com/diy-hair-masks.jpg",
    author: "Michael Lee",
    date: "2024-08-30",
    tags: ["Hair Masks", "DIY", "Salon"],
  },
  {
    id: 7,
    title: "The Rise of Organic Spa Treatments",
    description: "Explore the growing trend of organic and natural spa treatments. Discover how these treatments use natural ingredients to promote wellness and why they are becoming increasingly popular.",
    image: "https://example.com/organic-spa.jpg",
    author: "Olivia Wilson",
    date: "2024-08-31",
    tags: ["Organic", "Spa", "Wellness"],
  },
  {
    id: 8,
    title: "Essential Tips for Maintaining a Perfect Manicure",
    description: "Keep your manicure looking flawless with these essential tips and tricks. From proper nail care to the best products to use, learn how to maintain beautiful nails for longer.",
    image: "https://example.com/perfect-manicure.jpg",
    author: "James Taylor",
    date: "2024-09-01",
    tags: ["Manicure", "Nail Care", "Salon"],
  },
  {
    id: 9,
    title: "How to Create a Relaxing Home Spa Experience",
    description: "Transform your home into a sanctuary of relaxation with these easy tips and tricks. Learn how to create a spa-like atmosphere and enjoy a soothing experience without leaving your house.",
    image: "https://example.com/home-spa.jpg",
    author: "Ava White",
    date: "2024-09-02",
    tags: ["Home Spa", "Relaxation", "Wellness"],
  },
  {
    id: 10,
    title: "The Top 5 Anti-Aging Treatments in Spas",
    description: "Discover the most effective anti-aging treatments available at spas. This guide highlights treatments that can help reduce signs of aging and maintain youthful skin.",
    image: "https://example.com/anti-aging-treatments.jpg",
    author: "Liam Harris",
    date: "2024-09-03",
    tags: ["Anti-Aging", "Spa", "Treatments"],
  },
 
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = salonSpaBlogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="p-5 pt-24  mx-auto  text-center">
    <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-4" />
    <div className="mb-4">
      <p className="text-sm text-gray-500 mb-1">{blog.date} by {blog.author}</p>
      <h2 className="text-2xl font-semibold">{blog.title}</h2>
    </div>
    <p className="text-gray-700 mb-4">{blog.description}</p>
    <div className="flex gap-2">
      {blog.tags.map((tag, index) => (
        <span key={index} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
          {tag}
        </span>
      ))}
    </div>
  </div>
  
  );
};

export default BlogDetails;
