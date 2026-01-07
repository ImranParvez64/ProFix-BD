import ServiceCard from "./ServiceCard";
import { Bolt, Home, Factory } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/services-bg.jpg')" }} // change if needed
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white text-center md:text-start">
        {/* Heading */}
        <div className="mb-14 max-w-xl">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#FDC700] mb-3">
            Our Services
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Powering Homes & Businesses with Expert Electrical Services
          </h2>

          <p className="mt-4 text-white/80">
            Reliable, certified and professional electrical solutions for
            residential & commercial needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Home className="h-7 w-7" />}
            title="Commercial & Residential Electrical Services"
            description="We provide personalized energy solutions for homeowners,
            businesses & industries ensuring maximum efficiency."
          />

          <ServiceCard
            icon={<Bolt className="h-7 w-7" />}
            title="Electrical Installation & Upgrade"
            description="Safe and modern electrical installations with certified
            components and skilled technicians."
          />

          <ServiceCard
            icon={<Factory className="h-7 w-7" />}
            title="Industrial Electrical Solutions"
            description="Heavy-duty industrial wiring, maintenance and automation
            solutions you can trust."
          />
        </div>
      </div>
    </section>
  );
}
