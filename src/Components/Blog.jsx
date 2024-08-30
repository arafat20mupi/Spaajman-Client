import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const salonSpaBlogs = [
  {
    id: 1,
    title: "Top 5 Haircut Trends for 2024",
    description: "Explore the latest haircut trends that are set to dominate salons in 2024.",
    image: "https://example.com/haircut-trends.jpg",
    author: "Alice Parker",
    date: "2024-08-25",
    tags: ["Haircut", "Trends", "Salon"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Spa Treatments",
    description: "Discover various spa treatments that can help you relax and rejuvenate.",
    image: "https://example.com/spa-treatments.jpg",
    author: "Bob Johnson",
    date: "2024-08-26",
    tags: ["Spa", "Treatments", "Wellness"],
  },
  {
    id: 3,
    title: "10 Must-Have Hair Care Products",
    description: "Find out which hair care products are essential for maintaining healthy hair.",
    image: "https://example.com/hair-care-products.jpg",
    author: "Emily Davis",
    date: "2024-08-27",
    tags: ["Hair Care", "Products", "Salon"],
  },
  {
    id: 4,
    title: "How to Choose the Right Facial for Your Skin Type",
    description: "Learn how to select the perfect facial treatment based on your skin type.",
    image: "https://example.com/facial-skin-type.jpg",
    author: "David Smith",
    date: "2024-08-28",
    tags: ["Facial", "Skin Care", "Spa"],
  },
  {
    id: 5,
    title: "The Benefits of Regular Massage Therapy",
    description: "Understand the health benefits of incorporating regular massage therapy into your routine.",
    image: "https://example.com/massage-therapy.jpg",
    author: "Sophia Brown",
    date: "2024-08-29",
    tags: ["Massage", "Therapy", "Wellness"],
  },
  {
    id: 6,
    title: "DIY Hair Masks for Every Hair Type",
    description: "Create effective hair masks at home tailored to your hair type and needs.",
    image: "https://example.com/diy-hair-masks.jpg",
    author: "Michael Lee",
    date: "2024-08-30",
    tags: ["Hair Masks", "DIY", "Salon"],
  },
  {
    id: 7,
    title: "The Rise of Organic Spa Treatments",
    description: "Explore the trend of organic and natural spa treatments and their benefits.",
    image: "https://example.com/organic-spa.jpg",
    author: "Olivia Wilson",
    date: "2024-08-31",
    tags: ["Organic", "Spa", "Wellness"],
  },
  {
    id: 8,
    title: "Essential Tips for Maintaining a Perfect Manicure",
    description: "Get tips and tricks for keeping your manicure looking flawless.",
    image: "https://example.com/perfect-manicure.jpg",
    author: "James Taylor",
    date: "2024-09-01",
    tags: ["Manicure", "Nail Care", "Salon"],
  },
  {
    id: 9,
    title: "How to Create a Relaxing Home Spa Experience",
    description: "Transform your home into a relaxing spa with these easy tips and tricks.",
    image: "https://example.com/home-spa.jpg",
    author: "Ava White",
    date: "2024-09-02",
    tags: ["Home Spa", "Relaxation", "Wellness"],
  },
  {
    id: 10,
    title: "The Top 5 Anti-Aging Treatments in Spas",
    description: "Explore the most effective anti-aging treatments available at spas.",
    image: "https://example.com/anti-aging-treatments.jpg",
    author: "Liam Harris",
    date: "2024-09-03",
    tags: ["Anti-Aging", "Spa", "Treatments"],
  },
  
];

const Blog = () => {
  const [salon, setSalon] = useState(salonSpaBlogs);
  const [searchVal, setSearchVal] = useState("");

 
const handleBlog=()=>{
if(searchVal ===" "){
  setSalon(salonSpaBlogs)
  return
}
const filterBySearch =salonSpaBlogs.filter((item)=>{
  const isTitleMatch =item.title.toLowerCase().includes(searchVal.toLowerCase())
  const isTagMatch =item.tags.some((tag)=>{
    tag.toLowerCase().includes(searchVal.toLowerCase())

  })
 return isTagMatch || isTitleMatch
})
setSalon(filterBySearch)
} 
  return (
    <div className="p-5">
 
    <h1 className="text-2xl font-bold mb-5">Salon and Spa Blogs</h1>

 
<div className="flex justify-center bg-gray-100 p-4 rounded-lg">
  <input
    type="text"
    value={searchVal}
    onChange={(e) => setSearchVal(e.target.value)}
    placeholder="Search blogs by title or tags..."
    className="border p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button onClick={handleBlog} className="bg-blue-500 text-white p-2 rounded-r-lg transition-colors duration-300 hover:bg-blue-600">
    Search
  </button>
</div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {salon.map((salon) => (
        <div key={salon.id} className="border rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105">
          <img
            src={salon.image}
            alt={salon.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{salon.title}</h2>
          <p className="text-sm text-gray-500">
            {salon.date} by {salon.author}
          </p>
          <p className="mt-2 text-sm text-gray-700">{salon.description}</p>
  
          {/* Display Tags */}
          <div className="mt-3">
            {salon.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 text-xs font-medium mr-2 px-3 py-1 rounded hover:bg-gray-300 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
  
          <Link
            to={`/blog/${salon.id}`}
            className="mt-3 text-blue-500 hover:underline block"
          >
            View More
          </Link>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Blog;
