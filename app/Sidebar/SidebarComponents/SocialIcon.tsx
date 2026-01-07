"use client";

type Props = {
  icon: any;
};

export default function SocialIcon({ icon: Icon }: Props) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
      <Icon size={18} />
    </div>
  );
}
