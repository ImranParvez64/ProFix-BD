"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {
  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#FDC700] mb-3">
            Testimonial
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            What Clients Say <br /> About Us
          </h2>

          <p className="text-gray-600 mt-5">
            Our technicians are licensed, certified, and trained to an not meet
            from an inspection frequent circuit trips, kinds buzzing sounds may
            indicate an issue.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
            <span className="text-4xl font-bold text-[#FDC700]">99%</span>
            <p className="text-gray-700 font-medium">
              Top Rate Amperigo Company
            </p>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="flex justify-center">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={24}
            className="w-full max-w-2xl"
          >
            <SwiperSlide>
              <div className="
                bg-[#f4f7fb] p-8 sm:p-10 min-h-80
                flex flex-col md:flex-row
                gap-8 items-center
                text-center md:text-left
              ">
                {/* IMAGE */}
                <div className="relative shrink-0 mx-auto md:mx-0">
                  <Image
                    src="/about.jpg"
                    alt="Client"
                    width={220}
                    height={260}
                    className="object-cover mx-auto"
                  />

                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-[#35301d] text-white px-4 py-2 text-sm font-semibold leading-snug">
                    ⭐⭐⭐⭐⭐ <br />
                    Brooklyn Simmons
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-1 text-[#FDC700]">
                    ❝ It was a Great Esperance!
                  </h4>

                  <p className="text-sm text-gray-500 mb-4">
                    Project: Electrical Services
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    My instructor was very professional and strict understanding
                    helped impression understand ensuring the privacy offer golf,
                    tennis, and any variety of other sports to cater to services
                    and classes players of all levels.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
