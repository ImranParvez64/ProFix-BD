"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";





export function GallerySection() {
  const images = ["/about.jpg", "/about2.jpg", "/about3.jpg", "/hero.jpg"];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 ">
       <div className="mb-14 max-w-xl text-center md:text-start">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#FDC700] mb-3">
            ️Our Gallery
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Real Projects. Real Results. Trusted Electrical Excellence.

          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt="Electrical work"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
