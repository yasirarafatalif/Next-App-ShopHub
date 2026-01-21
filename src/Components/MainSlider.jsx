"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    title: "ShopHub Exclusive Collection",
    desc: "Get up to 50% off on all premium products.",
    bg: "bg-blue-100",
  },
   {
    id: 2,
    title: "ShopHub Exclusive Collection",
    desc: "Get up to 50% off on all premium products.",
    bg: "bg-blue-400",
  },
  {
    id: 3,
    title: "New Winter Arrivals",
    desc: "Stay warm and stylish with our latest trends.",
    bg: "bg-gray-100",
  },
];

export default function MainSlider() {
  return (
    <div className="w-full h-[400px] md:h-[500px] ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-full w-full rounded-xl"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={`flex flex-col items-center justify-center h-full ${item.bg} text-center p-10`}>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">{item.desc}</p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}