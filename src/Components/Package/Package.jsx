import { useState } from "react";
import { GoPackage } from "react-icons/go";

const Package = () => {
    const [tempData, setTempData] = useState(null);

    const getData = (pkg) => {
        setTempData(pkg);
    };

    const Pkg = [
        {
            imgs: [
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
            ],
            title: "Body massage + Hair cut",
            price: 53,
            newprice: 43,
            shop: "Spa Ajman",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1"
        },
        {
            imgs: [
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
            ],
            title: "Head massage + Body massage",
            price: 46,
            newprice: 33,
            shop: "Dhaka Spa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2"
        },
        {
            imgs: [
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
            ],
            title: "Head massage + Body massage",
            price: 46,
            newprice: 33,
            shop: "Dhaka Spa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2"
        },
        {
            imgs: [
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
                "https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/465839855_1350522805924781_2891526088187287211_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1_yBy6WWbtxx9Fo4XGaAYCuzmIUoVGukK7OYhShUa6bkauKb52qvCx96ig1BGUoSL-bjZjPxXJvvd-kKx4vyq&_nc_ohc=ID9m_DUljXYQ7kNvgF3MD3X&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AimDDvwC4_aqZQPPCGlS51I&oh=00_AYBDVzv_42Bsm34CZqSHZuASaPO09uTC95h3PCZWAkHpfQ&oe=672FFEBB",
            ],
            title: "Head massage + Body massage",
            price: 46,
            newprice: 33,
            shop: "Dhaka Spa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2"
        },
    ];

    const calculateDiscount = (price, newPrice) => {
        return Math.round(((price - newPrice) / price) * 100);
    };

    return (
        <div>
            {tempData && (
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle bg-white  absolute right-2 top-2">✕</button>
                        </form>
                        <div className="grid grid-cols-2 gap-2 overflow-hidden">
                            {tempData.imgs.map((img, index) => (
                                <img key={index} src={img} alt="" className="w-full h-32 object-cover mb-2" />
                            ))}
                        </div>
                        <h3 className="font-bold text-lg">{tempData.title}</h3>
                        <h1 className="font-bold text-2xl my-2">
                            Price: <span className="text-indigo-600">${tempData.newprice}</span>
                        </h1>
                        <p className="text-gray-400">{tempData.description}</p>
                        <p className="mt-2">Shop: {tempData.shop}</p>
                    </div>
                </dialog>
            )}

            <div className="py-32 grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 md:mx-32">
                {Pkg.map((pkg, index) => {
                    const discount = calculateDiscount(pkg.price, pkg.newprice);

                    return (
                        <div key={index} onClick={() => getData(pkg)}>
                            <div
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                className="hover:scale-105 duration-300 hover:mx-3 cursor-pointer flex flex-col xl:flex-row bg-white rounded-md shadow-md ring-1 ring-gray-300"
                            >
                                <div className="px-5 py-3 w-full space-y-3">
                                    
                                    <div className="flex gap-2 overflow-hidden">
                                        {pkg.imgs.map((img, index) => (
                                            <img key={index} src={img} alt="" className="w-full h-32 object-cover" />
                                        ))}
                                    </div>

                                    <h1 className="text-black ring-1 ring-gray-200 p-2 m-1 rounded-md">{pkg.title}</h1>
                                    <p className="text-gray-400">{pkg.description}</p>
                                    <h1>By: {pkg.shop}</h1>
                                    <h1 className="text-xl">
                                        Price: $
                                        <span className="text-gray-400 line-through">{pkg.price}</span>
                                        <span className="mx-1 text-3xl text-indigo-600">{pkg.newprice}</span>
                                        <div className="badge text-white relative -top-5 badge-error gap-2">
                                            {discount}% Off
                                        </div>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Package;
