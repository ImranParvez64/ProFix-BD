import Link from "next/link";
import { FaPhoneAlt, FaFileInvoiceDollar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center scroll-mt-20"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-20 max-w-5xl text-white mx-auto flex flex-col items-center justify-center text-center">
        {/* Headline */}
        <h1
          className="
          font-bold leading-tight mb-4
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
        >
          Reliable & Affordable <br className="hidden sm:block" />
          <span className="text-yellow-400">Electrical Services</span> in Dhaka
        </h1>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-yellow-400 mb-5 rounded-full"></div>

        {/* Subtext */}
        <p
          className="
          text-base
          sm:text-lg
          lg:text-xl
          mb-8
          opacity-90
          max-w-2xl
        "
        >
          Professional Solutions for Your Home & Office.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2
              bg-yellow-400 text-black font-semibold
              px-6 py-3 rounded
              hover:bg-yellow-500 transition"
          >
            <FaFileInvoiceDollar />
            Get a Quote
          </Link>

          <Link
            href="tel:+8801912300964"
            className="inline-flex items-center justify-center gap-2
              border border-white text-white font-semibold
              px-6 py-3 rounded
              hover:bg-white/10 transition"
          >
            <FaPhoneAlt />
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
