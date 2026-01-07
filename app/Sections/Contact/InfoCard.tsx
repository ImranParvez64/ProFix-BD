import React from "react";

export default function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 bg-white shadow-sm rounded-xl p-6">
      <div className="w-12 h-12 rounded-lg bg-[#f4efe9] flex items-center justify-center text-[#FDC700]">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
