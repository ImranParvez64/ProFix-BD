import React from "react";

export default function SocialIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-10 h-10 bg-[#f4efe9] flex items-center justify-center rounded-md text-black hover:bg-[#FDC700] hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}
