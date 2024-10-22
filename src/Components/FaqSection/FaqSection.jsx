import { useState } from "react";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(null);

    // FAQ Data Array
    const dataArr = [
        { title: "ডেলিভারি চার্জ কত?", description: 'ডেলিভারি চার্জ আমাদের ওয়েবসাইটে নির্দিষ্ট করা আছে। দয়া করে ডেলিভারি চার্জের জন্য চেক করুন।' },
        { title: "অর্ডার প্রসেস কি?", description: "অর্ডার প্রসেস খুবই সহজ। শুধু পণ্যের জন্য পছন্দ করুন, কার্টে যোগ করুন এবং চেকআউট করুন।" },
        { title: "ক্যাশ অন হোম ডেলিভারি হবে?", description: "হ্যাঁ, ক্যাশ অন ডেলিভারি সেবা রয়েছে। তবে, কিছু শর্ত প্রযোজ্য হতে পারে।" },
        { title: "আমি অর্ডার করলে কখন পাবো?", description: "আপনার অর্ডার সাধারণত ৩-৫ দিনের মধ্যে পৌঁছাবে, তবে অবস্থানের উপর নির্ভর করতে পারে।" }
    ];

    // Toggle function to open/close accordion
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
            {/* FAQ Heading */}
            <div className="flex justify-center">
                <div className="bg-blue-300 rounded-tl-lg rounded-tr-lg py-2 px-6 w-full sm:w-2/3 text-center mb-5">
                    <h2 className="text-2xl font-bold">কিছু প্রশ্ন ও উত্তর</h2>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="flex justify-center">
                <div className="bg-blue-200 w-full sm:w-2/3 rounded-lg">
                    <div className="p-4 space-y-2">
                        {dataArr.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                <button
                                    onClick={() => toggle(idx)}
                                    className="flex w-full justify-between font-semibold text-black cursor-pointer"
                                >
                                    <span>{faq.title}</span>
                                    <span className="rounded-full p-2">
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${isOpen === idx ? "rotate-180" : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 12h14M12 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? "max-h-screen py-2" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-700 text-sm">{faq.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Order Button */}
            {/* <div className="flex justify-center mt-6">
                <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 sm:px-8 rounded-full flex items-center space-x-2 shadow-lg">
                    <span>অর্ডার করুন</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M12 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div> */}
        </div>
    );
}
