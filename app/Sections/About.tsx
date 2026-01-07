"use client";

import Image from "next/image";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 bg-white ">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT : IMAGES */}
        <div className="relative flex justify-center">
          {/* EXPERIENCE BADGE */}
          <div className="absolute top-4 left-4 z-20 bg-[#FDC700] text-black px-6 py-6 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-sm font-medium leading-tight">
              Years Experiences <br /> Maintenance Services
            </p>
          </div>

          {/* ===== MOBILE SLIDER ===== */}
          <div className="lg:hidden w-full max-w-sm">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop={true}
              className="rounded-2xl overflow-hidden"
            >
              {["/about.jpg", "/about2.jpg", "/about3.jpg"].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-64 w-full">
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ===== DESKTOP COLLAGE ===== */}
          <div className="hidden lg:block relative w-full h-[520px]">
            <div className="absolute top-0 left-24 w-64 h-40 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/about.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="absolute top-28 left-0 w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/about2.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="absolute top-32 left-56 w-72 h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/about3.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* RIGHT : CONTENT */}
        <div className="text-center lg:text-left">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#FDC700] mb-3">
            About Us
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Welcome To Repair & <br className="hidden lg:block" />
            Installing Company
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We provide professional electrical repair and installation services
            with safety, quality, and customer satisfaction as our top priority.
          </p>

          {/* ✅ CENTER ON MOBILE */}
          <ul className="space-y-3 mb-8 max-w-4xl mx-auto text-center lg:text-left">
            {[
              "Professional Electrical Installation",
              "Home & Office Maintenance",
              "Skilled & Certified Technicians",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center lg:justify-start gap-3 text-gray-700"
              >
                <FaCheckCircle className="text-[#FDC700]" />
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <Link
              href="#services"
              className="bg-[#FDC700] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Discover More →
            </Link>

            {/* 🎥 VIDEO LINK */}
            <Link
              href="https://youtube.com/shorts/Tix_G48bLXA?si=pz2tHUkzcB5JJRX4"
              target="_blank"
              className="flex items-center gap-3 font-medium"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FDC700]/30">
                <FaPlay className="text-[#FDC700]" />
              </span>
              Watch Our Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
