import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-white p-8 shadow-md transition-all duration-300",
        "hover:bg-[#FDC700] hover:shadow-xl",
        "text-center lg:text-left"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-xl mx-auto lg:mx-0",
          "bg-gray-100 text-[#FDC700] transition-all duration-300",
          "group-hover:bg-white group-hover:text-[#FDC700]"
        )}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold leading-snug text-gray-900">
        {title}
      </h3>

      <div className="my-4 h-px w-full bg-gray-200 group-hover:bg-black/30" />

      {/* Description */}
      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900">
        {description}
      </p>

      {/* Learn More */}
      <div className="mt-6 inline-flex items-center justify-center lg:justify-start gap-2 font-medium text-gray-900">
        Learn More
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  );
}
