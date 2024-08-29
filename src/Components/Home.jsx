import React, { useState } from 'react';
const salonsData = [
    { id: 1, name: 'মোহাম্মদপুর', salons: 10, distance: '5km' },
    { id: 2, name: 'ধানমন্ডি', salons: 15, distance: '7km' },
    { id: 3, name: 'উত্তরা', salons: 8, distance: '12km' },
    { id: 4, name: 'বনানী', salons: 20, distance: '10km' },
    { id: 5, name: 'গুলশান', salons: 18, distance: '9km' },
    { id: 6, name: 'মিরপুর', salons: 12, distance: '6km' },
    { id: 7, name: 'বাড্ডা', salons: 10, distance: '8km' },
    { id: 8, name: 'বংশাল', salons: 5, distance: '4km' },
    { id: 9, name: 'পল্টন', salons: 14, distance: '3km' },
    { id: 10, name: 'রামপুরা', salons: 9, distance: '7km' },
  ];
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSalons = salonsData.filter(salon =>
      salon.name.includes(searchTerm)
    );
  
  return (
    <div className="flex">
      {/* সার্চ ফিল্টার */}
      <div className="w-1/3 p-4">
        <input
          type="text"
          placeholder="এলাকা অনুসন্ধান করুন..."
          className="border p-2 w-full mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredSalons.map(salon => (
            <li key={salon.id} className="p-2 border-b">
              {salon.name} - {salon.salons} সেলুন, দূরত্ব: {salon.distance}
            </li>
          ))}
        </ul>
      </div>

      {/* ম্যাপ */}
      <div className="w-2/3 p-4">
        {/* গুগল ম্যাপ ইনটিগ্রেশন */}
        <div className="h-full w-full border">
          {/* গুগল ম্যাপ API বা অন্য কোনো ম্যাপ লাইব্রেরি ব্যবহার করতে হবে */}
          <p>ম্যাপ এখানে প্রদর্শিত হবে</p>
        </div>
      </div>
    </div>
  )
}

export default Home
