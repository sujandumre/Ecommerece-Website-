import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image
import dash3 from "../assets/images/dash3.png";

function Hero() {
  return (
    <div className="bg-[linear-gradient(135deg,#EEF2FF_0%,#DDD6FE_45%,#C4B5FD_100%)]">

   
    <div className="max-w-7xl mx-auto mt-0 px-4">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-between min-h-[500px] bg-[linear-gradient(135deg,#eef1ff_0%,#d8d4ff_35%,#c9c2ff_65%,#f7f8ff_100%)]">

            {/* Left */}
            <div className="w-1/2 px-12">
              <p className="text-yellow-500 font-semibold mb-4">
                Summer Sale
              </p>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Get Up To 50% Off
              </h1>

              <p className="mt-4 text-xl text-gray-600">
                On Electronics & Accessories
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
                Shop Now
              </button>
            </div>

            {/* Right */}
            <div className="w-1/2 flex justify-center">
              <img
                src={dash3}
                alt="Electronics"
                className="w-[90%] object-contain"
              />
            </div>

          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-between min-h-[500px] bg-[linear-gradient(135deg,#eef1ff_0%,#d8d4ff_35%,#c9c2ff_65%,#f7f8ff_100%)]">

            <div className="w-1/2 px-12">
              <p className="text-blue-600 font-semibold mb-4">
                New Collection
              </p>

              <h1 className="text-5xl font-bold text-gray-900">
                Premium Smart Devices
              </h1>

              <p className="mt-4 text-xl text-gray-600">
                Latest Phones, Laptops & Wearables
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
                Explore Now
              </button>
            </div>

            <div className="w-1/2 flex justify-center">
              <img
                src={dash3}
                alt="Technology"
                className="w-[90%] object-contain"
              />
            </div>

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-between min-h-[500px] bg-[linear-gradient(135deg,#eef1ff_0%,#d8d4ff_35%,#c9c2ff_65%,#f7f8ff_100%)]">

            <div className="w-1/2 px-12">
              <p className="text-red-500 font-semibold mb-4">
                Limited Offer
              </p>

              <h1 className="text-5xl font-bold text-gray-900">
                Upgrade Your Lifestyle
              </h1>

              <p className="mt-4 text-xl text-gray-600">
                Smart Watches • Earbuds • Accessories
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
                Buy Now
              </button>
            </div>

            <div className="w-1/2 flex justify-center">
              <img
                src={dash3}
                alt="Accessories"
                className="w-[90%] object-contain"
              />
            </div>

          </div>
        </SwiperSlide>

      </Swiper>

    </div>
   </div>
  );
}

export default Hero;