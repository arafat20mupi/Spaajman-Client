import { LuPackage } from "react-icons/lu";

const Service = () => {
  const Pkg = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFDGLuKutHbPXTt1UsgyJlOmULhQzs8Es4w&s",
      title: "Body massage ",
      price: 30,
      shop: 'Spa Ajman'
    },
    {
      img: "https://barberrepublic.ae/wp-content/uploads/2023/11/top-benefit-of-Head-massage.png",
      title: "Head massage ",
      price: 12,
      shop: 'Dhaka Spa'
    },
    {
      img: "https://www.hotstone-spa.com/wp-content/uploads/2018/06/MASAGE.jpg",
      title: "Hot stone spa",
      price: 34,
      shop: 'Forid kolpo spa'
    },
    {
      img: "https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg?s=612x612&w=0&k=20&c=mjdP6NhDA40WBorr8kyyI69waMs1EyzLkSmT6lQRvGU=",
      title: "Hair cut",
      price: 23,
      shop: 'Lotus Spa'
    },
  ];
  return (
    <div className="py-32 grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 md:mx-32">
      {Pkg.map((pkg ,index) => {
        return (
          <div key={index}  className="hover:scale-105 duration-300  cursor-pointer flex flex-col xl:flex-row bg-white rounded-md shadow-md ring-1 ring-gray-300">
            <img src={pkg.img} alt="" className="w-full xl:w-60 xl:h-60 rounded-s-md" />
            <div className="mx-5 my-3 space-y-1">
              <LuPackage className="text-5xl text-indigo-600" />
              <h1 className="text-2xl">{pkg.title}</h1>
              <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h1 className="">By: {pkg.shop}</h1>
              <h1 className="text-xl">Price: $
                
                <span className="mx-1 text-3xl text-indigo-600">
                  {pkg.price}
                  
                </span>
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;